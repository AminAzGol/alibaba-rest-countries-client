<template>
  <div>
    <nav class="navbar px-sm-1 px-md-5">
      <NuxtLink class="navbar-brand" to="/">Where in the world?</NuxtLink>
          
      <div class="btn pr-0" @click="darkModeClicked">
          <font-awesome-icon :icon="['fas', 'moon']" /> Dark Mode
      </div>
    </nav>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
export default {
    components:{
        // FontAwesomeIcon
    },
  computed: {
    theme() {
      return this.$store.state.theme;
    },
  },
  methods: {
    darkModeClicked() {
      console.log("dark mode clicked");
      this.toggleTheme()
    },
    ...mapMutations({
        toggleTheme: 'toggleTheme'
    })
  },
  watch: {
    theme(newTheme, oldTheme) {
      console.log(`new Theme is: `, newTheme);
    },
  },
};
</script>

<style lang="scss">
.navbar {
  background-color: var(--elements-primary);
  box-shadow: 0px -5px 8px 0px;
  .navbar-brand {
    color: var(--text-primary);
    font-weight: 800;
  }
  .btn {
    color: var(--text-primary);

    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>