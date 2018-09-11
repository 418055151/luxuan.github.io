<template>
  <div  contenteditable="true"  v-on:blur="changeCount(value)" v-on:input="changeText(value)" class="inupt-box" data-placeholder="优质评论将会被优先展示"></div>
</template>
<script>
  export default {
    props: ['value'],
    data(){
      return {}
    },
    methods:{
      changeText(){
        this.getinptVal()
      },
      changeCount(){
       this.getinptVal()
      },
      getinptVal(){
        let comments = $('.inupt-box').text();
        this.$emit('inputval',comments);
      }
    }
  }


</script>
