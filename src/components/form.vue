<script>
  import field from "./fields/field.vue";
  import { isPlainObject } from "lodash";

  let mods=[];
  export default{
    Fields:{}, // subclasses use this as a singleton to build forms
    props: {
      Fields: Object,
      instance: {},
      data: Object,
      action: String,
      method:{ type: String, default: 'post' }
    },
    data(){
      return {
        fields:{},
        form:{
          data:{},
          fields:[],
          specs:{}
        }
      };
    },
    components:{
      'form-field': field
    },
    computed:{
      isValid(){
        return true;
      }
    },
    methods:{
      buildFormField( name, opt ){
        opt=isPlainObject( opt ) ? opt : { type: opt };
        return Object.assign({
          required: false,
          widget: 'auto'
        }, opt, {
          name
        });
      },
      buildFormFields(){
        let Fields=Object.assign({}, this.$options.Fields || {}, this.Fields || {});
        if( Fields ){
          let { fields }=Fields;
          if( fields && Array.isArray( fields )){
            this.form.fields=fields.map( name=>this.buildFormField( name, Fields[ name ]))
          }

        }
      },
      load( instance ){

      },
      submit(){

      }
    },
    created(){
      this.buildFormFields();
    },
    watch:{
      instance: 'load'
    }
  }
</script>
<template>
  <div class="vue-form">
    <slot name="pre"></slot>
    <slot>
      <form-field v-for="field in form.fields" :key="field.id">
        <component
          :is="field.widget">
        </component>
      </form-field>
      <form-field>
        <button class="button" @click="submit">Submit</button>
      </form-field>
    </slot>
    <slot name="post"></slot>
  </div>
</template>
