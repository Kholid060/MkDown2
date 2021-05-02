<template>
  <div :class="{ 'bg-gray-100 bg-opacity-5': show }" class="rounded-xl">
    <div
      class="cursor-pointer flex items-center py-2 transition-all duration-200"
      :class="{ 'px-4': show }"
      @click="show = !show"
    >
      <slot></slot>
      <div class="flex-grow"></div>
      <v-mdi name="mdi-chevron-down" :rotate="show ? 180 : 0"></v-mdi>
    </div>
    <transition-expand>
      <ui-list v-if="show" class="px-4 pt-1 space-y-1 pb-2">
        <ui-list-item
          v-for="item in items"
          :key="item.id"
          class="cursor-pointer"
          @click="$emit('select', item.id)"
        >
          {{ item.name }}
        </ui-list-item>
      </ui-list>
    </transition-expand>
  </div>
</template>
<script>
import { ref } from 'vue';
import TransitionExpand from '../../transitions/TransitionExpand.vue';

export default {
  components: { TransitionExpand },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['select'],
  setup() {
    const show = ref(false);

    return {
      show,
    };
  },
};
</script>
