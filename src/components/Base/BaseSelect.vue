<template>
  <v-popover placement="bottom" offset="10">
    <div class="select-ui" tabindex="0" :class="{ block }">
      <div class="select-ui--inner">
        <slot name="selected" :value="value">
          <p class="text-overflow text">{{ value }}</p>
        </slot>
        <v-mdi name="mdi-chevron-down"></v-mdi>
      </div>
    </div>
    <card-ui slot="popover" class="shadow-xl border select-ui--content">
      <p class="font-semibold" slot="header" v-if="!!title">{{ title }}</p>
      <div
       class="select-ui--item"
       v-for="item in list"
       :key="item"
       @change="$emit('change', item)"
       @click="$emit('input', item)"
       v-close-popover>
        <slot name="option" :value="item">{{ item }}</slot>
      </div>
    </card-ui>
  </v-popover>
</template>
<script>
import '~/assets/scss/components/_select.scss';

export default {
  name: 'select-ui',
  props: {
    value: [String, Number],
    list: Array,
    block: Boolean,
    title: String,
  },
};
</script>
