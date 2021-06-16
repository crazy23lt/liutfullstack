<template>
  <div class="course">
    <div
      class="course-item ma10"
      v-for="(course, index) in courses"
      :key="index"
      @click="$emit('select', course)"
    >
      <img class="img" src="~/assets/course.jpg" alt="" />
      <div class="_info"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courses: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.course {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  &-item {
    width: 206px;
    height: 116px;
    position: relative;
    overflow: hidden;
    .img,
    ._info {
      height: inherit;
      width: inherit;
    }
    ._info {
      position: absolute;
      top: 80%;
      left: 0;
      transition: top 0.2s ease;
      background: linear-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.5) 20%);
    }
    &:hover ._info {
      top: 0;
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    }
  }
}
</style>
