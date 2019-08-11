<template lang="pug">
  section.contacts-section
    .contacts-section__form
      .section-pattetn
    .contacts-section__text
      .section-pattetn
</template>

<script>
export default {
  name: "ContactsSection"
};
</script>

<style lang="scss" scoped>
.contacts-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;

  $contacts-padding: 6vmin;
  &__form {
    position: relative;
    padding: $contacts-padding;
    height: 70%;
    background: rgb(23, 23, 23);
    border-bottom: 1px solid rgba($color: #3b3b3b, $alpha: 0.2);
  }
  &__text {
    position: relative;
    height: 30%;
    padding: $contacts-padding;
    color: white;
    background: url("~@/assets/images/content-bg.jpg") no-repeat center center;
    background-size: cover;
    font-family: "Courier", monospace;
    font-size: 18px;
    font-weight: 800;
  }
  .section-pattetn {
    position: absolute;
    top: 2vw;
    left: 2vw;
    right: 2vw;
    bottom: 2vw;
    background-image: url("~@/assets/images/pattern.png");
    background-size: 16vmax;
    opacity: 0.015;
  }
}
</style>