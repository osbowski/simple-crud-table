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
        <th>Adressnp</th>
      </tr>
    </thead>
    <tbody>
      <TableElement />
      <TableElement />
      <TableElement />
    </tbody>
  </table>
</template>

<script>
import TableElement from './TableElement.vue';
export default {
  components:{
    TableElement
  },
  setup() {
    
  },
}
</script>