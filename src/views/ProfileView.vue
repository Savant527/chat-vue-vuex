<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      username: (state) => state.profile.username
    })
  },
  methods: {
    ...mapActions('profile', ['updateUsername'])
  }
}
</script>

<template>
  <div class="profile">
    <div class="box">
      <img src="/avatars/avatar.jpg" alt="avatar" />
      <label for="username">Nombre de usuario</label>
      <input
        type="text"
        placeholder="Sebastian Navas"
        :value="username"
        @input="updateUsername($event.target.value)"
      />
      <button @click="$router.push('/')">Acceder</button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.profile {
  @apply flex justify-center items-center h-screen;
  .box {
    @apply flex flex-col items-center gap-2 p-6 shadow shadow-slate-50 rounded-xl bg-zinc-100;
    img {
      @apply w-32 rounded-full border-8 border-zinc-800;
    }
    label {
      @apply w-full text-center text-zinc-800;
    }
    input {
      @apply px-3 py-2 text-center rounded-md bg-zinc-100 text-zinc-800;
    }
    button {
      @apply w-full px-3 py-2 mt-2 rounded-md bg-zinc-800 hover:bg-zinc-600;
    }
  }
}
</style>
