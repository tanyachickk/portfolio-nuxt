<template lang="pug">
  section.portfolio-section
    .slider
      .slider__header
        .slider__pages {{ activeIndex + 1 }} / {{ works.length }}
        .slider__navigation
          button(@click="goPrevious") prev
          button(@click="goNext") next
      .slider__carousel(ref="carousel")
        .slide(v-for="work in works")
          pattern-text.slide__title(:text="work.title")
          p.slide__description {{ work.description }}
          p.secondary.slide__technologies {{ work.technologies.join(', ') }}
</template>

<script>
import works from "~/data/works";
import PatternText from "~/components/PatternText.vue";

export default {
  name: "PortfolioSection",
  components: {
    PatternText
  },
  data() {
    return {
      works,
      activeIndex: 0,
      sliderElements: [],
      observer: null
    };
  },
  methods: {
    goPrevious() {
      if (this.activeIndex > 0) {
        this.sliderElements[this.activeIndex - 1].scrollIntoView({
          block: "nearest",
          inline: "start",
          behavior: "smooth"
        });
      }
    },
    goNext() {
      if (this.activeIndex < this.sliderElements.length - 1) {
        this.sliderElements[this.activeIndex + 1].scrollIntoView({
          block: "nearest",
          inline: "start",
          behavior: "smooth"
        });
      }
    },
    handleIntersect(entries) {
      const entry = entries.find(e => e.isIntersecting);
      if (entry) {
        const index = this.sliderElements.findIndex(e => e === entry.target);
        this.activeIndex = index;
      }
    }
  },
  mounted() {
    this.sliderElements = [...this.$refs.carousel.children];
    this.observer = new IntersectionObserver(this.handleIntersect, {
      root: this.$refs.carousel,
      threshold: 0.5
    });
    this.sliderElements.forEach(el => {
      this.observer.observe(el);
    });
  },
  beforeDestroy() {
    this.sliderElements.forEach(el => {
      this.observer.unobserve(el);
    });
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/functions.scss";

.portfolio-section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  background: url("~@/assets/images/content-bg-reverse.jpg") no-repeat center
    center;
  background-size: cover;
}

.slider {
  display: flex;
  flex-direction: column;
  height: 100%;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: px-to-vw(80) px-to-vw(70) px-to-vw(80) px-to-vw(85);
    color: white;
  }
  &__carousel {
    display: flex;
    align-items: stretch;
    scroll-snap-type: x mandatory;
    flex-grow: 1;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }
}
.slide {
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;
  overflow: hidden;

  &__title {
    margin-left: px-to-vw(85);
    margin-bottom: px-to-vw(55);
    font-size: px-to-vw(72);
  }

  &__description {
    margin-left: px-to-vw(85);
    margin-right: px-to-vw(70);
    margin-bottom: px-to-vw(40);
  }

  &__technologies {
    margin-left: px-to-vw(85);
    margin-right: px-to-vw(70);
  }
}
</style>