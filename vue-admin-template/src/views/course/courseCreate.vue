<template>
  <div>
    <ele-form
      v-model="formdata"
      :form-desc="formdesc"
      :request-fn="handleSubmit"
      :rules="rules"
    ></ele-form>
  </div>
</template>

<script>
import { courseCreate } from "@/api/course";
export default {
  data() {
    return {
      formdata: {},
      formdesc: {
        name: {
          type: "input",
          label: "课程名称"
        },
        cover: {
          type: "input",
          label: "课程封面"
        }
      },
      rules: {
        name: {
          required: true,
          type: "string",
          message: "必须填写课程名称"
        },
        cover: {
          required: true,
          type: "string",
          message: "必须填写课程名称"
        }
      }
    };
  },
  methods: {
    async handleSubmit(data) {
      let res = await courseCreate(data);
      if (res) {
        this.$notify({
          title: "成功",
          message: "添加课程成功",
          type: "success"
        });
        this.$router.go(-1);
        return Promise.resolve();
      } else {
        this.$notify({
          title: "失败",
          message: "添加课程失败",
          type: "error"
        });
        return Promise.reject();
      }
    }
  }
};
</script>

<style></style>
