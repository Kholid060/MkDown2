<template>
  <div
    class="
      switch-ui
      relative
      inline-flex
      h-6
      w-12
      justify-center
      items-center
      bg-white bg-opacity-10
      p-1
      rounded-full
    "
    :class="{ 'pointer-events-none opacity-50': disabled }"
  >
    <input
      :checked="modelValue"
      type="checkbox"
      class="absolute h-full w-full opacity-0 cursor-pointer left-0 top-0 z-50"
      v-bind="{ disabled, readonly: disabled || null }"
      @change="emitEvent"
    />
    <div
      class="
        switch-ui__ball
        z-40
        rounded-full
        absolute
        h-4
        w-4
        shadow-xl
        bg-white
        flex
        justify-center
        items-center
      "
    >
      <slot v-if="$slots.ball" name="ball"></slot>
    </div>
    <div
      class="switch-ui__background absolute h-full rounded-md w-full left-0 top-0 bg-primary"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    disabled: Boolean,
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    return {
      emitEvent: (event) => {
        const newValue = !props.modelValue;

        emit('change', newValue);
        emit('update:modelValue', newValue);
      },
    };
  },
};
</script>
<style scoped>
.switch-ui {
  overflow: hidden;
  transition: all 250ms ease;
}

.switch-ui:active {
  transform: scale(0.93);
}

.switch-ui__ball {
  transition: all 250ms ease;
  left: 6px;
}

.switch-ui__background {
  transition: all 250ms ease;
  margin-left: -100%;
}

.switch-ui:hover .switch-ui__ball {
  transform: scale(1.1);
}

.switch-ui input:focus ~ .switch-ui__ball {
  transform: scale(1.1);
}

.switch-ui input:checked ~ .switch-ui__ball {
  color: white;
  left: calc(100% - 21px);
}

.switch-ui input:checked ~ .switch-ui__background {
  margin-left: 0;
}
</style>
