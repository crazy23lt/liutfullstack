<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { error } from "@/api/crud";

export default {
  name: "Dashboard",
  computed: {
    ...mapGetters(["name"])
  },
  mounted() {
    error();
    console.info(awdawd);
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
