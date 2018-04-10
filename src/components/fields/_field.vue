<script>
  import control from "Controls/control.vue";
  import { item } from "Mixins";
  import horizontal from "./horizontal.vue";
  import vertical from "./vertical.vue";

  const recognizedControls=['text','number','date','tel', 'paddword',
    'email','textarea','checkbox','radio','select', 'file']
  export default{
    mixins:[ item ],
    props: {
      choices: Array, // radio and select elements
      labelClass: String,
      addons: Array,
      addonsCentered: Array,
      addonsRight: Array,
      iconsLeft: Array,
      iconsRight: Array,
      isGrouped: Boolean,
      isGroupedCentered: Boolean,
      isGroupedRight: Boolean,
      isGroupedMultiline: Boolean,
      isHorizontal: Boolean,
      hasControl:{ type: Boolean, default: true },
      message: String,
      messageState: String, // is-primary
      placeholder:String
    },
    data(){
      return {};
    },
    components:{
      horizontal,
      vertical,
      control
    },
    computed:{
      component(){
        return this.isHorizontal ? horizontal : vertical;
      },
      hasAddons(){
        return this.addons || this.addonsLeft || this.addonsCentered;
      },
      isLabelWrap(){
        return [ 'radio', 'checkbox' ].indexOf( this.type ) >= 0;
      },
      fieldClass(){
        let ret=[ 'field' ];
        let { addons, addonsRight, addonsCentered,
              isGrouped, isGroupedRight, isGroupedCentered,
              isGroupedMultiline, isHorizontal }=this;
        if( isHorizontal ) ret.push('is-horizontal');
        if( addons || addonsRight || addonsCentered ){
          ret.push( 'has-addons' );
          if( addonsRight ) ret.push( 'has-addons-right' );
          if( addonsCentered ) ret.push( 'has-addons-centered' );
        }
        if( isGrouped || isGroupedRight || isGroupedCentered || isGroupedMultiline ){
          ret.push('is-grouped');
          if( isGroupedRight ) ret.push( 'is-grouped-right' );
          if( isGroupedCentered ) ret.push( 'is-grouped-centered' );
          if( isGroupedMultiline ) ret.push( 'is-grouped-multiline' );
        }
        return ret;
      },
      helpClass(){
        let ret=['help'];
        if( this.messageState ) ret.push( this.messageState );
        return ret;
      },
      postControls(){
        return [];
      },
      preControls(){
        return []
      }
    },
    methods:{},
    created(){},
    watch:{}
  }
</script>

<template>
  <component :is="component" :class="fieldClass">

  <slot>
    <label slot="label" class="label" v-if="( !isLabelWrap && label )">{{label}}</label>

    <slot name="left"></slot>
    <control
      v-if="hasControl"
      :value="value"
      :type="type"
      :label="label"
      :icons-left="iconsLeft"
      :icons-right="iconsRight"
      :placeholder="placeholder"
      @input="onInput">
    </control>

    <p v-if="message" :class="helpClass">
      {{message}}
    </p>
    <slot name="right"></slot>
  </slot>
  </component>
</template>
