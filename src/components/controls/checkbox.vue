<script>
  import item from "../item.vue";
  export default{
    mixins:[ item ],
    props: {
    },
    data(){
      return {};
    },
    components:{},
    computed:{},
    methods:{},
    created(){},
    watch:{}
  }
</script>
<template>
  <label class="checkbox">
    <input type="checkbox" :checked="value" @change="onInput( $event.target.checked )" />
    {{label}}
  </label>
</template>
