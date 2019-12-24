<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-chevron-right"
  >
    <g :transform="`rotate(${rotate} 12 12)`">
      <polyline points="9 18 15 12 9 6" />
    </g>
  </svg>
</template>

<script>
export default {
  name: "VkIcon",
  props: {
    width: {
      type: Number | String,
      default: "1.5em"
    },
    height: {
      type: Number | String,
      default: "1.5em"
    },
    color: {
      type: String,
      default: "currentColor"
    },
    rotate: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped></style>
