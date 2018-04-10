<script>
  import {item, input } from "Mixins";
  import text from "./base/text.vue";
  import icon from "../icon/icon.vue"

  export default{
    // modifiers:['colors','sizes','states','styles' ],
    mixins:[ item, input, text ],
    data(){
      return{
        baseClass: this.type==='textarea' ? 'textarea' : 'input',
        listeners:{}
      }
    },
    props:{
      iconsLeft: [ String, Array ],
      iconsRight: [ String, Array ],
      icon: String
    },
    computed:{
      controlClass(){
        let ret=['control'];
        if( this.leftIcons ) ret.push( 'has-icons-left' );
        if( this.rightIcons ) ret.push( 'has-icons-right' );
        return ret;
      },
      allIcons(){
        let map=(icon, right)=>{
          return {
            fa: icon,
            right,
          }
        }
        return (this.leftIcons || [])
          .map( icon=>map( icon, false ))
          .concat( ( this.rightIcons || [] )
            .map( icon=>map( icon, true )));
      },
      leftIcons(){
        let icons=this.getIcons('left');
        if( !icons && this.icon ) icons=[ this.icon ];
        return icons;
      },
      rightIcons(){
        return this.getIcons('right')
      }
    },
    components:{
      'vue-icon': icon
    },
    methods:{
      getIcons( side="right"){
        let icons=this[ side==='right' ? 'iconsRight' : 'iconsLeft'];
        return icons && ( Array.isArray( icons ) ? icons : [ icons ]);
      }
    },
    destroyed(){
      // this.unbindEvents();
    },
    mounted(){
      // this.bindEvents();
    },
  }
</script>
<template>
  <div :class="controlClass">
    <textarea
      v-if="type==='textarea'"
      ref="input"
      :class="classList"
      :value="value"
      :placeholder="placeholder">
    </textarea>
    <input
      v-else
      ref="input"
      :type="type"
      :class="classList"
      :value="value"
      :placeholder="placeholder" />

    <vue-icon v-for="( icon, i ) in allIcons"
      :key="i"
      :is-right="icon.right"
      :is-left="!(icon.right)"
      :is-small="icon.isSmall"
      :is-medium="icon.isMedium"
      :is-large="icon.isLarge">
      {{icon.fa}}
    </vue-icon>
  </div>
</template>
