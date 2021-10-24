import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    contacts:[]
  },
  mutations: {
    setContactsFromApi(state,payload){
      state.contacts=[...payload];
    }
  },
  actions: {
    async getContactsFromApi(context){
      try{
        const response = await axios.get('http://test01.varid.pl:4080/api/contacts');
        const contacts = response.data;
       context.commit('setContactsFromApi', contacts)
      }catch(error){
        console.error(error);
      }
    }
  },
  getters:{
    getContactsFromStore(state){
      return state.contacts;
    }
  },
  modules: {
  }
})
