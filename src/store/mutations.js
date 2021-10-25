export default {
  setContactsFromApi(state, payload) {
    payload.map((contact) => state.contacts.push(contact));
  },
  addContact(state, payload) {
    state.contacts.unshift(payload);
  },
  deleteContact(state, payload) {
    const index = state.contacts.findIndex((contact) => contact.id === payload);
    state.contacts.splice(index, 1);
  },
  modifyContact(state, payload) {
    const index = state.contacts.findIndex(
      (contact) => contact.id === payload.id
    );
    state.contacts.splice(index, 1, payload);
  },
};
