<template>
  <el-row class="liut-container">
    <el-col :span="22" :offset="1">
      <el-card class="box-card">
        <avue-crud
          ref="crud"
          :table-loading="loading"
          :data="data"
          :option="option"
          @refresh-change="refresh"
          @row-save="rowSave"
          @row-update="rowUpdate"
          @row-del="rowDel"
          :page.sync="pageInfo"
          @on-load="onLoad"
          @sort-change="sortChange"
          @search-change="searchChange"
          @search-reset="searchReset"
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
      option: {},
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
    }
  }
};
</script>
<style></style>
