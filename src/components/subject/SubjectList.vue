<template>
  <div>
    <div class="all">
      <ul id="subject-list">
        <li v-for="subject in subjects" :key="subject">
          <a :href="'?subject='+subject">{{ subject }}</a>
        </li>
      </ul>
      <button @click="loadSubjects">조회</button>
      <br>
      <input type="text" v-model="inputSubject"/>
      <button @click="addSubject">등록</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        subjects: [],
        inputSubject: ''
      }
    },
    async created() {
      this.loadSubjects();
    },
    methods: {
      async loadSubjects(){
        const response = await fetch('https://dnypifzmc0.execute-api.ap-northeast-2.amazonaws.com/2021-08-29/board', {
          headers: {
          'Accept': 'application/json'
          }
        })
        const data = await response.json();
        this.subjects = data;
        console.log(data)
      },
      async addSubject() {
        const requestOptions = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({subject: this.inputSubject, content: ' '})  
        }
        await fetch('https://dnypifzmc0.execute-api.ap-northeast-2.amazonaws.com/2021-08-29/board', requestOptions);
        this.inputSubject = '';
        this.loadSubjects();
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