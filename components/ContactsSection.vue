<template lang="pug">
  section.contacts-section
    .contacts-section__form
      .section-pattern
      .section-content.contact-form
        h2.contact-form__title Write me
        basic-input.contact-form__input(placeholder="Name*")
        basic-input.contact-form__input(placeholder="E-mail*")
        basic-textarea.contact-form__textarea(v-model="formData.message" placeholder="Message*" rows="1")
        basic-button Send
    .contacts-section__text
      .section-pattern
      .section-content
        h2.accent.section-content__title Contacts
        p.section-content__text(v-for="contact in contacts") {{ contact.title }}
          a.section-content__link(:href="contact.link" target="_blank") {{ contact.value }}
        p.secondary.section-content__secondary-text.secondary Located in Samara
</template>

<script>
import BasicInput from "@/components/BasicInput.vue";
import BasicTextarea from "@/components/BasicTextarea.vue";
import BasicButton from "@/components/BasicButton.vue";

export default {
  name: "ContactsSection",
  components: {
    BasicInput,
    BasicTextarea,
    BasicButton
  },
  data() {
    return {
      contacts: [
        {
          title: "E-mail:",
          link: "mailto:tatikurochkina@gmail.com",
          value: "tatikurochkina@gmail.com"
        },
        {
          title: "Telegram:",
          link: "tg://resolve?domain=tanyachickk",
          value: "@tanyachickk"
        }
      ],
      formData: {
        message: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/functions.scss";

.contacts-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;

  $contacts-padding: px-to-vw(80) px-to-vw(85);
  &__form {
    position: relative;
    padding: $contacts-padding;
    height: 70%;
    background: rgb(23, 23, 23);
    border-bottom: 1px solid rgba($color: #3b3b3b, $alpha: 0.2);

    @media (orientation: portrait) {
      display: none;
    }
  }
  &__text {
    position: relative;
    height: 30%;
    min-height: 17vw;
    padding: $contacts-padding;
    color: white;
    background: url("~@/assets/images/content-bg.jpg") no-repeat center center;
    background-size: cover;
    font-family: "Courier", monospace;
    font-size: 18px;
    font-weight: 800;

    @media (orientation: portrait) {
      flex-grow: 1;
      height: auto;
    }
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
    padding: $contacts-padding;

    @media (orientation: portrait) {
      padding: 10vw;
    }

    &__title {
      margin-bottom: px-to-vw(28);

      @media (orientation: portrait) {
        margin-bottom: px-to-vw(10);
      }
    }

    &__link {
      margin-left: px-to-vw(10);
    }

    &__text {
      @media (orientation: portrait) {
        line-height: px-to-vh(25);
      }
    }

    &__secondary-text {
      margin-top: px-to-vw(26);

      @media (orientation: portrait) {
        margin-top: px-to-vh(20);
      }
    }
  }
}
.contact-form {
  &__title {
    margin-bottom: px-to-vw(38);
  }
  &__input {
    margin-bottom: px-to-vw(18);
  }
  &__textarea {
    margin-bottom: px-to-vw(43);
  }
}
</style>