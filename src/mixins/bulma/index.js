import { isPlainObject, isFunction, assign, isArray, kebabCase } from "lodash";

let mixin=function mixin( options ){
  let { id, propKeys, multiple }=options;
  if( !id ) return console.error( 'ID REQUIRED FOR MIXIN');
  if( !( propKeys && isArray( propKeys ))) return console.error('propKeys not found!!!ERRROR!!!');

  let props=propKeys.reduce(( props, key )=>assign( {}, props, {[ key ]: Boolean }), {});
  let classes=propKeys.reduce(( classes, key )=>assign({}, classes, {[key]: kebabCase( key )}), {});

  return {
    props,
    created(){
      this._mods=this._mods || [];
      if( this._mods.indexOf( id ) <0 ) this._mods.push( id );
    }
  }
}



const MODS={
  colors:['isPrimary','isInfo','isSuccess','isDanger','isWarning','isText','isDark','isLight'],
  sizes:[ 'isSmall','isNormal','isMedium','isLarge'],
  states:[ 'isHovered','isFocused','isLoading'],
  styles:[ 'isRounded' ]
};

let colors=mixin({ id: 'colors', propKeys: MODS.colors });
let sizes=mixin({ id: 'sizes', propKeys: MODS.sizes });
let states=mixin({ id: 'states', propKeys: MODS.states });
let styles=mixin({ id: 'styles', propKeys: MODS.styles });
let input={ mixins:[ colors, sizes, styles, states ]};

export{
  colors,
  sizes,
  states,
  styles,
  input
}
