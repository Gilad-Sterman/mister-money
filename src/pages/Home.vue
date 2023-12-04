<script>
import { userService } from '../services/userService';

export default {
  data() {
    return {
      user: null
    }
  },
  created() {
    this.user = userService.getUser()
  }
}
</script>

<template>
  <section class="home-page">
    <h2 v-if="!user">Welcome To Mister Money! 🪙</h2>
    <h2>Welcome Back {{ user.name }}!</h2>
    <div class="btc-data">
      <h3>Your Current Balance: {{ user.balance }} 🪙</h3>
      <h3>BTC Rate: $</h3>
    </div>
    <button>
      <RouterLink title="Contacts" to="/contact">
        Your Contacts
        <img src="https://res.cloudinary.com/dollaguij/image/upload/v1699194261/svg/forward_ohmney.svg" alt="">
      </RouterLink>
    </button>
    <button>
      <RouterLink title="statistics" to="/about">
        Statistics
        <img src="https://res.cloudinary.com/dollaguij/image/upload/v1699194261/svg/forward_ohmney.svg" alt="">
      </RouterLink>
    </button>
  </section>
</template>

<style lang="scss">
.home-page {
  height: 100vh;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  align-items: center;
  text-align: center;

  .btc-data {
    width: max-content;
    margin-block: 1rem;
    text-align: start;
  }

  button {
    padding: .25rem .5rem;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 120px;

    img {
      filter: invert(98%) sepia(44%) saturate(1926%) hue-rotate(182deg) brightness(104%) contrast(86%);
    }
  }
}
</style>