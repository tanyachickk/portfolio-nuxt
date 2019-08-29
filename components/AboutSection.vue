<template lang="pug">
  section.about-section
    .about(v-for="(value, key) in content")
      .about__title {{ key }}
      template(v-for="item in value")
        .about__text(v-for="row in item.text") {{ row }}
        .about__date(v-if="item.date") [{{ item.date }}]
</template>

<script>
export default {
  name: "AboutSection",
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
            text: ["SmaSS technologies LLC,", "Frontend developer"],
            date: "March 2018 - now"
          }
        ],
        Skills: [
          {
            text: ["HTML, Pug, CSS, SCSS", "JavaScript, TypeScript, VueJS"]
          }
        ],
        Competitions: [
          {
            text: [
              "Urban.Tech Challenge Moscow",
              "1st in Advanced Analytics track"
            ],
            date: "7-10 December 2018"
          },
          {
            text: ["Energy Hack. Digital Super Hero", "2nd place"],
            date: "6-7 April 2019"
          },
          {
            text: ["Leaders of Digital", "Finalist"],
            date: "29-30 June 2019"
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.about-section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url("./../assets/images/content-bg.jpg") no-repeat center center;
  background-size: cover;
  height: 100%;
  overflow-y: scroll;
}
.about {
  padding: 20px 85px;
  border-bottom: 1px solid rgba($color: #3b3b3b, $alpha: 0.2);
  &__title {
    color: var(--primary-pink);
    font-family: "Gilroy";
    font-size: 18px;
    font-weight: 400;
    line-height: 75px;
    text-transform: uppercase;
    letter-spacing: 3.6px;
  }
  &__text {
    color: white;
    font-family: "Courier";
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
  }
  &__date {
    margin-top: 10px;
    margin-bottom: 25px;
    color: #323232;
    font-family: "Courier";
    font-size: 18px;
    font-weight: 400;
    line-height: 36px;
  }
}
</style>