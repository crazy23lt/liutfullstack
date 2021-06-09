<template>
  <el-row class="liut-container">
    <el-col :span="22" :offset="1">
      <el-card class="box-card">
        <avue-crud
          ref="crud"
          :table-loading="loading"
          :data="data"
          :option="option"
          v-model="form"
          @refresh-change="refresh"
          @row-save="rowSave"
          @row-update="rowUpdate"
          @row-del="rowDel"
          :page.sync="pageInfo"
          @on-load="onLoad"
          @sort-change="sortChange"
          @search-change="searchChange"
          @search-reset="searchReset"
          :upload-preview="uploadPreview"
          :upload-error="uploadError"
          :upload-exceed="uploadExceed"
          :upload-delete="uploadDelete"
          :upload-before="uploadBefore"
          :upload-after="uploadAfter"
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
  resourcesCreate,
  resourcesUpload
} from "@/api/crud";
export default {
  data() {
    return {
      url: "",
      loading: true,
      data: [],
      option: {},
      form: {},
      pageInfo: {
        pageSize: 5,
        pagerCount: 5,
        pageSizes: [2, 5, 10]
      },
      // ↓ 条件查询 ↓
      query: {}
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
  created() {
    this.url = this.$route.meta.resources;
  },
  async mounted() {
    let res = await resourcesOption({ url: this.url });
    this.option = res;
    this.$nextTick(() => {
      this.loading = false;
      this.$refs.crud.init();
    });
  },
  methods: {
    onLoad(page) {
      this.getResourcesList(page);
    },
    getResourcesList(page) {
      let query = { limit: page.pageSize, page: page.currentPage };
      resourcesAll({
        url: this.url,
        params: { query: Object.assign(query, this.query) }
      })
        .then(res => {
          this.data = res.data;
          this.pageInfo.total = res.total;
          this.$nextTick(() => {
            this.loading = false;
          });
        })
        .catch(err => {
          console.info(err);
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
        this.getResourcesList(this.pageInfo);
      } else {
        this.$notify({
          title: "失败",
          message: "课程创建失败",
          type: "error"
        });
      }
    },
    refresh() {
      this.getResourcesList(this.pageInfo);
    },
    async rowDel(form, index) {
      let res = await resourcesDel({ url: this.url, id: form._id });
      if (res) {
        this.$notify({
          title: "成功",
          message: "课程删除成功",
          type: "success"
        });
        this.getResourcesList(this.pageInfo);
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
        this.getResourcesList(this.pageInfo);
      } else {
        this.$notify({
          title: "失败",
          message: "课程更新失败",
          type: "error"
        });
      }
    },
    // ↓ 表格字段排序回调 ↓
    sortChange({ order, prop }) {
      if (!order) {
        this.query.sort = null;
      } else {
        this.query.sort = { [prop]: order === "ascending" ? 1 : -1 };
      }
      this.getResourcesList(this.pageInfo);
    },
    // ↓ 表格字段搜索 ↓
    async searchChange(where, done) {
      for (const key in where) {
        let field = this.option.column.find(v => v.prop === key);
        if (field.regex) {
          where[key] = { $regex: where[key] };
        }
      }
      this.query.where = where;
      await this.getResourcesList(this.pageInfo);
      done();
    },
    // ↓ 重置 表格字段搜索 ↓
    searchReset(where) {
      this.query.where = null;
      this.getResourcesList(this.pageInfo);
    },
    // ↓ 上传查看前的回调 ↓
    uploadPreview(file, column, done) {
      done(); //默认执行打开方法
    },
    // ↓ 上传失败错误回调 ↓
    uploadError(error, column) {},
    // ↓ 上传超过长度限制回调 ↓
    uploadExceed(limit, files, fileList, column) {},
    // ↓ 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除 ↓
    uploadDelete(column, file) {
      return this.$confirm(`这里是自定义的，是否确定移除该选项？`);
    },
    uploadBefore(file, done, loading, column) {
      //如果你想修改file文件,由于上传的file是只读文件，必须复制新的file才可以修改名字，完后赋值到done函数里,如果不修改的话直接写done()即可
      var newFile = new File([file], column.prop, { type: file.type });
      done(newFile);
    },
    // ↓ 上传后的回调 done用于结束操作，loading用于中断操作 ↓
    uploadAfter(res, done, loading, column) {
      done();
    }
  }
};
</script>
<style></style>
