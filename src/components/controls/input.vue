<script>
  import item from "../item.vue";
  import text from "./base/text.vue";
  export default{
    baseClass: 'input',
    mixins:[ item, text ],
  }
</script>
<template>
  <input
    :type="type"
    :class="classList"
    :value="value"
    :placeholder="placeholder"
    @change="onInput( $event.target.value )" />
</template>
