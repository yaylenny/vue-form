<script>
  import moment from "moment";
  import TextInput from "./input.vue";
  import { bulma, colors, styles, states, sizes } from "Mixins";
  import { range } from "lodash";

  export default{
    name: 'vueDatepicker',
    mixins:[ bulma, colors, styles, states, sizes ],
    // modifiers:['colors','sizes','states','styles' ],
    baseClass: 'datepicker',
    props: {
      format:{ type: String, default: 'MMMM DD, YYYY'},
      placeholder: String,
      name: String,
      icon: String,
      iconsLeft: [ String, Array ],
      iconsRight: [ String, Array ],
      // isPrimary: Boolean,
      value:{}
    },
    data(){

      return {
        active:{
          month: 0,
          year: 2000,
          day: 1
        },
        // activeMonth:0,
        // activeYear:2014,
        // activeDay: 1,
        dayNames: moment.weekdaysShort() ,
        textInputValue: '',
        datepickerVisible: false,
        timer: 0
      };
    },
    components:{
      TextInput
    },
    computed:{
      activeFirst(){// first of the current month
        return moment({ year: this.active.year, month: this.active.month, date: 1})
      },
      activeStart(){// the first day on the visible calendar ( into last month )
        let m=moment( this.activeFirst );
        m.subtract( m.weekday(), 'days');
        return m;
      },
      activeEnd(){// last day on the visible calendar
        let m=moment( this.activeLast );
        m.add( 6 - m.weekday(), 'days' );
        return m;
      },
      activeLast(){
        let month=this.active.month+1;
        let year=this.active.year;
        if( month > 11 ){
          month=0;
          year=year+1;
        }
        return moment({ year, month, date: 1 });
      },
      activeRange(){// an array of moments representing the visible calenadr month
        let m=moment( this.activeStart );
        let end=moment( this.activeEnd );
        let arr=[];
        while( true ){
          arr.push( moment( m ));
          if( m.isBefore( end )){
            m.add( 1, "days" );
          }
          else break;
        }
        return arr;
      },
      activeCalendarRows(){
        let count=Math.ceil( this.activeRange.length / 7 );
        return range( count ).map( num=>{
          return range( 7 ).map( i=>{
            let m=this.activeRange[ 7 * num + i ];
            return {
              m,// moment instance
              date: m.date(),
              current: m.month()===this.active.month,

            }
          });
        })
      },
      activeMonthName(){
        return moment.months()[ this.active.month ];
      },
      textValue(){
        return this.formatValue( this.value );
      }
    },
    methods:{
      formatValue( value ){
        if( moment.isMoment( value )) return value.format( this.format );
        return value;
      },
      inputFocus( e ){
        e.target.select();
        this.datepickerVisible=true;
        console.log( 'focus')
      },
      inputBlur( e ){
        clearTimeout( this.timer );
        this.timer=setTimeout(()=>{
          this.datepickerVisible=false;
          clearTimeout( this.timer );
        }, 200 );
      },
      isActive( m ){
        return moment({
          year: this.active.year,
          month: this.active.month,
          date: this.active.day
        }).isSame( m, "day" );
      },
      isToday( m ){
        return moment().isSame( m, "day" );
      },
      selectMoment( m ){// user has selected `day` of active.month/active.year
        let dateString=this.formatValue( m );
        this.$emit('input', moment.isMoment( this.value ) ? m : dateString );
        this.textInputValue=dateString;
        this.datepickerVisible=false;
      },
      jumpMonth( month ){
        let year=this.active.year;
        if( month < 0 ){
          month=11;
          year--;
        }
        else if( month > 11 ){
          month=0;
          year++;
        }
        this.active.month=month;
        this.active.year=year;
      },
      writeActiveData(){
        let m=this.value ? ( moment.isMoment( this.value ) ? this.value : moment( this.value, this.format ) ) : moment();
        this.active.month=m.month();
        this.active.year=m.year();
        this.active.day=m.date();
        if( this.value ){
          this.textInputValue=this.textValue;
        }
      }
    },
    created(){
      this.writeActiveData();
    },
    watch:{
      value: 'writeActiveData'
    }
  }
</script>
<template>
  <div class="datepicker-control">
    <text-input
      :value="textInputValue"
      @focus="inputFocus"
      @keyup.native.esc="datepickerVisible=false"
      :icon="icon"
      :icons-left="iconsLeft"
      :icons-right="iconsRight"
      :is-primary="isPrimary"
      :is-info="isInfo"
      :is-danger="isDanger"
      :is-warning="isPrimary"
      :is-success="isInfo"
      :is-small="isSmall"
      :is-normal="isNormal"
      :is-medium="isMedium"
      :is-large="isLarge"
      :is-hovered="isHovered"
      :is-focused="isFocused"
      :is-loading="isLoading"
      :is-rounded="isRounded"
      :placeholder="placeholder">
    </text-input>
    <div class="dp-popup" v-show="datepickerVisible" @mouseup.stop="">
      <div class="dp-calendar">
        <div class="dp-nav">
          <a class="button is-text" href="#" @click.prevent="jumpMonth( active.month - 1 )">

          </a>
          <span class="title is-5">{{activeMonthName}} {{active.year}}</span>
          <a class="button is-text" href="#" @click.prevent="jumpMonth( active.month + 1 )">&gt;</a>
        </div>
        <div class="dp-rows">
          <div class="dp-row dp-daynames">
            <div class="dp-dayname" v-for="name in dayNames">
              {{name}}
            </div>
          </div>
          <div class="dp-row" v-for="row in activeCalendarRows">
            <div class="dp-day"
              v-for="obj in row"
              v-if="obj"
              :class="{ 'current': obj.current, 'today': isToday( obj.m ), active: isActive( obj.m ) }"
              @click="selectMoment( obj.m )">
              <div class="dp-date">{{obj.date}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .datepicker-control{
    position: relative;
    font-size: 12px;
    .dp-popup{
      position: absolute;
      z-index: 100;
      background: #fff;
      top: 100%;
      left: 0;
      width: 300px;
      height: 240px;
      display: flex;
      flex-direction: column;
      border: 1px solid #aaa;
      box-shadow: 0 0 -2px 12px rgba( 100, 100, 100, .1 );
      .dp-nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .25em;
        background: rgb(68, 126, 19);
        color: #fff;
        .title{
          margin: 0;
          color: #fff;
        }
      }
      .dp-rows{
        display: flex;
        flex: 1;
      }
      .dp-row{
        &, .dp-day, .dp-dayname{
          width: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        &.dp-daynames{
          flex: none;
        }
        .dp-day{
          // border-top: 1px solid #aaa;
          height: 3rem;
          .dp-date{
            padding: .25em;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            &:hover{
              background: #eee;
            }
          }
          &:not(:last-child){
            // border-right: 1px solid #aaa;
          }
          &.current{
            // background: #eee;
          }
        }
      }
      .dp-calendar{
        flex: 1;
        display: flex;
        flex-direction: column;
        .dp-rows{
          &, .dp-row{
            display: flex;
          }
        }
        .dp-toolbar{
        }
        .dp-rows{
          flex-direction: column;
          flex: 1;
        }
      }
    }
  }
</style>
