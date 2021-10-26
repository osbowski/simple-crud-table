import axios from "axios";

export default {
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
      const response = await axios.post(
        "http://test01.varid.pl:4080/api/contact",
        payload
      );
      const contactId = response.data.data.id;
      context.commit("addContact", { id: contactId, ...payload });
    } catch (error) {
      console.error(error);
    }
  },

  async deleteContact(context, payload) {
    try {
      await axios.delete(
        `http://test01.varid.pl:4080/api/contact/delete/${payload}`
      );
      context.commit("deleteContact", payload);
    } catch (error) {
      console.error(error);
    }
  },

  async searchContactToModify(context, payload) {
    const contactToModify = context.state.contacts.find(
      (contact) => contact.id === payload
    );
    context.state.contactToModify = contactToModify;
  },

  async modifyContact(context, payload) {
    const contactToModify = { ...payload };
    await axios.put(
      `http://test01.varid.pl:4080/api/contact/${contactToModify.id}`,
      contactToModify
    );
    context.commit("modifyContact", payload);
  },
};
