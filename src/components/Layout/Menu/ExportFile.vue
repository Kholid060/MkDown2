<template>
  <v-popover>
    <button-ui plain class="lg:inline-block mr-4 hidden text-sm">
      Export as
      <v-mdi name="mdi-chevron-down"></v-mdi>
    </button-ui>
    <template slot="popover">
      <card-ui class="shadow-xl border">
        <list-ui
         @click="exportFile(type)"
         dense
         class="cursor-pointer capitalize"
         v-for="type in types"
         :key="type">
          {{type.replace('-', ' ')}}
        </list-ui>
      </card-ui>
    </template>
  </v-popover>
</template>
<script>
import exportFile from '~/mixins/exportFile';

export default {
  mixins: [exportFile],
};
</script>
