import { form, field, control, vertical, horizontal,
  autocomplete, checkbox, file, input, radio, select, textarea } from "./components";

const components={ form, field, control, vertical, horizontal,
  autocomplete, checkbox, file, input, radio, select, textarea };

function install( Vue, prefix="vue-" ){
  Object.keys( components ).forEach( prop=>Vue.component( `${prefix}${prop}`, components[ prop ] ));
}

export default{
  install,
  form,
  field,
  control,
  vertical,
  horizontal,
  autocomplete,
  checkbox,
  file,
  input,
  radio,
  select,
  textarea
};

export {
  install,
  form,
  field,
  control,
  vertical,
  horizontal,
  autocomplete,
  checkbox,
  file,
  input,
  radio,
  select,
  textarea
};
