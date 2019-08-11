<template lang="pug">
  section.portfolio-section
</template>

<script>
export default {
  name: "PortfolioSection"
};
</script>

<style lang="scss" scoped>
.portfolio-section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  background: url("~@/assets/images/content-bg-reverse.jpg") no-repeat center
    center;
  background-size: cover;
}
</style>