<template>
  <div>
    <router-link to="/create/course">
      <el-button type="primary" round size="small"
        >CreateCourse
      </el-button></router-link
    >
    <el-table :data="courseList" v-loading="loading">
      <el-table-column prop="name" fit label="Name" align="center">
      </el-table-column>
      <el-table-column prop="cover" fit label="Cover" align="center">
      </el-table-column>
      <el-table-column prop="episodes" fit label="Episodes" align="center">
      </el-table-column>
      <el-table-column label="Option" fit align="center">
        <template slot-scope="scope">
          <router-link :to="`/edit/course/${scope.row._id}`">
            <el-button type="warning" round size="small">
              Edit
            </el-button>
          </router-link>
          <router-link :to="`/details/course/${scope.row._id}`">
            <el-button type="info" round size="small">
              Details
            </el-button>
          </router-link>
          <el-popconfirm
            confirm-button-text="好的"
            cancel-button-text="不用了"
            icon="el-icon-info"
            icon-color="red"
            title="这是一段内容确定删除吗？"
            @onConfirm="delCourse(scope.row._id)"
          >
            <el-button slot="reference" type="danger" round size="small"
              >Del</el-button
            >
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { courseList, courseDetails, courseDel } from "@/api/course";
export default {
  data() {
    return {
      courseList: [],
      loading: true
    };
  },
  mounted() {
    this.getCourseList();
  },
  methods: {
    async getCourseList() {
      let res = await courseList();
      this.courseList = res.data;
      this.$nextTick(() => {
        this.loading = false;
      });
    },
    async delCourse(id) {
      this.loading = true;
      let res = await courseDel(id);
      if (res) {
        this.courseList = this.courseList.filter(item => item._id !== id);
        this.$notify({
          title: "成功",
          message: "删除课程成功",
          type: "success"
        });
        this.$nextTick(() => {
          this.loading = false;
        });
      }
    },
    async getCourseDetails() {
      let res = await courseDetails();
      console.info(res);
    }
  }
};
</script>

<style></style>
