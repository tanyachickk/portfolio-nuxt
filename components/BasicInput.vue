<template lang="pug">
  .basic-input
    input.basic-input__control(
      v-bind="$attrs"
      :class="inputClass"
      v-on="listeners"
    )
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: event => {
          if (!this.disabled) {
            this.$emit("input", event.target.value);
          }
        }
      };
    },
    inputClass() {
      return {
        "basic-input__control_disabled": this.disabled
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/functions.scss";

.basic-input {
  position: relative;
  width: 100%;
  &__control {
    width: 100%;
    color: white;
    font-family: "Courier";
    font-size: px-to-vw(18);
    font-weight: 700;
    line-height: px-to-vw(56);
    border-radius: 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    transition: border 0.2s ease;
    outline: none;
    &:focus {
      border-bottom-color: var(--primary-pink);
    }
  }
}

.slide-up {
  &-enter-to,
  &-leave {
    transition: all 0.3s ease;
  }
  &-enter,
  &-leave-to {
    transform: translateY(50%);
    opacity: 0;
  }
}
</style>
