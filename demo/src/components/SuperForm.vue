<script>
  import { form } from "Lib/vue-form";
  export default{
    mixins:[ form ],
    Fields:{
      name: String,
      age: Number,
      smokes: Boolean,
      fields:[ 'name', 'age', 'smokes']
    },
    props: {},
    data(){
      return {};
    },
    components:{},
    computed:{},
    methods:{},
    created(){},
    watch:{}
  }
</script>
