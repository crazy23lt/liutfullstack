<template>
  <div>User</div>
</template>

<script>
import { findUsers } from "@/api/user";
export default {
  mounted() {
    this.findUsers();
  },
  methods: {
    findUsers() {
      findUsers()
        .then(res => {
          console.info(res);
        })
        .catch(err => {
          console.info(err);
        });
    }
  }
};
</script>

<style></style>
