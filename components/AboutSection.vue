<template lang="pug">
  section.about-section
    .about-section__carousel(ref="carousel")
      .about(v-for="(value, key) in content")
        .about__title {{ key }}
        template(v-for="item in value")
          p.about__text(v-for="row in item.text") {{ row }}
          p.secondary.about__date(v-if="item.date") [{{ item.date }}]
    .about-section__navigation
      template(v-if="isLandscapeOrientation")
        button.about-section__arrow(:disabled="isPrevDisabled" @click="goTo(0)")
          arrow-icon(:rotate="-90")
        button.about-section__arrow(:disabled="isNextDisabled" @click="goTo(sliderElements.length - 1)")
          arrow-icon(:rotate="90")
      template(v-else)
        button.about-section__arrow(:disabled="isNextDisabled" @click="goNext")
          arrow-icon
        button.about-section__arrow(:disabled="isPrevDisabled" @click="goPrevious")
          arrow-icon(:rotate="180")
</template>

<script>
import ArrowIcon from "~/components/icons/ArrowIcon.vue";
import OrientationMx from "~/mixins/OrientationMx.js";
import SliderMx from "~/mixins/SliderMx.js";

export default {
  name: "AboutSection",
  mixins: [SliderMx, OrientationMx],
  components: {
    ArrowIcon
  },
  data() {
    return {
      content: {
        Education: [
          {
            text: [
              "Samara State Aerospace University,",
              "Faculty of lnformation Technology"
            ],
            date: "2013 - 2018"
          }
        ],
        Qualifications: [
          {
            text: ["EPAM Systems,", "Frontend developer"],
            date: "July 2017 – October 2017"
          },
          {
            text: ["Mercury Development,", "React / React Native developer"],
            date: "November 2018 - January 2019"
          }
        ],
        Experience: [
          {
            text: ["Solo-it Studio,", "Web developer"],
            date: "June 2016 – September 2017"
          },
          {
            text: ["LoftSchool,", "Mentor (Advanced web development)"],
            date: "Septempber 2019 – November 2019"
          },
          {
            text: ["SmaSS technologies LLC,", "Frontend developer"],
            date: "March 2018 - January 2020"
          },
          {
            text: ["Castle Digital Partners,", "Frontend developer"],
            date: "February 2020 - now"
          }
        ],
        Skills: [
          {
            text: [
              "HTML, Pug, CSS, SCSS",
              "JavaScript, TypeScript",
              "React, VueJS"
            ]
          }
        ],
        "Competitions & Hackathons": [
          {
            text: [
              "Urban.Tech Challenge Moscow",
              "1st in Advanced Analytics track"
            ],
            date: "7-10 December 2018, Moscow"
          },
          {
            text: ["Energy Hack. Digital Super Hero", "2nd place"],
            date: "6-7 April 2019, Kazan"
          },
          {
            text: ["Leaders of Digital", "Finalist"],
            date: "27-29 September 2019, Kazan"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/functions.scss";

.about-section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url("~@/assets/images/content-bg.jpg") no-repeat center center;
  background-size: cover;
  height: 100%;

  &__carousel {
    display: flex;
    flex-direction: column;
    height: 100%;
    scroll-snap-type: y mandatory;
    overflow-x: hidden;
    overflow-y: auto;

    @media (orientation: portrait) {
      flex-direction: row;
      width: auto;
      scroll-snap-type: x mandatory;
      overflow-x: auto;
      overflow-y: hidden;
    }
  }

  &__navigation {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    margin: px-to-vw(35);

    @media (orientation: portrait) {
      margin: px-to-vh(35);
    }
  }

  &__arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    width: px-to-vw(60);
    max-width: 50px;
    min-height: 20px;
    height: px-to-vw(60);
    max-height: 50px;
    margin-bottom: px-to-vw(18);
    background-color: var(--primary-pink);
    color: white;
    font-size: px-to-vw(20);
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;

    @media (orientation: portrait) {
      width: px-to-vh(40);
      height: px-to-vh(40);
      margin-bottom: px-to-vh(13);
      font-size: px-to-vh(16);
    }

    &[disabled] {
      background-color: var(--dark-gray);
      pointer-events: none;
      user-select: none;
      color: rgba(white, 0.5);
      cursor: pointer;
    }
  }
}
.about {
  padding: px-to-vw(20) px-to-vw(85);
  border-bottom: 1px solid rgba($color: #3b3b3b, $alpha: 0.2);
  scroll-snap-align: start;

  @media (orientation: portrait) {
    flex-shrink: 0;
    width: 100vw;
    padding: px-to-vh(30) px-to-vh(40);
  }

  &__title {
    color: var(--primary-pink);
    font-family: "Gilroy";
    font-size: px-to-vw(18);
    font-weight: 400;
    line-height: px-to-vw(75);
    text-transform: uppercase;
    letter-spacing: px-to-vw(3.6);

    @media (orientation: portrait) {
      font-size: px-to-vh(14);
      line-height: px-to-vh(75);
      letter-spacing: px-to-vh(2.8);
    }
  }
  &__date {
    margin-top: px-to-vw(10);
    margin-bottom: px-to-vw(25);

    @media (orientation: portrait) {
      margin-top: px-to-vh(10);
      margin-bottom: px-to-vh(40);
    }
  }
}
</style>
