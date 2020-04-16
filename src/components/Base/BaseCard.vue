<template>
  <div
    class="card-ui relative"
    :class="{ 'hover:shadow-xl is-hover': hover, border: outline, small, large, disabled }"
    :style="{ height, width }"
    @click="$emit('click', $event)"
  >
    <div class="card-ui--image" @click="$emit('click:image')" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="card-ui--header flex items-center" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="card-ui--content" @click="$emit('click:content')">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import '~/assets/scss/components/_card.scss';

export default {
  name: 'card-ui',
  props: {
    outline: Boolean,
    hover: Boolean,
    small: Boolean,
    disabled: Boolean,
    large: Boolean,
    height: [String, Number],
    width: [String, Number],
  },
};
</script>
