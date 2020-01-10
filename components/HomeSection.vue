<template lang="pug">
  section.home-section
    .home-section__images(ref="parallaxScene")
      .home-section__image-wrapper(data-depth="0.3")
        img.home-section__phone.first(:src="images[0]")
      .home-section__image-wrapper(data-depth="-0.25")
        img.home-section__phone.second(:src="images[1]")
    pattern-text.home-section__title(:text="text")
</template>

<script>
import Parallax from "parallax-js";
import { debounce } from "throttle-debounce";
import PatternText from "@/components/PatternText.vue";
import Image1 from "@/assets/images/Iphone_1.png";
import Image2 from "@/assets/images/Iphone_2.png";

export default {
  name: "HomeSection",
  components: {
    PatternText
  },
  data() {
    return {
      debouncedResize: debounce(100, this.updateParallax),
      parallaxInstance: null,
      images: [Image1, Image2],
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
    },
    updateParallax() {
      this.parallaxInstance.destroy();
      this.parallaxInstance = new Parallax(this.$refs.parallaxScene, {});
    }
  },
  created() {
    if (process.client) {
      document.addEventListener("mousemove", this.onMouseMove);
      window.addEventListener("resize", this.debouncedResize);
    }
  },
  mounted() {
    this.parallaxInstance = new Parallax(this.$refs.parallaxScene, {});
  },
  beforeDestroy() {
    if (process.client) {
      document.removeEventListener("mousemove", this.onMouseMove);
      window.removeEventListener("resize", this.debouncedResize);
      this.parallaxInstance.destroy();
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

  &__images {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &__image-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &__phone {
    position: absolute;
    &.first {
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
    &.second {
      top: 30%;
      right: -8%;
      width: 15vw;
      height: 20vw;
      background-size: contain;

      @media (orientation: portrait) {
        top: auto;
        right: -5vh;
        bottom: -7vh;
        width: 25vh;
        height: 30vh;
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
    @media (orientation: portrait) and (min-width: 500px) {
      font-size: 50px;
    }
  }
}
</style>
