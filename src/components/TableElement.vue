<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ last_name }}</td>
    <td>{{ phone }}</td>
    <td>{{ email }}</td>
    <td>{{ country }}</td>
    <td>{{ city }}</td>
    <td>{{ address }}</td>
    <td>
      <button>Modify</button>
      <button @click="deleteContact">Delete</button>
    </td>
  </tr>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: ["name", "last_name", "phone", "email", "country", "city", "address", "id"],
  setup(props) {
    const store = useStore();
    const deleteContact = () => {
      store.dispatch("deleteContact", props.id);
      store.dispatch("getContactsFromApi");
    };

    return {
      deleteContact,
    };
  },
};
</script>
