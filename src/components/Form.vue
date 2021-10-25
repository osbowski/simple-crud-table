<template>
<div class="wrapper">
<va-card>
  <va-card-title class="display-5 justify--center">Data form</va-card-title>
  <va-card-content>
    <va-form>
    <div class="form-control">
      <va-input type="text" id="name" placeholder="Name" v-model="contact.name" />
      <va-input
        type="text"
        id="lastname"
        placeholder="Last Name"
        v-model="contact.last_name"
      />
    </div>
    <div class="form-control">
      <va-input
        type="phone"
        id="phonenumber"
        placeholder="Phone Number"
        v-model="contact.phone_number"
      />
      <va-input
        type="email"
        id="email"
        placeholder="Email"
        v-model="contact.email"
      />
    </div>
    <div class="form-control">
      <va-input
        type="text"
        id="country"
        placeholder="Country"
        v-model="contact.country"
      />
      <va-input type="text" id="city" placeholder="City" v-model="contact.city" />
      <va-input
        type="text"
        id="address"
        placeholder="Address"
        v-model="contact.address"
      />
    </div>
    <div class="form-control form-control--actions">
      <va-button outline @click.prevent="addContact">Add new item</va-button>
      <va-button flat @click.prevent="modifyContact">Modify item</va-button>
    </div>
  </va-form>
  </va-card-content>
</va-card>
</div>
</template>

<script>
import { reactive, watch, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const contact = reactive({
      id: null,
      name: null,
      last_name: null,
      phone_number: null,
      email: null,
      country: null,
      city: null,
      address: null,
      created_at: null,
      updated_at: null,
    });

    const contactToModify = computed(() => store.getters.getContactToModify);

    watch(
      () => contactToModify.value,
      () => {
        const newContact = contactToModify.value;

        for (let key in contact) {
          for (let newKey in newContact) {
            if (key === newKey) {
              contact[key] = newContact[newKey];
            }
          }
        }
      }
    );

    const addContact = () => {
      const newContact = {
        name: contact.name,
        last_name: contact.last_name,
        phone_number: contact.phone_number,
        email: contact.email,
        country: contact.country,
        city: contact.city,
        address: contact.address,
      };
      const confirmBox = confirm("Do you want save data as NEW contact?");
      if (confirmBox) {
        store.dispatch("addContact", newContact);
      } else {
        console.log("Contact adding canceled");
      }
    };

    const modifyContact = () => {
      const confirmBox = confirm("Do you want to modify this contact?");
      if (confirmBox) {
        store.dispatch("modifyContact", contact);
      } else {
        console.log("Contact adding canceled");
      }
      
    };

    return {
      contact,
      addContact,
      modifyContact,
    };
  },
};
</script>
<style scoped>
.form-control{
  display: flex;
  padding: 5px;
}

.form-control--actions{
  justify-content: center;
  margin-top: 10px;
}

.va-input{
  padding: 5px;
}
</style>