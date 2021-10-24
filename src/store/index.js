import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    contacts: [],
  },
  mutations: {
    setContactsFromApi(state, payload) {
      payload.map(contact=> state.contacts.push(contact))
    },
    addContact(state,payload){
      state.contacts.unshift(payload)
    },
    deleteContact(state,payload){
      const index = state.contacts.findIndex(contact=>contact.id===payload)
      state.contacts.splice(index,1)
    }
  },
  actions: {
    async getContactsFromApi(context) {
      try {
        const response = await axios.get(
          "http://test01.varid.pl:4080/api/contacts"
        );
        const contacts = response.data;
        context.commit("setContactsFromApi", contacts);
      } catch (error) {
        console.error(error);
      }
    },

    async addContact(context, payload) {
      try {
        const response = await axios.post("http://test01.varid.pl:4080/api/contact", payload);
        const contactId = response.data.data.id
        context.commit("addContact",{id:contactId,...payload})
      } catch (error) {
        console.error(error);
      }
    },

    async deleteContact(context,payload){
      try {
        await axios.delete(`http://test01.varid.pl:4080/api/contact/delete/${payload}`);
        context.commit('deleteContact',payload)

      } catch (error) {
        console.error(error);
      }
    }
  },
  getters: {
    getContactsFromStore(state) {
      return state.contacts;
    },
  },
  modules: {},
});
