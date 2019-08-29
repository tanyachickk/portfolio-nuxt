<template lang="pug">
  section.contacts-section
    .contacts-section__form
      .section-pattern
      .section-content
        .contact-form__title Write me
        input.contact-form__input(placeholder="Name")
        input.contact-form__input(placeholder="E-mail")
        textarea.contact-form__textarea(placeholder="Message")
        button Send
    .contacts-section__text
      .section-pattern
      .section-content
        .section-content__title Contacts
        .section-content__text E-mail:
          a(href="mailto:tatikurochkina@gmail.com") tatikurochkina@gmail.com
        .section-content__text Telegram:
          a(href="tg://resolve?domain=tanyachickk") @tanyachickk
        .section-content__secondary-text Located in Samara
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
  .section-pattern {
    position: absolute;
    top: 2vw;
    left: 2vw;
    right: 2vw;
    bottom: 2vw;
    background-image: url("~@/assets/images/pattern.png");
    background-size: 16vmax;
    opacity: 0.015;
  }
  .section-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>