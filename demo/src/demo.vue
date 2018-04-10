<script>
  import SuperForm from "./components/SuperForm.vue";
  import MockAutoComplete from "./components/MockAutoComplete.vue";
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
          city: '',
          movie: 60,
          birthday: moment()
        }
      };
    },
    components:{
      SuperForm,
      MockAutoComplete
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
            vue-field( label="Name" message="Enter a name here")
              vue-input( v-model="person.name" placeholder="Name" iconsLeft="user")

            vue-field( label="Address" )
              vue-input( v-model="person.address" placeholder="Address" type="textarea" )
            vue-field
              vue-checkbox( label="Smoker" v-model="person.smokes" )
            .columns
              .column
                vue-field( label="Datepicker")
                  vue-datepicker( v-model="person.birthday" icon="calendar" is-info)
              .column
                vue-field( label="Autocomplete")
                  mock-auto-complete( v-model="person.city" is-danger )
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
      h1.title Autocomplete
      h2.subtitle with easy to use hooks
      hr
      .columns
        .column.is-6
          h5.title.is-6 Movie titles
          vue-form
            vue-autocomplete( v-model="person.movie"
              placeholder="Movie title"
              getter="movies"
              labelProp="title"
              searchProps="title"
              valueProp="id"
              icon="film")

              template( slot="item" slot-scope="item" )
                .subtitle {{item.label}}
                .content
                  p
                    | {{item.result.release}}
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
