<template>
  <div class="card">
    <div class="card__icon">
      <i class="fas fa-user-astronaut"></i>
    </div>
    <h3 class="card__title">
      Sign in
    </h3>
    <form class="card__form">
      <div class="card__form--group">
        <label
          :class="error ? 'card__label card__label--danger' : 'card__label'"
          for="email"
          >Email or Username</label
        >
        <input
          :class="error ? 'card__input card__input--danger' : 'card__input'"
          type="email"
          name="email"
          v-model="username"
        />
      </div>
      <div class="card__form--group">
        <label
          :class="error ? 'card__label card__label--danger' : 'card__label'"
          for="password"
          >Password</label
        >
        <input
          :class="error ? 'card__input card__input--danger' : 'card__input'"
          type="password"
          name="password"
          v-model="password"
        />
      </div>
      <button class="card__button" @click="handleClick()">
        Sign In
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "PxForm",

  data() {
    return {
      error: false,
      data: {
        username: "",
        password: "",
      },
    };
  },


  methods: {
    handleClick() {
      if (this.data.username  === "" && this.data.password === "") {
        this.error = true;
      }
    },
  },
};
</script>
