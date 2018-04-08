<script>
  import { camelCase, kebabCase } from "lodash";
  const modifiersMap={
    colors:{
      items:[ 'primary','info', 'success', 'warning', 'danger' ]
    },
    icons:{
      multi: true,
      prefix: 'has-icons-',
      items:[ 'left', 'right' ]
    },
    select:{
      items: ['multiple']
    },
    sizes:{
      items:[ 'small', 'medium', 'large' ]
    },
    states:{
      items:[ 'hovered','focused', 'loading']
    },
    styles:{
      items:[ 'rounded']
    }
  };
  let propsToClass=Object.keys( modifiersMap ).reduce(( o, prop )=>{
    let target=modifiersMap[ prop ];
    o[ prop ]=target.items.reduce(( props, item )=>{
      let className=`${target.prefix || 'is-'}${item}`;
      props[ camelCase( className )]=className;
      return props;
    }, {});
    return o;
  }, {});

  let getProps=modifers=>{
    return modifers.reduce(( o, prop )=>{
      let props=Object.keys( propsToClass[ prop ])
        .reduce(( ret, key )=>Object.assign({}, ret, {[ key ]: Boolean }), {});
      return Object.assign({}, o, ...props )
    }, {});
  }

  export default{
    modifiers: [],
    props: {
      label: String,
      name: String,
      type:{ type: String, default: 'text' },
      value:{}

    },
    data(){
      return {
        baseClass: this.$options.baseClass || ''
      };
    },
    computed:{
      classList(){
        let modifiers=this.$options.modifiers || [];
        return modifiers.reduce(( arr, prop )=>{
          let target=modifiersMap[ prop ];
          if( target ){
            let prefix=target.prefix || 'is-';
          }
          return arr;
        }, [ this.baseClass ]);
      }
    },
    methods:{
      onInput( value ){ console.log( 'onInput', value )
        this.$emit('input', value );
      }
    },
    events:{
      input: 'onInput'
    },
    beforeCreate(){
      let modifiers=this.$options.modifiers;
      if( modifiers && modifiers.length ){ console.log( 'modifers found')
        this.$options.props=Object.assign({}, this.$options.props, ...getProps( modifiers ));
      }
    }
  }
</script>
