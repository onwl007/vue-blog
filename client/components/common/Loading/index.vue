<template>
  <div class="loading" :class="[`loading-${size}`,dark && 'loading-dark']">
    <div class="wrapper">
      <div class="spinner">
        <template v-if="type === 'snake'">
          <i class="spinner-snake"></i>
        </template>
      </div>
      <div class="text" v-if="text">{{text || 'Loing'}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Loading",
    props: {
      type:{
        type:String,
        default:'snake',
        validator(val){
          return ['three-bounce','snake'].includes(val)
        }
      },
      text:{
        type:String,
        default:''
      },
      size:{
        type:String,
        default:'default',
        validator(val){
          return ['large','default','small','mini'].includes(val)
        }
      },
      dark:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{}
    }
  }
</script>

<style lang="stylus">
  @import "index.styl"
</style>
