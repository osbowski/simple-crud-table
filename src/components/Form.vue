<template>
  <form>
    <div class="form-control">
      <input type="text" id="name" placeholder="Name" v-model="contact.name" />
      <input
        type="text"
        id="lastname"
        placeholder="Last Name"
        v-model="contact.last_name"
      />
    </div>
    <div class="form-control">
      <input
        type="phone"
        id="phonenumber"
        placeholder="Phone Number"
        v-model="contact.phone_number"
      />
      <input
        type="email"
        id="email"
        placeholder="Email"
        v-model="contact.email"
      />
    </div>
    <div class="form-control">
      <input
        type="text"
        id="country"
        placeholder="Country"
        v-model="contact.country"
      />
      <input type="text" id="city" placeholder="City" v-model="contact.city" />
      <input
        type="text"
        id="adress"
        placeholder="Adress"
        v-model="contact.adress"
      />
    </div>
    <div class="form-actions">
      <button @click.prevent="addContact">Add new item</button>
      <button>Modify item</button>
    </div>
  </form>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const contact = reactive({
      id: null,
      name: null,
      last_name: null,
      phone_number: null,
      email: null,
      country: null,
      city: null,
      adress: null,
      created_at: null,
      updated_at: null,
    });

    const addContact = () => {
      const newContact = {
        id: contact.id ? contact.id : (Math.random() * 10000).toFixed(),
        name: contact.name,
        last_name: contact.last_name,
        phone_number: contact.phone_number,
        email: contact.email,
        country: contact.country,
        city: contact.city,
        adress: contact.adress,
        created_at: Date.now(),
        updated_at: null,
      };
      const confirmBox = confirm("Are you sure?");
      if (confirmBox) {
        console.log(newContact);
      } else {
        console.log("Contact adding canceled");
      }
    };

    return {
      contact,
      addContact,
    };
  },
};
</script>
