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
.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5em;
  height: 5em;
  color: white;
  background-color: var(--primary-pink);
  font-size: 1em;
  letter-spacing: 0.4em;
  line-height: 1.4em;
  text-decoration: none;
}
</style>