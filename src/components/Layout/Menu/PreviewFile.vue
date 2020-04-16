<template>
  <v-popover>
    <button-ui plain class="lg:inline-block mr-4 hidden text-sm">
      Preview as
      <v-mdi name="mdi-chevron-down"></v-mdi>
    </button-ui>
    <template slot="popover">
      <card-ui class="shadow-xl border">
        <a
         v-for="type in types"
         :href="`/preview/${type}`"
         :key="type"
         target="_blank">
          <list-ui class="capitalize">{{type.replace('-', ' ')}}</list-ui>
        </a>
      </card-ui>
    </template>
  </v-popover>
</template>
<script>
export default {
  data: () => ({
    types: ['markdown', 'html', 'styled-html'],
  }),
};
</script>
