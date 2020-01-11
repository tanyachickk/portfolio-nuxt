<template lang="pug">
  .main
    .info
      page-info(
        :sections="sections"
        :active-index="currentSectionIndex"
        @change="changeSection($event)"
      )
    .content
      .section-content(
        v-for="(info, index) in sections"
        :class="index <= currentSectionIndex && 'active'"
      )
        component.page-section(:is="info.section")
    transition-group.socials(name="slide-up" v-if="isShowSocials")
      a.social-icon(
        v-if="isShowAnimatedElements"
        v-for="(item, index) in socials"
        :key="item.name"
        :href="item.link"
        :style="`transition: transform 600ms ease ${index * 150}ms`"
        target="_blank"
      )
        conponent(:is="item.icon" :width="item.iconWidth" :height="item.iconHeight")
    .burger-menu(@click="isShowMenu = true")
      bar-icon
    .navigation
      .pagination
        .pagination__item(
          v-for="(section, index) in sections"
          :class="index === currentSectionIndex && 'active'"
          @click="changeSection(index)"
        )
      transition-group.menu(name="slide-right" :class="isShowMenu && 'active'")
          .menu__close(key="close" @click="isShowMenu = false")
            close-icon
          .menu__link(
            v-if="isShowAnimatedElements"
            v-for="(section, index) in sections"
            :key="section"
            :class="index === currentSectionIndex && 'active'"
            :style="`transition: transform 600ms ease ${index * 150}ms`"
            @click="changeSection(index)"
          ) {{ section.link }}
    .page-logo
      logo
</template>

<script>
// import { throttle } from "throttle-debounce";
import OrientationMx from "~/mixins/OrientationMx";
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
  mixins: [OrientationMx],
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
      isShowAnimatedElements: false,
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
      ],
      socials: [
        {
          name: "vk",
          link: "https://vk.com/tanyachickk",
          icon: "vk-icon",
          iconWidth: "38%",
          iconHeight: "32%"
        },
        {
          name: "linkedin",
          link: "https://www.linkedin.com/in/tatiana-kurochkina-217b24163/",
          icon: "linkedin-icon",
          iconWidth: "32%",
          iconHeight: "32%"
        },
        {
          name: "github",
          link: "https://github.com/tanyachickk",
          icon: "github-icon",
          iconWidth: "32%",
          iconHeight: "32%"
        },
        {
          name: "inst",
          link: "https://www.instagram.com/tanyachickk/",
          icon: "inst-icon",
          iconWidth: "32%",
          iconHeight: "32%"
        }
      ]
    };
  },
  computed: {
    currentSection() {
      return this.sections[this.currentSectionIndex];
    },
    isShowSocials() {
      return (
        this.isLandingOrientation ||
        this.currentSectionIndex === 0 ||
        this.currentSectionIndex === 3
      );
    }
  },
  methods: {
    changeSection(index) {
      this.currentSectionIndex = index;
      this.isShowMenu = false;
    },
    goToNextSection() {
      if (this.currentSectionIndex < this.sections.length - 1) {
        this.currentSectionIndex++;
      }
    },
    goToPrevSection() {
      if (this.currentSectionIndex > 0) {
        this.currentSectionIndex--;
      }
    },
    onMouseWheel(event) {
      console.log(event);
      if (
        event.path.find(
          elem => elem.classList && elem.classList.contains("about-section")
        )
      ) {
        console.log("!!!!");
        return;
      }
      if (event.deltaY > 0) {
        this.goToNextSection();
      } else if (event.deltaY < 0) {
        this.goToPrevSection();
      }
    },
    onKeyDown({ code }) {
      if (code === "ArrowDown" || code === "ArrowRight") {
        this.goToNextSection();
      } else if (code === "ArrowUp" || code === "ArrowLeft") {
        this.goToPrevSection();
      }
    }
  },
  created() {
    if (process.client) {
      // document.addEventListener(
      //   "wheel",
      //   throttle(50, false, this.onMouseWheel, true)
      // );
      document.addEventListener("keydown", this.onKeyDown);
    }
  },
  mounted() {
    setTimeout(() => {
      this.isShowAnimatedElements = true;
    }, 500);
  },
  beforeDestroy() {
    if (process.client) {
      document.removeEventListener("keydown", this.onKeyDown);
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/styles/main-fonts.scss";
@import "~@/styles/functions.scss";
:root {
  --primary-pink: #e42ba5;
  --dark-pink: #c50f7a;
  --extra-dark-gray: #131313;
  --dark-gray: #323232;
  --gray: #2b2b2b;
  --lighter-gray: #2f2f2f;
}

html,
body,
#__nuxt,
#__layout {
  height: 100%;
}

body {
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 0 !important;
  height: 0 !important;
}
::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: transparent;
}

* {
  -ms-overflow-style: none;
}
* {
  overflow: -moz-scrollbars-none;
}

h2 {
  color: white;
  font-family: "Gilroy";
  font-size: px-to-vw(18);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: px-to-vw(3.6);
  line-height: px-to-vw(28);
  &.accent {
    color: var(--primary-pink);
  }

  @media (orientation: portrait) {
    font-size: px-to-vh(14);
    letter-spacing: px-to-vh(2.8);
    line-height: px-to-vh(75);
  }
}

p {
  color: white;
  font-family: "Courier";
  font-size: px-to-vw(18);
  font-weight: 400;
  line-height: px-to-vw(28);

  &.secondary {
    color: var(--dark-gray);
  }

  @media (orientation: portrait) {
    font-size: px-to-vh(14);
    line-height: px-to-vh(22);
  }
}

a {
  color: white;
  font-family: "Courier";
  font-size: px-to-vw(18);
  font-weight: 400;
  letter-spacing: normal;
  &:hover {
    text-decoration: none;
  }

  @media (orientation: portrait) {
    font-size: px-to-vh(14);
  }
}
</style>

<style lang="scss" scoped>
@import "~@/styles/functions.scss";
.main {
  display: grid;
  grid-template-columns: 19% 31% 30% 20%;
  grid-template-rows: 100%;
  grid-template-areas: "navigation info content socials";
  width: 100vw;
  height: 100%;
  color: white;
  background-color: #1b1b1b;
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
    right: 0;
    display: block;
    padding: px-to-vh(20);
    padding-right: 7vw;
    font-size: px-to-vh(16);
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
      font-size: px-to-vw(18);
      line-height: px-to-vw(75);
      letter-spacing: 0.9px;
      text-transform: uppercase;
      color: var(--lighter-gray);
      transition: color 0.3s ease;
      cursor: pointer;

      &:hover {
        color: rgba(white, 0.5);
      }

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
        width: px-to-vh(36);
        height: px-to-vh(36);
        font-size: px-to-vh(16);
        background-color: var(--dark-pink);
        border-radius: 50%;
        margin-bottom: px-to-vh(28);
      }
      &__link {
        position: relative;
        color: white;
        font-size: px-to-vh(18);
        line-height: px-to-vh(75);
        letter-spacing: px-to-vh(0.9);
        text-align: center;
        &::after {
          content: "";
          position: absolute;
          top: 48%;
          left: -7%;
          right: -7%;
          height: px-to-vh(5);
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
      right: 7vw;
      bottom: 61%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      z-index: 1;
      &__item {
        position: relative;
        width: px-to-vh(30);
        height: px-to-vh(30);
        &::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: px-to-vh(6);
          height: px-to-vh(6);
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
    transform: translate3d(0, 100%, 0);
    transition: transform 0.75s ease;
    overflow: hidden;
    &.active {
      transform: translate3d(0, 0, 0);
    }

    @media (orientation: portrait) {
      transform: translate3d(0, 0, 0);
      transform: translateX(100%);
      &.active {
        transform: translateX(0);
      }
    }
  }
}
.socials {
  grid-area: socials;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: px-to-vw(150);
  padding-bottom: px-to-vw(130);

  @media (orientation: portrait) {
    position: absolute;
    left: 0;
    bottom: 0;
    flex-direction: row;
    padding-left: 10vw;
    padding-bottom: px-to-vh(65);
  }

  .social-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: px-to-vw(20);
    width: px-to-vw(50);
    height: px-to-vw(50);
    background-color: var(--dark-gray);
    border-radius: 50%;
    color: white;
    transition: background-color 0.3s ease;
    cursor: pointer;
    &:hover {
      background-color: var(--primary-pink);
    }

    @media (orientation: portrait) {
      margin-top: 0;
      margin-right: px-to-vh(18);
      width: px-to-vh(40);
      height: px-to-vh(40);
    }
  }
}

.slide-right {
  &-enter,
  &-leave-to {
    transform: translateX(-13vw);
  }
}

.slide-up {
  &-enter,
  &-leave-to {
    transform: translateY(20vw);
  }
}
</style>
