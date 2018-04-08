<script>
  import item from "../item.vue";
  import text from "./base/text.vue";
  let passEvents=['focus', 'blur', 'change', 'input', 'keydown', 'keyup' ];
  export default{
    baseClass: 'input',
    mixins:[ item, text ],
    data(){
      return{
        listeners:{

        }
      }
    },
    methods:{
      bindEvents(){
        passEvents.forEach( name=>{
          let fn=e=>this.$emit( name, e );
          this.$set( this.listeners, name, fn );
          this.$el.addEventListener( name, fn );
        });
      },
      unbindEvents(){
        passEvents.forEach( name=>{
          this.$el.removeEventListener( name, this.listeners[ name ]);
        });
      }
    },
    destroyed(){
      this.unbindEvents();
    },
    mounted(){
      this.bindEvents();
    }
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
