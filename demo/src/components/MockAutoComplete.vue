<script>
  import { autocomplete } from "Lib/vue-form";
  export default{
    mixins:[ autocomplete ],
    getter: 'mock',
    searchProps:['first','last','city','movie'],
    valueProp: 'id',
    getLabel:item=>`${item.first} ${item.last}`,
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
