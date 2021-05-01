<template>
  <component
    :is="tag"
    role="button"
    class="ui-button relative transition-colors"
    :class="[
      color ? color : variants[variant],
      icon ? 'p-2' : 'py-2 px-4',
      circle ? 'rounded-full' : 'rounded-xl',
      { 'opacity-70': disabled, 'pointer-events-none': loading || disabled },
    ]"
    v-bind="{ disabled: loading || disabled, ...$attrs }"
  >
    <span class="flex justify-center h-full items-center" :class="{ 'opacity-25': loading }">
      <slot></slot>
    </span>
  </component>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: 'button',
    },
    variant: {
      type: String,
      default: 'default',
    },
    icon: Boolean,
    disabled: Boolean,
    loading: Boolean,
    circle: Boolean,
  },
  setup() {
    const variants = {
      default: 'bg-gray-100 bg-opacity-5 focus:bg-opacity-10 hover:bg-opacity-10',
      primary: 'bg-primary text-white focus:bg-blue-600 hover:bg-blue-600',
      danger: 'bg-red-500 text-white focus:bg-red-600 hover:bg-red-600',
    };

    return {
      variants,
    };
  },
};
</script>
<style>
.button-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
