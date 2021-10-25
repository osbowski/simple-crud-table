export default {
  getContactsFromStore(state) {
    return state.contacts;
  },
  getContactToModify(state) {
    return state.contactToModify;
  },
};
