<template lang="pug">
  .page-info
    .page-info__slider(ref="carousel")
      .page-info__content(
        v-for="(section, index) in sections"
      )
        .page-info__title(v-for="line in section.title") {{ line }}
    .page-info__decorator &#60;title&#62;
    .page-info__action
      .page-info__action-line
      .page-info__action-text Contact me
</template>

<script>
import SliderMx from "~/mixins/SliderMx.js";

export default {
  name: "PageInfo",
  mixins: [SliderMx],
  props: {
    sections: {
      type: Array,
      default: () => []
    },
    currentSectionIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    currentSectionIndex(value) {
      this.goTo(value);
    },
    activeIndex(value) {
      this.$emit("change-index", value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/functions.scss";

.page-info {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  &__decorator {
    position: absolute;
    top: 0;
    left: 0;
    font-family: "Courier";
    font-size: px-to-vw(18);
    line-height: px-to-vw(86);
    color: var(--primary-pink);
  }
  &__slider {
    display: flex;
    width: 100%;
    scroll-snap-type: x mandatory;
    overflow-x: auto;
  }
  &__content {
    flex-shrink: 0;
    flex-grow: 0;
    width: 100%;
    padding-top: px-to-vw(86);
    padding-bottom: px-to-vw(86);
    scroll-snap-align: start;
  }
  &__title {
    color: white;
    font-family: "Gilroy";
    font-size: px-to-vw(72);
    font-weight: 400;
    line-height: px-to-vw(86);
    letter-spacing: px-to-vw(3.6);
  }
  &__action {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    &-line {
      width: px-to-vw(35);
      height: px-to-vw(2);
      margin-right: px-to-vw(35);
      background-color: white;
    }
    &-text {
      color: white;
      font-family: "Courier";
      font-size: px-to-vw(18);
      line-height: px-to-vw(86);
    }
  }

  @media (orientation: portrait) {
    $left: 10vw;
    &__decorator {
      padding-left: $left;
      font-size: px-to-vh(14);
      line-height: px-to-vh(86);
    }
    &__content {
      padding-top: px-to-vh(86);
      padding-bottom: px-to-vh(86);
      scroll-snap-align: start;
    }
    &__title {
      padding-left: $left;
      font-size: px-to-vh(36);
      line-height: px-to-vh(48);
      letter-spacing: px-to-vh(1.8);
    }
    &__action {
      padding-left: $left;
      &-line {
        width: px-to-vh(16);
        height: 1px;
        margin-right: px-to-vh(16);
      }
      &-text {
        font-size: px-to-vh(14);
        line-height: px-to-vh(86);
      }
    }
  }
}
</style>
