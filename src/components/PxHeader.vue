<template>
  <header class="header">
    <div class="container--login header__subcontainer">
      <div class="header__icon">
        <i class="fas fa-user-astronaut">
          <span class="header__text">zelt</span>
        </i>
      </div>
      <router-link class="header__exit" :to="{ name: 'login' }">
        <span>
          logout
          <i class="fas fa-sign-out-alt"></i>
        </span>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "PxHeader",
  data() {
    return {};
  },
};
</script>
