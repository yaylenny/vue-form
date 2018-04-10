<script>
  import bulma from "./bulma.vue";
  export default{
    mixins: [ bulma ],
    props: {
      name: String,
      value:{}  // v-model
    },
    methods:{
      onInput( value ){
        this.$emit('input', value );
      }
    },
    on:{
      input: 'onInput'
    }
  }
</script>
