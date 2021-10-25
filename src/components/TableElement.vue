<template>
  <tr>
    <td>{{ name }}</td>
    <td>{{ last_name }}</td>
    <td>{{ phone }}</td>
    <td>{{ email }}</td>
    <td>{{ country }}</td>
    <td>{{ city }}</td>
    <td>{{ address }}</td>
    <td class="action-column">
      <va-button flat class="mb-1" size="small" outline @click="sendDataToStore">Modify</va-button>
      <va-button flat  class="mb-1"  color="danger" size="small" @click="deleteContact">Delete</va-button>
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
            const confirmBox = confirm("Do you want delete this contact?");
      if (confirmBox) {
        store.dispatch("deleteContact", props.id);
      } else {
        console.log("Contact delete canceled");
      }

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
<style scoped>
td{
  text-align: center;
  vertical-align: middle;
  padding: 10px;
}

.action-column{
  display: flex;
}
</style>
