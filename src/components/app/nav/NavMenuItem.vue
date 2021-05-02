<template>
  <ui-popover trigger="mouseenter click">
    <template #trigger>
      <slot name="trigger">
        <button>
          <slot></slot>
          <v-mdi v-if="!hideArrow" name="mdi-chevron-down" class="align-bottom"></v-mdi>
        </button>
      </slot>
    </template>
    <ui-list class="space-y-1">
      <ui-list-item
        v-for="item in items"
        :key="item.id"
        class="cursor-pointer relative"
        @click="$emit('select', item.id)"
      >
        <slot name="item" v-bind="item">
          {{ item.name }}
        </slot>
      </ui-list-item>
    </ui-list>
  </ui-popover>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    hideArrow: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['select'],
};
</script>
