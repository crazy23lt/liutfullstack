<template>
  <div>
    <ele-form
      v-model="formdata"
      :form-desc="formdesc"
      :request-fn="handleSubmit"
    ></ele-form>
  </div>
</template>

<script>
import { courseEdit, courseDetails } from "@/api/course";
export default {
  data() {
    return {
      id: "",
      formdata: {
        name: "",
        cover: ""
      },
      formdesc: {
        name: {
          type: "input",
          label: "课程名称"
        },
        cover: {
          type: "input",
          label: "课程封面"
        }
      }
    };
  },
  mounted() {
    let { id } = this.$route.params;
    this.id = id;
    this._courseDetails(id);
  },
  methods: {
    async _courseDetails(id) {
      let res = await courseDetails(id);
      for (const key in this.formdata) {
        this.formdata[key] = res[key];
      }
    },
    async handleSubmit(data) {
      let res = await courseEdit(this.id, data);
      if (res) {
        this.$notify({
          title: "成功",
          message: "修改课程成功",
          type: "success"
        });
        this.$router.go(-1);
        return Promise.resolve();
      } else {
        this.$notify({
          title: "失败",
          message: "修改课程失败",
          type: "error"
        });
        return Promise.reject();
      }
    }
  }
};
</script>

<style></style>
