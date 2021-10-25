<template>
  <div class="wrapper">
    <va-card>
      <va-card-title class="display-5 justify--center">Data form</va-card-title>
      <va-card-content>
        <va-form>
          <div class="form-control">
            <va-input
              type="text"
              id="name"
              placeholder="Name"
              v-model="contact.name"
            />
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
            <va-input
              type="text"
              id="city"
              placeholder="City"
              v-model="contact.city"
            />
            <va-input
              type="text"
              id="address"
              placeholder="Address"
              v-model="contact.address"
            />
          </div>
          <div class="form-control form-control--actions">
            <va-button outline @click.prevent="addContact"
              >Add new item</va-button
            >
            <va-button
              :disabled="!!blockModify"
              flat
              @click.prevent="modifyContact"
              >Modify item</va-button
            >
          </div>
        </va-form>
      </va-card-content>
    </va-card>
    <p v-if="isNotValid" class="text-alert">Please complete all fields.</p>
  </div>
</template>

<script>
import { reactive, watch, computed, ref } from "vue";
import { useStore } from "vuex";
import confirmBox from "../utilies/confirmBox.js";
export default {
  setup() {
    const store = useStore();
    const isNotValid = ref(false);
    const blockModify = ref(true);
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

        blockModify.value = false;
      }
    );

    const addContact = () => {
      isNotValid.value = false;
      blockModify.value = true;
      const newContact = {
        name: contact.name,
        last_name: contact.last_name,
        phone_number: contact.phone_number,
        email: contact.email,
        country: contact.country,
        city: contact.city,
        address: contact.address,
      };
      for (let key in newContact) {
        if (newContact[key] === null) {
          isNotValid.value = true;
          return;
        }
      }

      if (isNotValid.value === false) {
        confirmBox(
          contact,
          "Do you want save data as NEW contact?",
          store.dispatch("addContact", newContact)
        );
      }
    };

    const modifyContact = () => {
      const contactToModify = { ...contact };
      confirmBox(
        contact,
        "Do you want to modify this contact?",
        store.dispatch("modifyContact", contactToModify)
      );
    };

    return {
      contact,
      isNotValid,
      blockModify,
      addContact,
      modifyContact,
    };
  },
};
</script>
<style scoped>
.form-control {
  display: flex;
  padding: 5px;
}

.form-control--actions {
  justify-content: center;
  margin-top: 10px;
}

.va-input {
  padding: 5px;
}
</style>
