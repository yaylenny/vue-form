<script>
  export default{
    data(){
      return {
        person:{
          name: 'Sam',
          address:`1225 E Speedo Dr. \n El Cajon, CA 92019`,
          age: 25,
          smokes: false,
          state:''
        }
      };
    },
    components:{},
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
      h2.title Basic form
      h3.subtitle A better description here
      hr
    .container: .columns
      .column.is-half
        vue-form
          vue-field( v-model="person.name" placeholder="Name" label="Name" message="Enter a name here")
          vue-field( v-model="person.address" placeholder="Address" label="Address", type="textarea")
          vue-field( v-model="person.smokes" label="Smoker" type="checkbox")
          vue-field
            button.button.is-primary( @click="") Submit

</template>

<style lang="scss">

</style>
