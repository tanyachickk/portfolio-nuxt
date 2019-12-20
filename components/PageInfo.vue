<template lang="pug">
  .page-info
    .page-info__decorator &#60;title&#62;
    .page-info__slider(:style="`width: ${100*sections.length}%; transform: translateX(-${currentSectionIndex*100/sections.length}%)`")
      .page-info__content(
        v-for="(section, index) in sections"
        :style="`width: ${100/sections.length}%`"
      )
        .page-info__title(v-for="line in section.title") {{ line }}
    .page-info__action
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
    currentSectionIndex: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/functions.scss";

.page-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  &__decorator {
    font-family: "Courier";
    font-size: px-to-vw(18);
    line-height: px-to-vw(86);
    color: var(--primary-pink);
  }
  &__slider {
    display: flex;
    transition: transform 0.3s ease;
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
      font-size: 14px;
      line-height: 86px;
    }
    &__title {
      padding-left: $left;
      font-size: 36px;
      line-height: 48px;
      letter-spacing: 1.8px;
    }
    &__action {
      padding-left: $left;
      &-line {
        width: 16px;
        height: 1px;
        margin-right: 16px;
      }
      &-text {
        font-size: 14px;
        line-height: 86px;
      }
    }
  }
}
</style>