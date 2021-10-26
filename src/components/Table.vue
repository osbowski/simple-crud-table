<template>
<va-inner-loading v-if="isLoading" :loading="isLoading" :size="100"></va-inner-loading>
  <table v-else class="va-table--striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>Phone number</th>
        <th>Email</th>
        <th>Country</th>
        <th>City</th>
        <th>Adress</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <TableElement
        v-for="contact in contacts"
        :key="contact['id']"
        :id="contact['id']"
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
import { computed, watchEffect, ref } from "vue";
import { useStore } from "vuex";
import TableElement from "./TableElement.vue";
export default {
  components: {
    TableElement,
  },
  setup() {
    const store = useStore();
    const isLoading = ref(false);

    const contacts = computed(() => {
      return store.getters.getContactsFromStore;
    });

    watchEffect(async() => {
      isLoading.value = true;
      await store.dispatch("getContactsFromApi");
      isLoading.value = false;
    });

    

    return {
      contacts,
      isLoading
    };
  },
};
</script>
<style scoped>
.va-table--striped {
  max-width: 90vw;
  margin: 0 auto;
}

.inner-loading{
  margin-top:100px;
}
</style>
