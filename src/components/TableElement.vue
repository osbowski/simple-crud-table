<template>
  <tr>
    <td>{{name}}</td>
    <td>{{last_name}}</td>
    <td>{{phone}}</td>
    <td>{{email}}</td>
    <td>{{country}}</td>
    <td>{{city}}</td>
    <td>{{address}}</td>
  </tr>
</template>


<script>
export default {
    props:['name','last_name','phone', 'email', 'country', 'city', 'address']
}
</script>
