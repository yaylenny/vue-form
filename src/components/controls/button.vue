<script>
  import item from "../item.vue";
  export default{
    baseClass: 'button',
    modifers:[ 'states', 'colors', 'styles', 'sizes'],
    mixins:[ item ]
  }
</script>
<template>
  <button
    :class="classList"
    @click="$emit( 'click', $event )">
  </button>
</template>
