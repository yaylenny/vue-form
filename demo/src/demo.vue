<script>
  import SuperForm from "./components/SuperForm.vue";
  import moment from "moment";
  export default{
    data(){
      return {
        login:{
          username: '',
          password: ''
        },
        person:{
          name: 'Sam',
          address:`1225 E Speedo Dr. \n El Cajon, CA 92019`,
          age: 25,
          smokes: false,
          state:'',
          birthday: moment()
        }
      };
    },
    components:{
      SuperForm
    },
    computed:{},
    methods:{},
    // mixins:[],
    // created(){},
    // destroyed(){},
    // mounted(){},
    // watch:{}
  }
</script>

<template lang="pug">
  .demo
    .hero.is-info
      .hero-body: .container
        h1.title vue-form
        h2.subtitle A form component for vue

    section.section: .container
      .columns
        .column.is-half
          h2.title Basic form
          h3.subtitle A better description here
          hr
          vue-form
            vue-field( v-model="person.name"
              placeholder="Name"
              label="Name"
              message="Enter a name here")
            vue-field( v-model="person.address" placeholder="Address" label="Address", type="textarea")
            vue-field( v-model="person.smokes" label="Smoker" type="checkbox")
            vue-field( v-model="person.birthday" label="Birthday" type="datepicker")

            vue-field
              button.button.is-info( @click="") Submit
        .column.is-5.is-offset-1
          h4.title.is-5 The Field component
          h5.subtitle VueForm.field
    section.section: .container
      .columns
        .column.is-one-quarter: .box
          h2.title Login
          hr
          vue-form
            vue-field( v-model="login.username" placeholder="Username")
            vue-field( v-model="login.username" placeholder="Password" type="password")
            vue-field( is-grouped-centered )
              button.button.is-text.has-text-danger( @click="") Cancel
              button.button.is-success( @click="") Login

    section.section: .container
      .columns
        .column.is-half
          h2.title Addons & Grouping
          h3.subtitle Right on the field component
          hr
          vue-form
            vue-field( v-model="login.username"
              placeholder="Username"
              :icons-left="['user']"
              :addons-right="[]")
              .control( slot="right" )
                button.button.is-success( @click="" ) Add user

    section.section: .container
      h2.title Super Form
      h3.subtitle Using the vue-form component
      hr
      super-form()
</template>

<style lang="scss">
.demo{
  code{
    white-space: pre;
  }
}
</style>
