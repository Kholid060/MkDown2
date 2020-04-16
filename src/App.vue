<template>
  <div class="app">
    <router-view v-if="retrieved" />
    <div
     class="h-full w-full absolute splash"
     v-else>
      <div class="content">
        <h1 class="text-6xl font-bold">MkDown</h1>
        <p class="text-2xl text-lighter">Online Markdown Editor</p>
        <p class="text-lighter mt-6">Loading...</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    retrieved: false,
  }),
  created() {
    if (this.$route.name === 'Home') {
      this.$store.dispatch('retrieve').then(() => {
        this.retrieved = true;
      });
    } else {
      this.retrieved = true;
    }
  },
};
</script>
