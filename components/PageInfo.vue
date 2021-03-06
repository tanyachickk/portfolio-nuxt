<template lang="pug">
  no-ssr
    transition-group.page-info(name="slide-left")
      carousel.page-info__slider(
        v-if="isShowAnimatedElements"
        key="title"
        v-bind="carouselOptions"
        :value="activeIndex"
        @page-change="$emit('change', $event)"
      )
        slide.page-info__content(
          v-for="(section, index) in sections"
          :key="index"
        )
          .page-info__title(v-for="line in section.title") {{ line }}
      .page-info__decorator(v-if="isShowAnimatedElements" key="decorator") &#60;title&#62;
      .page-info__action(v-if="isShowAnimatedElements" key="action")
        .page-info__action-line
        .page-info__action-text Contact me
</template>

<script>
export default {
  name: "PageInfo",
  props: {
    sections: {
      type: Array,
      default: () => []
    },
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isShowAnimatedElements: false,
      carouselOptions: {
        perPage: 1,
        speed: 700,
        paginationEnabled: false
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.isShowAnimatedElements = true;
    }, 500);
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
    width: 100%;
    font-family: "Courier";
    font-size: px-to-vw(18);
    line-height: px-to-vw(86);
    color: var(--primary-pink);
    transition: transform 700ms ease 50ms;
  }
  &__slider {
    width: 100%;
    transition: transform 700ms ease 250ms;
  }
  &__content {
    flex-shrink: 0;
    flex-grow: 0;
    width: 100%;
    padding-top: px-to-vw(86);
    padding-bottom: px-to-vw(86);
    overflow: hidden;
    border: 1px solid transparent;
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
    width: 100%;
    display: flex;
    align-items: center;
    transition: transform 600ms ease 450ms;
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

.slide-left {
  &-enter,
  &-leave-to {
    transform: translateX(100%);
  }
}
</style>
