<template lang="pug">
  .main
    .page-logo
      logo
    .navigation
      nav.menu
        .menu__link(
          v-for="(section, index) in sections"
          :class="index === currentSectionIndex && 'active'"
          @click="currentSectionIndex = index"
        ) {{ section.link }}
    .info
      page-info(:sections="sections" :current-section-index="currentSectionIndex")
    .content
      .section-content(
        v-for="(info, index) in sections"
        :class="index <= currentSectionIndex && 'active'"
      )
        component.page-section(:is="info.section")
    .socials
</template>

<script>
import Logo from "~/components/MainPageLogo.vue";
import HomeSection from "~/components/HomeSection.vue";
import AboutSection from "~/components/AboutSection.vue";
import PortfolioSection from "~/components/PortfolioSection.vue";
import ContactsSection from "~/components/ContactsSection.vue";
import PageInfo from "~/components/PageInfo.vue";

export default {
  name: "Main",
  components: {
    Logo,
    PageInfo,
    HomeSection,
    AboutSection,
    PortfolioSection,
    ContactsSection
  },
  data() {
    return {
      isLandingOrientation: true,
      resizeTimeout: null,
      currentSectionIndex: 0,
      sections: [
        {
          link: "home",
          title: ["Hello", "I'm Tatiana"],
          section: HomeSection
        },
        {
          link: "about me",
          title: ["About my", "experience"],
          section: AboutSection
        },
        {
          link: "portfolio",
          title: ["Check", "my works"],
          section: PortfolioSection
        },
        {
          link: "contacts",
          title: ["My", "contacts"],
          section: ContactsSection
        }
      ]
    };
  },
  computed: {
    currentSection() {
      return this.sections[this.currentSectionIndex];
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/styles/main-fonts.scss";

:root {
  --primary-pink: #e42ba5;
  --dark-pink: #c50f7a;
  --extra-dark-gray: #131313;
  --dark-gray: #232323;
  --gray: #2b2b2b;
  --lighter-gray: #2f2f2f;
}

.main {
  display: grid;
  grid-template-columns: 19% 31% 30% 20%;
  grid-template-rows: 100%;
  grid-template-areas: "navigation info content socials";
  width: 100vw;
  height: 100vh;
  color: white;
  background-image: url("~@/assets/images/bg.jpg");
  background-size: cover;
  font-family: "Gilroy";
  font-weight: 800;
  overflow: hidden;
  @media (orientation: portrait) {
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
    grid-template-areas: "info" "content";
  }
}
.page-logo {
  position: fixed;
  top: 0;
  left: 5.5vw;
  font-size: 18px;
}
.navigation {
  grid-area: navigation;
  border-right: 1px solid var(--gray);

  .menu {
    position: absolute;
    top: 50%;
    left: 6.7vw;
    font-size: 18px;
    line-height: 75px;
    letter-spacing: 0.9px;
    text-transform: uppercase;
    transform: translateY(-50%);
    &__link {
      color: var(--lighter-gray);
      transition: color 0.3s ease;
      cursor: pointer;
      &.active {
        color: white;
        cursor: default;
      }
    }
  }
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  grid-area: info;
  overflow: hidden;
}
.content {
  position: relative;
  grid-area: content;
  .section-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: gray;
    transform: translateY(100%);
    transition: transform 0.3s ease;
    &.active {
      transform: translateY(0);
    }
  }
}
.socials {
  grid-area: socials;
}
</style>

