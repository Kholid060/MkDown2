<template>
  <expand-ui title="Preview As">
    <a
     v-for="type in types"
     :href="`/preview/${type}`"
     :key="type"
     target="_blank">
      <list-ui class="capitalize">{{type.replace('-', ' ')}}</list-ui>
    </a>
  </expand-ui>
</template>
<script>
export default {
  data: () => ({
    types: ['markdown', 'html', 'styled-html'],
  }),
};
</script>
