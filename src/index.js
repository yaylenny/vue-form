
import {
  autocomplete,
  checkbox,
  control,
  datepicker,
  field,
  file,
  form,
  horizontal,
  input,
  radio,
  select,
  textarea,
  vertical
} from "./components";

const components={
  autocomplete,
  checkbox,
  control,
  datepicker,
  field,
  file,
  form,
  horizontal,
  input,
  radio,
  select,
  textarea,
  vertical
};

function install( Vue, prefix="vue-" ){
  Object.keys( components ).forEach( prop=>Vue.component( `${prefix}${prop}`, components[ prop ] ));
}

export default{
  install,
  autocomplete,
  checkbox,
  control,
  datepicker,
  field,
  file,
  form,
  horizontal,
  input,
  radio,
  select,
  textarea,
  vertical
};

export {
  install,
  autocomplete,
  checkbox,
  control,
  datepicker,
  field,
  file,
  form,
  horizontal,
  input,
  radio,
  select,
  textarea,
  vertical
};
