<script>
  import { camelCase, kebabCase, assign, has, keys, values,
    isArray, isObject } from "lodash";
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
      items:[ 'small', 'normal', 'medium', 'large' ]
    },
    states:{
      items:[ 'hovered','focused', 'loading']
    },
    styles:{
      items:[ 'rounded']
    }
  };
  const extrasMap={
    iconArray:{
      icon: String,
      iconsLeft: [Array,String],
      iconsRight: [Array,String]
    }
  }
  const aliasMap={
    input:['colors','sizes','states','styles' ]
  };

  let modifierKeys=keys( modifiersMap );//['colors','sizes','states'...]
  let propsToClass=modifierKeys.reduce(( o, prop )=>{
    let target=modifiersMap[ prop ];
    o[ prop ]=target.items.reduce(( props, item )=>{
      let className=`${target.prefix || 'is-'}${item}`;
      props[camelCase( className )]=className;
      return props;
    }, {});
    return o;
  }, {});//{colors:{isPrimary:'is-primary', isInfo...}, sizes: {isSmall:'is-small',isMedium...}}
  let propKeys=values( propsToClass )    // [ 'isSmall','isPrimary', 'isHovered']
      .reduce(( arr, o )=>arr.concat(keys( o )), []);

  let spreadModifiers=modifiers=>{

  }
  let getProps=modifiers=>{
    return modifiers.reduce(( arr, prop )=>{
      if( modifierKeys.indexOf( prop ) >= 0 ) arr.push( prop );
      else if( aliasMap.hasOwnProperty( prop )) return arr.concat( aliasMap[ prop ]);
      else if( extrasMap.hasOwnProperty( prop )) arr.push( extrasMap[ prop ]);
      return arr;
      }, [] )
    .reduce(( o, prop )=>{
      if( isObject( prop )) return assign({}, o, prop );
      if( modifierKeys.indexOf( prop ) >= 0 ){
        let props=Object.keys( propsToClass[ prop ])
          .reduce(( ret, key )=>assign({}, ret, {[ key ]: Boolean }), {});
        return assign({}, o, props )
      }
    }, {});
  };

  export default{
    modifiers: [],
    data(){
      return {
        baseClass: this.$options.baseClass || '',
        modifiers: this.$options.modifiers || []
      };
    },
    computed:{
      classList(){
        let modifiers=this._mods;
        let classList=modifiers.reduce(( arr, prop )=>{
          let target=propsToClass[ prop ];
          if( target ){
            let className=keys( target ).reduce((name, key)=>{
              if( !name && this[ key ]) return target[ key ];
              return name;
            }, "");
            if( className ) arr.push( className );
          } else console.log( 'target not found', prop )
          return arr;
        }, [ this.baseClass ]);
        return classList;
      }
    },
    beforeCreate(){
      this._mods=[];
      return;
      let modifiers=this.$options.modifiers;
      if( modifiers ){
        if( modifiers===true ) modifiers=modifierKeys;
        this.$options.props=assign( {}, this.$options.props, getProps( modifiers ));
         console.log( 'modifiers found', this.$options.props);
      }
      return true;
    }
  }
</script>
