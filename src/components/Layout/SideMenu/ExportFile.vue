<template>
  <expand-ui
    title="Export as">
    <list-ui
    v-for="type in types"
    :key="type"
    class="cursor-pointer capitalize"
    @click="exportFile(type)">{{type.replace('-', ' ')}}</list-ui>
  </expand-ui>
</template>
<script>
import exportFile from '~/mixins/exportFile';

export default {
  mixins: [exportFile],
};
</script>
