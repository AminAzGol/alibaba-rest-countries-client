<template>
  <div>
    <Header />
    <Nuxt class="nuxt" />
    <Footer />
  </div>
</template>

<script>
export default {
  computed: {
    theme() {
      return this.$store.state.theme;
    },
  },
  watch: {
    theme(newTheme, oldTheme) {
      console.log(`layout Theme is: `, newTheme);
      document.documentElement.className = newTheme;
    },
  },
};
</script>

<style>
/* Define styles for the default root window element */
:root {
  --text-primary: hsl(200, 15%, 8%);
  --background-primary: hsl(0, 0%, 98%);
  --elements-primary: hsl(0, 0%, 100%);
  --input-primary: hsl(0, 0%, 52%);
  
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --text-primary: hsl(0, 0%, 100%);
  --background-primary: hsl(207, 26%, 17%);
  --elements-primary: hsl(209, 23%, 22%);
  --input-primary: hsl(0, 0%, 52%);
}


.nuxt{
    background-color: var(--background-primary);
    min-height: 100vh;
    overflow-x: hidden;
}
</style>