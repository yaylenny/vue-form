<script>
  let passEvents=['focus', 'blur', 'change', 'keydown', 'keyup' ];
  export default{
    // modifers:[ 'colors', 'sizes', 'states', 'styles' ],
    props: {
      placeholder: String,
      type:{ type: String, default: 'text'}
    },
    computed:{

    },
    methods:{
      bindEvents(){
        let $el=this.$refs.input;
        if( !$el ) return console.log( 'cannot bind events, input ref not found')
        passEvents.forEach( name=>{
          let fn=e=>this.$emit( name, e );
          this.$set( this.listeners, name, fn );
          $el.addEventListener( name, fn );
        });
      },
      unbindEvents(){
        let $el=this.$refs.input;
        if( !$el ) return;
        passEvents.forEach( name=>{
          $el.removeEventListener( name, this.listeners[ name ]);
        });
      }
    },
    mounted(){
      this.bindEvents();
    },
    destroyed(){
      this.unbindEvents();
    },
  }
</script>
