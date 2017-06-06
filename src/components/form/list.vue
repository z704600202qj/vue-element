<template>
  <div>
    <input type="text" v-model="inputContent" v-on:keyup.enter="add()" class="my-input">
    <ul class="item">
      <li v-for="item in listContents"> {{item.content}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      inputContent: '',
      listContents: [
        { content: 'What do you think?', isDone: false },
        { content: 'Have fun with blue admin', isDone: false },
        { content: 'Write email to business cat', isDone: false },
        { content: 'Get in touch with jspang team', isDone: false },
        { content: 'Ei cum soleet appareat,ex est graeci medioc', isDone: false },
        { content: 'Simaul erroribus ad usu', isDone: false },
        { content: 'Vim an eius ocurreret abhorreant,id name a', isDone: false }
      ]
    }
  },
  methods: {
    add: function () {
      if (this.inputContent !== '') {
        var addContent = { content: this.inputContent, isDone: true }
        this.listContents.splice(0, 0, addContent)
        this.inputContent = ''
      }
    }
  }
}
</script>
<style lang="stylus">
  .my-input
    line-height: 28px;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 98%;
    padding: 5px;

  .item
    margin-top: 5px;
    list-style: none;
    border: 1px solid #ccc;
    border-radius: 6px;
    li
      list-style none
      transition: all 0.5s;
      -moz-transition: all 0.5s;
      -o-transition: all 0.5s;
      -webkit-transition: all 0.5s;
      line-height: 20px;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
      border-left: 5px solid #209e91;
      text-align: left;
      &:hover
        border-left: 30px solid #209e91;
        background-color: #eee;


</style>
