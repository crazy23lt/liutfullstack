<template>
  <v-app dark>
    <h1>热门课程{{ baseUrl }}</h1>
    <course-group :courses="courses" @select="_select" />
  </v-app>
</template>
<script>
import courseGroup from "~/components/courseGroup.vue";
export default {
  components: {
    courseGroup,
  },
  data() {
    return {
      baseUrl: process.env.BASE_API,
      courses: [
        {
          src: "",
          name: "",
        },
        {
          src: "",
          name: "",
        },
        {
          src: "",
          name: "",
        },
        {
          src: "",
          name: "",
        },
        {
          src: "",
          name: "",
        },
        {
          src: "",
          name: "",
        },
      ],
    };
  },
  methods: {
    _select(course) {
      console.info(course);
    },
  },
};
</script>
<style lang="scss" scoped></style>
