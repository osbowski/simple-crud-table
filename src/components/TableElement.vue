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
      <button @click="sendDataToStore">Modify</button>
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
    };

    const sendDataToStore = ()=>{
      store.dispatch('searchContactToModify', props.id)
    }

    return {
      deleteContact,
      sendDataToStore
    };
  },
};
</script>
