<template>
  <div class="p-8">
    <BannerNav />
  </div>
  <div>

    <NavOne />
    <SearchBar />
    <router-view />
  </div>
  <app-footer />
</template>

<script>
import BannerNav from './components/Header/BannerNav.vue';
import NavOne from './components/Header/NavOne.vue';
import SearchBar from './components/Header/SearchBar.vue';
import AppFooter from './components/Ul/AppFooter.vue';

export default {
  components: {
    BannerNav,
    NavOne,
    SearchBar,
    AppFooter
  }
}
</script>
