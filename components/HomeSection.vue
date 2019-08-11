<template lang="pug">
  section.home-section
    .home-section__phone
    .home-section__phone
    pattern-text(:text="text")
</template>

<script>
import PatternText from "@/components/PatternText.vue";

export default {
  name: "HomeSection",
  components: {
    PatternText
  },
  data() {
    return {
      text: ["And I'm", "a frontend", "developer."]
    };
  }
};
</script>

<style lang="scss" scoped>
.home-section {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  background: #131313
    radial-gradient(
      circle at 100% 0%,
      rgba($color: #e42ba5, $alpha: 0.07) 0%,
      transparent 80%
    );

  &__phone {
    position: absolute;
    &:nth-child(1) {
      top: 5vh;
      left: 5vh;
      width: 15vw;
      height: 20vw;
      background: url("~@/assets/images/Iphone 1.png") no-repeat center center;
      background-size: contain;

      @media (orientation: portrait) {
        top: 0;
        left: auto;
        right: 0;
        width: 25vh;
        height: 30vh;
        transform: translate(20%, -25%);
      }
    }
    &:nth-child(2) {
      top: 45%;
      right: 0;
      width: 15vw;
      height: 20vw;
      background: url("~@/assets/images/Iphone 2.png") no-repeat center center;
      background-size: contain;
      transform: translate(20%, -50%);

      @media (orientation: portrait) {
        top: auto;
        bottom: 0;
        width: 20vh;
        height: 25vh;
        transform: translate(0, 40%);
      }
    }
  }
}
</style>