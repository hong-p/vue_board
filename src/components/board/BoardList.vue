<template>
  <div>
    <div class="all">
      <h1>{{ subject }}</h1>
      <ol id="content-list">
        <li v-for="content in contents" :key="content._id">
          {{ content.content }}
        </li>
      </ol>
      <textarea type="text" v-model="msg">
      </textarea>
      <button @click="btnClick">등록</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        contents: [],
        msg : '',
        subject : ''
      }
    },
    async created() {
      this.subject = this.$route.query.subject;
      this.loadContents();
    },
    mounted() {
      setInterval(this.loadContents, 1000*10);
    },
    methods: {
      async loadContents() {
        const requestOptions = {
          method: 'GET',
          headers: {'Content-Type': 'application/json'}        }
        const response = await fetch('https://dnypifzmc0.execute-api.ap-northeast-2.amazonaws.com/2021-08-29/board?subject='+this.subject, requestOptions)
        const data = await response.json();
        this.contents = data;
        console.log('loadContents()')
      },
      async btnClick() {
        const requestOptions = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({subject: this.subject, content: this.msg})  
        }
        await fetch('https://dnypifzmc0.execute-api.ap-northeast-2.amazonaws.com/2021-08-29/board', requestOptions);
        // const data = await response.json();
        this.msg = '';
        this.loadContents();
      }
    }
  }
</script>

<style scoped>
.all{
  margin-left: 100px;
  margin-top: 40px;
}
</style>