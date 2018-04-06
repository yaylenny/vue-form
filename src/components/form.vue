<script>
  import field from "./field.vue";
  import control from "./control.vue";

  // import { bulma } from "Mixins";
  let mods=[];
  export default{
    // mixins:[ bulma ],
    props: {
      instance: {},
      data: Object,
      action: String,
      method:{ type: String, default: 'post' }
    },
    data(){
      return {
        fields:[]
      };
    },
    components:{
      'form-field': field,
      'field-control': control
    },
    computed:{
      formFields(){
        return this.fields;
      }
    },
    methods:{},
    created(){},
    watch:{}
  }
</script>
<template>
  <div class="vue-form">
    <slot>
    </slot>
  </div>
</template>
