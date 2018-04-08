<script>
  import { item } from "Mixins";
  // import { checkbox, file, input, radio, select, textarea } from "./controls";
  import all from "./index.js";

  const textInputTypes=[ 'text', 'number', 'date', 'password', 'email', 'tel'];
  const components=Object.keys( all ).reduce(( o, key )=>{
    return Object.assign({}, o, {['control-'+key]: all[ key ]});
  }, {});

  console.log( 'components', components )
  // const components={
  //   'control-input': input,
  //   'control-checkbox': checkbox,
  //   'control-radio': radio,
  //   'control-file': file,
  //   'control-select': select,
  //   'control-textarea': textarea,
  // };

  export default{
    mixins:[ item ],
    props: {
      placeholder: String,
      isExpanded: Boolean,
      isLoading: Boolean,
      iconsLeft: Array,
      iconsRight: Array
    },
    data(){
      return {};
    },
    components,
    computed:{
      controlClass(){
        let ret=[ 'control' ];
        if( this.isExpanded ) ret.push('is-expanded');
        if( this.iconsLeft ) ret.push( 'has-icons-left')
        if( this.iconsRight ) ret.push( 'has-icons-right')
        return ret;
      },
      controlComponent(){
        let type=textInputTypes.indexOf( this.type ) < 0 ?
          this.type : 'input';
        let k=`control-${type}`;
        if( components[ k ]) return k;
        else console.log( 'component not found', k );
      }
    },
    methods:{

    },
    created(){},
    watch:{}
  }
</script>
<template>
  <div :class="controlClass">
    <slot>
      <slot name="pre"></slot>
      <component
        :is="controlComponent"
        :icons-right="iconsRight"
        :icons-left="iconsLeft"
        :value="value"
        :type="type"
        :label="label"
        :placeholder="placeholder"
        @input="onInput">
      </component>
      <span v-if="iconsLeft" v-for="icon in iconsLeft" class="icon is-small is-left">
        <i :class="'fas fa-'+icon"></i>
      </span>
      <span v-if="iconsRight" v-for="icon in iconsRight" class="icon is-small is-right">
        <i :class="'fas fa-'+icon"></i>
      </span>
      <slot name="post"></slot>
    </slot>
  </div>
</template>
