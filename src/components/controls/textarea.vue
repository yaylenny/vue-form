<script>
  import item from "../item.vue";
  import text from "./base/text.vue";
  export default{
    baseClass: 'input',
    mixins:[ item, text ]
  }
</script>
<template>
  <textarea class="textarea"
    :placeholder="placeholder"
    :value="value"
    @change="onInput( $event.target.value )">
  </textarea>
</template>
