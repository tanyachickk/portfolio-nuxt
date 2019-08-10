<template lang="pug">
  .main
    .info
      page-info(:sections="sections" :current-section-index="currentSectionIndex")
    .content
      .section-content(
        v-for="(info, index) in sections"
        :class="index <= currentSectionIndex && 'active'"
      )
        component.page-section(:is="info.section")
    .socials
      a.social-icon(href="https://vk.com/tanyachickk" target="_blank")
        vk-icon(:width="19" :height="16")
      a.social-icon(href="https://www.linkedin.com/in/tatiana-kurochkina-217b24163/" target="_blank")
        linkedin-icon(:width="16" :height="16")
      a.social-icon(href="https://github.com/tanyachickk" target="_blank")
        github-icon(:width="16" :height="16")
      a.social-icon(href="https://www.instagram.com/tanyachickk/" target="_blank")
        inst-icon(:width="16" :height="16")
    
    .burger-menu(@click="isShowMenu = true")
      bar-icon
    .navigation
      .pagination
        .pagination__item(
          v-for="(section, index) in sections"
          :class="index === currentSectionIndex && 'active'"
          @click="changeSection(index)"
        )
      .menu(:class="isShowMenu && 'active'")
          .menu__close(@click="isShowMenu = false")
            close-icon
          .menu__link(
            v-for="(section, index) in sections"
            :class="index === currentSectionIndex && 'active'"
            @click="changeSection(index)"
          ) {{ section.link }}
    .page-logo
      logo
</template>

<script>
import Logo from "~/components/MainPageLogo.vue";
import HomeSection from "~/components/HomeSection.vue";
import AboutSection from "~/components/AboutSection.vue";
import PortfolioSection from "~/components/PortfolioSection.vue";
import ContactsSection from "~/components/ContactsSection.vue";
import PageInfo from "~/components/PageInfo.vue";
import BarIcon from "~/components/icons/BarIcon.vue";
import CloseIcon from "~/components/icons/CloseIcon.vue";
import VkIcon from "~/components/icons/VkIcon.vue";
import LinkedinIcon from "~/components/icons/LinkedinIcon.vue";
import GithubIcon from "~/components/icons/GithubIcon.vue";
import InstIcon from "~/components/icons/InstIcon.vue";

export default {
  name: "Main",
  components: {
    Logo,
    PageInfo,
    BarIcon,
    CloseIcon,
    HomeSection,
    AboutSection,
    PortfolioSection,
    ContactsSection,
    VkIcon,
    InstIcon,
    LinkedinIcon,
    GithubIcon
  },
  data() {
    return {
      isLandingOrientation: true,
      isShowMenu: false,
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
  },
  methods: {
    changeSection(index) {
      this.currentSectionIndex = index;
      this.isShowMenu = false;
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
    grid-template-rows: 45% 55%;
    grid-template-areas: "info" "content";
  }
}
.page-logo {
  position: fixed;
  top: 0;
  left: 5.5vw;
  font-size: 18px;
  @media (orientation: portrait) {
    left: 10vw;
    font-size: 10px;
  }
}
.burger-menu {
  display: none;
  @media (orientation: portrait) {
    position: fixed;
    top: 0;
    right: 5px;
    display: block;
    padding: 20px;
    color: white;
    z-index: 5;
  }
}
.navigation {
  position: relative;
  grid-area: navigation;
  border-right: 1px solid var(--gray);

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 6.7vw;
    &__close {
      display: none;
    }
    &__link {
      font-size: 18px;
      line-height: 75px;
      letter-spacing: 0.9px;
      text-transform: uppercase;
      color: var(--lighter-gray);
      transition: color 0.3s ease;
      cursor: pointer;
      &.active {
        color: white;
        cursor: default;
      }
    }
    @media (orientation: portrait) {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: -1;
      padding-left: 0;
      align-items: center;
      background-color: rgba(20, 20, 20, 0.95);
      opacity: 0;
      transition: opacity 0.3s ease;
      &.active {
        opacity: 1;
        z-index: 100;
      }
      &__close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        background-color: var(--dark-pink);
        border-radius: 50%;
        margin-bottom: 28px;
      }
      &__link {
        position: relative;
        color: white;
        text-align: center;
        &::after {
          content: "";
          position: absolute;
          top: 48%;
          left: -7%;
          right: -7%;
          height: 5px;
          background-color: var(--dark-pink);
          transform: translateY(-50%) scaleX(0);
          transition: transform 0.3s ease;
        }
        &.active {
          &::after {
            transform: translateY(-50%) scaleX(1);
          }
        }
      }
    }
  }

  .pagination {
    display: none;
    @media (orientation: portrait) {
      position: fixed;
      top: 0;
      right: 35px;
      bottom: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      z-index: 1;
      &__item {
        position: relative;
        width: 30px;
        height: 30px;
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background-color: #3d3d3d;
          transition: background-color 0.3s ease;
        }
        &.active {
          &::after {
            background-color: var(--dark-pink);
          }
        }
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
  @media (orientation: portrait) {
    padding-top: 40px;
  }
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 150px;
  padding-bottom: 130px;
  .social-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 50px;
    height: 50px;
    background-color: var(--dark-gray);
    border-radius: 50%;
    color: white;
    transition: background-color 0.3s ease;
    cursor: pointer;
    &:hover {
      background-color: var(--primary-pink);
    }

    @media (orientation: portrait) {
      display: none;
    }
  }
}
</style>

