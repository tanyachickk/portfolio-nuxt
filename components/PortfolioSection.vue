<template lang="pug">
  no-ssr
    section.portfolio-section
      .slider
        .slider__header
          .slider__pages
            .slider__current-page {{ `${activeIndex + 1}`.padStart(2, "0") }}
            .slider__divider /
            .slider__pages-count {{ `${works.length}`.padStart(2, "0") }}
          .slider__navigation
            button.slider__arrow(:disabled="isPrevDisabled" @click="goPrevious")
              arrow-icon(:rotate="180")
            button.slider__arrow(:disabled="isNextDisabled" @click="goNext")
              arrow-icon
        carousel.slider__carousel(v-bind="carouselOptions" :value="activeIndex" @page-change="activeIndex = $event")
          slide.slide(v-for="(work, index) in works" :key="index")
            pattern-text.slide__title(:text="work.title")
            p.slide__description {{ work.description }}
            p.secondary.slide__technologies {{ work.technologies.join(', ') }}
</template>

<script>
import works from "~/data/works";
import PatternText from "~/components/PatternText.vue";
import ArrowIcon from "~/components/icons/ArrowIcon.vue";

export default {
  name: "PortfolioSection",
  components: {
    PatternText,
    ArrowIcon
  },
  data() {
    return {
      works,
      activeIndex: 0,
      carouselOptions: {
        perPage: 1,
        speed: 300,
        paginationEnabled: false
      }
    };
  },
  computed: {
    isPrevDisabled() {
      return this.activeIndex === 0;
    },
    isNextDisabled() {
      return this.activeIndex === this.works.length - 1;
    }
  },
  methods: {
    goPrevious() {
      if (!this.isPrevDisabled) {
        this.activeIndex--;
      }
    },
    goNext() {
      if (!this.isNextDisabled) {
        this.activeIndex++;
      }
    }
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
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: px-to-vw(80) px-to-vw(70) px-to-vw(60) px-to-vw(85);
    color: white;
    z-index: 1;

    @media (orientation: portrait) {
      position: absolute;
      top: 0;
      right: 0;
      flex-direction: column;
      align-items: flex-end;
      padding: px-to-vh(58) px-to-vh(34) 0 10vw;
    }
  }
  &__pages {
    position: relative;
    display: flex;
    align-items: center;
    font-size: px-to-vw(18);
    font-family: "Courier";
    line-height: px-to-vw(30);
    padding-left: px-to-vw(50);

    @media (orientation: portrait) {
      font-size: px-to-vh(14);
      margin-bottom: px-to-vh(15);
      margin-right: px-to-vh(10);
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      min-height: 1px;
      height: px-to-vw(2);
      width: px-to-vw(35);
      transform: translateY(-50%);
      background-color: white;
      @media (orientation: portrait) {
        display: none;
      }
    }
  }
  &__current-page {
    margin-right: px-to-vw(15);
    @media (orientation: portrait) {
      margin-right: px-to-vh(10);
    }
  }
  &__divider {
    color: var(--dark-gray);
    margin-right: px-to-vw(15);
    @media (orientation: portrait) {
      margin-right: px-to-vh(10);
    }
  }
  &__pages-count {
    color: var(--dark-gray);
  }
  &__navigation {
    @media (orientation: portrait) {
      margin-right: px-to-vh(-8);
    }
  }
  &__arrow {
    background-color: transparent;
    outline: none;
    border: none;
    color: white;
    font-size: px-to-vw(16);
    padding: px-to-vw(10);
    cursor: pointer;

    @media (orientation: portrait) {
      font-size: px-to-vh(16);
      padding: px-to-vh(8);
    }

    &[disabled] {
      color: var(--lighter-gray);
      cursor: default;
    }
  }
  &__carousel {
    flex-grow: 1;
    width: 100%;
  }
}
.slide {
  overflow: hidden;

  &__title {
    margin-left: px-to-vw(85);
    margin-bottom: px-to-vw(55);
    font-size: px-to-vw(72);

    @media (orientation: portrait) {
      font-size: px-to-vh(40);
      margin-top: px-to-vh(40);
      margin-left: 10vw;
    }
  }

  &__description {
    margin-left: px-to-vw(85);
    margin-right: px-to-vw(70);
    margin-bottom: px-to-vw(40);

    @media (orientation: portrait) {
      margin-left: 10vw;
    }
  }

  &__technologies {
    margin-left: px-to-vw(85);
    margin-right: px-to-vw(70);

    @media (orientation: portrait) {
      margin-left: 10vw;
    }
  }
}
</style>
