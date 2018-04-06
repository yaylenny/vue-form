<script>
  import item from "../item.vue";
  export default{
    mixins:[ item ],
  }
</script>
<template>
  <label class="radio">
    <input type="radio" :name="name" :value="value" />
    {{label}}
  </label>
</template>
