<template>
  <div
   class="list-ui flex items-center rounded-lg"
   :class="[dense ? 'p-2' : 'p-3']"
   v-on="$listeners">
    <div class="prefix mr-3" v-if="$slots.prefix">
      <slot name="prefix"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'list-ui',
  props: {
    dense: Boolean,
  },
};
</script>
<style lang="scss">
.list-ui {
  transition: background-color 0.2s ease;
  &:hover{
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
