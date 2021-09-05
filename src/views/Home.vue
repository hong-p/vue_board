<template>
  <div class="home">
    <board-list v-if="isSelectSubject"/>
    <subject-list v-else/>
  </div>
</template>

<script>
// @ is an alias to /src
import SubjectList from '@/components/subject/SubjectList.vue'
import BoardList from '../components/board/BoardList.vue'

export default {
  name: 'Home',
  components: {
    SubjectList,
    BoardList
  },
  data() {
    return {
      isSelectSubject: false
    }
  },
  created() {
    console.log(this.$route.query.subject);
    console.log(this.isSelectSubject)
    if(this.$route.query.subject){
      this.isSelectSubject = true;
    }
    else{
      this.isSelectSubject = false;
    }
    console.log(this.isSelectSubject)
  }
}
</script>
