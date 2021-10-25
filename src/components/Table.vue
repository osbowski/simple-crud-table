<template>
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>Phone number</th>
        <th>Email</th>
        <th>Country</th>
        <th>City</th>
        <th>Adress</th>
      </tr>
    </thead>
    <tbody>
      <TableElement 
      v-for="contact in contacts"
      :key="contact['id']"
      :id = "contact['id']"
      :name="contact['name']"
      :last_name="contact['last_name']"
      :phone="contact['phone_number']"
      :email="contact['email']"
      :country="contact['country']"
      :city="contact['city']"
      :address="contact['address']"
      />
    </tbody>
  </table>
</template>

<script>
import { computed, watchEffect } from 'vue';
import { useStore } from 'vuex';
import TableElement from './TableElement.vue';
export default {
  components:{
    TableElement
  },
  setup() {
    const store = useStore();
    const contacts = computed(()=>{
      return store.getters.getContactsFromStore;
    })

   watchEffect(()=>{
     store.dispatch('getContactsFromApi')
   })

    return{
      contacts
    }
  },
}
</script>