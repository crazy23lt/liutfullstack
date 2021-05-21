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
  resourcesAll,
  resourcesDetails,
  resourcesEdit,
  resourcesDel,
  resourcesOption,
  resourcesCreate
} from "@/api/crud";
export default {
  data() {
    return {
      url: "",
      loading: true,
      data: [],
      option: {}
    };
  },
  computed: {
    model() {
      let model = {};

      this.option.column.forEach(col => {
        model[col.prop] = null;
      });
      return model;
    }
  },
  async created() {
    this.url = this.$route.meta.resources;
    let res = await resourcesOption({ url: this.url });
    this.option = res;
  },
  mounted() {
    this.getResourcesList();
  },
  methods: {
    async getResourcesList() {
      let res = await resourcesAll({ url: this.url });
      this.data = res.data;
      this.$nextTick(() => {
        this.loading = false;
      });
    },
    async rowSave(form, done, loading) {
      for (const key in this.model) {
        this.model[key] = form[key];
      }
      let params = {
        url: this.url,
        data: this.model
      };
      let res = await resourcesCreate(params);
      loading();
      if (res) {
        this.$notify({
          title: "成功",
          message: "课程创建成功",
          type: "success"
        });
        done(form);
        this.getResourcesList();
      } else {
        this.$notify({
          title: "失败",
          message: "课程创建失败",
          type: "error"
        });
      }
    },
    refresh(val) {
      this.getResourcesList();
    },
    async rowDel(form, index) {
      let res = await resourcesDel({ url: this.url, id: form._id });
      if (res) {
        this.$notify({
          title: "成功",
          message: "课程删除成功",
          type: "success"
        });
        this.getResourcesList();
      } else {
        this.$notify({
          title: "失败",
          message: "课程删除失败",
          type: "error"
        });
      }
    },
    async rowUpdate(form, index, done, loading) {
      console.info(form);
      for (const key in this.model) {
        this.model[key] = form[key];
      }
      let params = {
        url: this.url,
        id: form._id,
        data: this.model
      };
      let res = await resourcesEdit(params);
      loading();
      if (res) {
        this.$notify({
          title: "成功",
          message: "课程更新成功",
          type: "success"
        });
        done();
        this.getResourcesList();
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
