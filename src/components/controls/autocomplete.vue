<script>
  import control from "./control.vue";
  import input from "./input.vue";
  export default{
    props: {
      source: Array,
      url: String,
      searchProps: Array, // properties on each object to search
      labelProp:{ type: String, default: 'label' }, // property to use for display

    },
    data(){
      return {
        local:{
          value: this.value
        },
        dropdown:{
          visible: false
        },
        raw:{
          results: [],
          fetches: [], //server trips
        }
      };
    },
    components:{
      'field-control': control,
      'field-input': input
    },
    computed:{
      allItems(){

      },
      items(){// the filtered and sorted results

      }
    },
    methods:{
      onChange(){
        console.log( 'value change', this.local.value )
      },
      onKeydown(e){

      },
      onFocus(){

      }
    },
    created(){},
    watch:{}
  }
</script>
<template>
  <field-control>
    <field-input v-model="local.value"
      @change="onChange"
      @keydown="onKeydown"
      @focus="onFocus">
    </field-input>
    <div class="vue-ac-results" v-show="dropdown.visible">
      <div class="ac-result" v-for="item in items">
        {{item.label}}
      </div>
    </div>
  </field-control>
</template>
