<template lang="pug">
  .basic-textarea
    textarea.basic-textarea__control(
      ref="textarea"
      v-bind="$attrs"
      :class="inputClass"
      v-on="listeners"
    )
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text"
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
        "basic-textarea__control_disabled": this.disabled
      };
    }
  },
  watch: {
    value() {
      this.$refs.textarea.style.height = "auto";
      this.$refs.textarea.style.height = `${this.$refs.textarea.scrollHeight}px`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/functions.scss";

.basic-textarea {
  position: relative;
  width: 100%;
  &__control {
    padding-top: px-to-vw(19);
    padding-bottom: px-to-vw(19);
    width: 100%;
    max-height: 200px;
    min-height: px-to-vw(60);
    color: white;
    font-family: "Courier";
    font-size: px-to-vw(18);
    font-weight: 700;
    line-height: 1.3;
    border-radius: 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    transition: border 0.2s ease;
    outline: none;
    resize: vertical;
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