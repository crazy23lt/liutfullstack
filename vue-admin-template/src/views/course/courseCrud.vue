<template>
  <el-row class="liut-container">
    <el-col :span="22" :offset="1">
      <el-card class="box-card">
        <avue-crud
          :table-loading="loading"
          :data="data"
          :option="option"
          @refresh-change="refresh"
          @row-save="rowSave"
          @row-update="rowUpdate"
          @row-del="rowDel"
        ></avue-crud>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import {
  courseList,
  courseCreate,
  courseDetails,
  courseEdit,
  courseDel
} from "@/api/course.js";
export default {
  data() {
    return {
      loading: true,
      data: [],
      option: {
        title: "课程管理",
        titleSize: "h3",
        titleStyle: {
          color: "gray"
        },
        border: true,
        stripe: true,
        page: false,
        align: "center",
        menuAlign: "center",
        column: [
          {
            label: "课程名称",
            prop: "name"
          },
          {
            label: "课程课时",
            prop: "cover"
          }
        ]
      }
    };
  },
  mounted() {
    this.getCourseList();
  },
  methods: {
    async getCourseList() {
      let res = await courseList();
      this.data = res.data;
      this.$nextTick(() => {
        this.loading = false;
      });
    },
    async rowSave(form, done, loading) {
      let res = await courseCreate({ name: form.name, cover: form.cover });
      loading();
      if (res) {
        this.$notify({
          title: "成功",
          message: "课程创建成功",
          type: "success"
        });
        done(form);
      } else {
        this.$notify({
          title: "失败",
          message: "课程创建失败",
          type: "error"
        });
      }
    },
    refresh(val) {
      this.getCourseList();
    },
    async rowDel(form, index) {
      let res = await courseDel(form._id);
      if (res) {
        this.$notify({
          title: "成功",
          message: "课程删除成功",
          type: "success"
        });
      } else {
        this.$notify({
          title: "失败",
          message: "课程删除失败",
          type: "error"
        });
      }
    },
    async rowUpdate(form, index, done, loading) {
      let res = await courseEdit(form._id, {
        name: form.name,
        cover: form.cover
      });
      loading();
      if (res) {
        this.$notify({
          title: "成功",
          message: "课程更新成功",
          type: "success"
        });
        done(form);
      } else {
        this.$notify({
          title: "失败",
          message: "课程更新失败",
          type: "error"
        });
      }
    }
  }
};
</script>

<style></style>
