<template>
  <svg class="content-block__text">
    <defs>
      <clipPath id="clipping-text">
        <text x="0" y="0" dx="0" dy="0">
          <tspan x="0" dy="1.2em" v-for="(row, index) in text" :key="index">{{ row }}</tspan>
        </text>
      </clipPath>
    </defs>
    <pattern id="bg-pattern" width="100%" height="100%" patternTransform="rotate(0)">
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
      clip-path="url(#clipping-text)"
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
  }
};
</script>

<style lang="scss" scoped>
.content-block__text {
  width: 100%;
  height: 15vw;
  margin: 0 2.5vw 5vw;
  color: white;
  font-family: Gilroy;
  font-weight: 900;
  letter-spacing: 0.2vw;
  font-size: 4vw;
  text-transform: uppercase;

  @media (orientation: portrait) {
    height: 28vh;
    margin-left: 40px;
    margin-bottom: 60px;
    font-size: 6vh;
  }
}
</style>