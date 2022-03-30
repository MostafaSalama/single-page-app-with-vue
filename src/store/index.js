import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const USERS_ENDPOINT = '/api/users'
export default new Vuex.Store({
  state: {
    correctUsername: 'admin',
    correctPassword: '1234',
    users: [],
    requestError: '',
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },

    setError(state, error) {
      state.requestError = error;
    }
  },
  actions: {
    /**
     * Action used to get the users from the API
     * it should update the users on the state
     * @param commit
     */
    getUsers({commit}) {
      fetch(`${process.env.VUE_APP_API_URL || 'https://warm-sands-62073.herokuapp.com'}${USERS_ENDPOINT}`)
        .then(res=> res.json())
        .then(users=> {
          commit('setUsers', users);
        }).catch(error => {
          commit('setError', error.message || 'Error While Requesting');
      })
    }
  },
  modules: {

  }
})
