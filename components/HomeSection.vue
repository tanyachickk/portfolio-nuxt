<template lang="pug">
  section.home-section
    img.home-section__phone(:style="firstImageStyle" src="~@/assets/images/Iphone_1.png")
    img.home-section__phone(:style="secondImageStyle" src="~@/assets/images/Iphone_2.png")
    pattern-text.home-section__title(:text="text")
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
      text: ["And I'm", "a frontend", "developer."],
      lFollowX: 0,
      lFollowY: 0,
      x: 0,
      y: 0
    };
  },
  computed: {
    firstImageStyle() {
      return `transform: translate(${-this.x}px, ${-this.y}px)`;
    },
    secondImageStyle() {
      return `transform: translate(${this.x}px, ${this.y}px)`;
    }
  },
  methods: {
    onMouseMove(e) {
      const lMouseX = Math.max(
        -100,
        Math.min(100, window.innerWidth / 2 - e.clientX)
      );
      const lMouseY = Math.max(
        -100,
        Math.min(100, window.innerHeight / 2 - e.clientY)
      );
      this.lFollowX = (5 * lMouseX) / 100;
      this.lFollowY = (5 * lMouseY) / 100;
      this.x += this.lFollowX - this.x;
      this.y += this.lFollowY - this.y;
    }
  },
  created() {
    if (process.client) {
      document.addEventListener("mousemove", this.onMouseMove);
    }
  },
  beforeDestroy() {
    if (process.client) {
      document.removeEventListener("mousemove", this.onMouseMove);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/functions.scss";

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

  @media (orientation: portrait) {
    justify-content: center;
  }

  &__phone {
    position: absolute;
    transition: translate 0.2s ease;
    &:nth-child(1) {
      top: 8%;
      left: 2%;
      width: 15vw;
      height: 20vw;
      background-size: contain;

      @media (orientation: portrait) {
        top: -6vh;
        left: auto;
        right: -10vh;
        width: 25vh;
        height: 30vh;
      }
    }
    &:nth-child(2) {
      top: 30%;
      right: -8%;
      width: 15vw;
      height: 20vw;
      background-size: contain;

      @media (orientation: portrait) {
        top: auto;
        right: -2vh;
        bottom: -10vh;
        width: 25vh;
        height: 30vh;
        transform: translate(0, 40%);
      }
    }
  }
  &__title {
    position: relative;
    margin: 0 2.2vw 5vw;
    font-size: 4vw;
    z-index: 1;

    @media (orientation: portrait) {
      margin: 0 10vw;
      font-size: 10vw;
      transform: translateY(px-to-vh(-50));
    }
    @media (orientation: portrait) and (min-width: 760px) {
      font-size: 76px;
    }
  }
}
</style>