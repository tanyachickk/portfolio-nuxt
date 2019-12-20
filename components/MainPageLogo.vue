<template lang="pug">
  a.logo(href="/")
    .logo__row TK
    .logo__row TK
</template>

<script>
export default {
  name: "MainPageLogo"
};
</script>

<style lang="scss" scoped>
@import "~@/styles/functions.scss";

.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: px-to-vw(90);
  height: px-to-vw(90);
  color: white;
  background-color: var(--primary-pink);
  font-size: px-to-vw(18);
  font-family: "Gilroy";
  letter-spacing: px-to-vw(7.2);
  line-height: px-to-vw(25);
  text-decoration: none;
}
</style>