<template>
  <svg class="content-block__text" :height="`${1.2 * text.length}em`">
    <defs>
      <clipPath :id="clippingId">
        <text x="0" y="0" dx="0" dy="0">
          <tspan v-for="(row, index) in text" :key="index" x="0" dy="1.2em">
            {{ row }}
          </tspan>
        </text>
      </clipPath>
    </defs>
    <pattern
      id="bg-pattern"
      width="100%"
      height="100%"
      patternTransform="rotate(0)"
    >
      <image
        preserveAspectRatio="none"
        xlink:href="~@/assets/images/pink-bg.jpg"
        x="-205%"
        y="-215%"
        height="400%"
        width="400%"
      />
    </pattern>
    <rect
      class="text-background"
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="url(#bg-pattern)"
      :clip-path="`url(#${clippingId})`"
    />
  </svg>
</template>

<script>
export default {
  name: "PatternText",
  props: {
    text: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    clippingId() {
      const flatStr = this.text.join("");
      if (!flatStr.length) {
        return "";
      }
      let h = 0;
      let l = flatStr.length;
      let i = 0;
      while (i < l) {
        h = ((h << 5) - h + flatStr.charCodeAt(i++)) | 0;
      }
      return `clipping-text-${h}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.content-block__text {
  width: 100%;
  color: white;
  font-family: Gilroy;
  font-weight: 900;
  letter-spacing: 0.2vw;
  text-transform: uppercase;

  @media (orientation: portrait) {
  }
}
</style>
