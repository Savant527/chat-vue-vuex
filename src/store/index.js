import { createStore } from 'vuex'
import profile from '@/store/modules/profile'
import channels from '@/store/modules/channels'
import messages from '@/store/modules/messages'
import contacts from '@/store/modules/contacts'
import { COMMIT_SET_STATUS } from '@/common/mutation-types.js'

const store = createStore({
  state() {
    return {
      status: null
    }
  },
  getters: {},
  mutations: {
    [COMMIT_SET_STATUS](state, value) {
      state.status = value
    }
  },
  actions: {},
  modules: {
    profile,
    channels,
    messages,
    contacts
  }
})

export default store
  // actions: {
  //   async obtenerUsername({ commit }) {
  //     const res = await fetch(`https://api.generadordni.es/v2/person/username`);
  //     const data = await res.json();
  //     //Un numero aleatorio del 0 al 9
  //     const n = Math.floor(Math.random() * (9 - 0 + 1) + 0);
  //     console.log(data);
  //     const user = await getUser(1);
  //     commit("updateUsername", data[n]);
  //   },
  