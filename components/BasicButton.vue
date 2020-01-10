<template lang="pug">
  button.basic-button(
    v-bind="$attrs"
    v-on="$listeners"
  )
    slot
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
    inputClass() {
      return {
        "basic-button_disabled": this.disabled
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/functions.scss";

.basic-button {
  position: relative;
  padding: px-to-vw(5) px-to-vw(10) px-to-vw(5) px-to-vw(50);
  color: white;
  font-family: "Courier";
  font-size: px-to-vw(18);
  font-weight: 400;
  background: transparent;
  border: none;
  border-radius: 0;
  outline: none;
  transition: all 0.2s ease;

  &:hover {
    color: var(--primary-pink);

    &::before {
      background-color: var(--primary-pink);
    }
  }

  &:active {
    opacity: 0.7;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    height: px-to-vw(2);
    width: px-to-vw(35);
    transform: translateY(-50%);
    background-color: white;
    transition: background 0.2s ease;
  }
}
</style>
