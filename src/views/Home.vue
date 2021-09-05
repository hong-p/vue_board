<template>
  <div class="home">
    <subject-list/>
  </div>
</template>

<script>
// @ is an alias to /src
import SubjectList from '@/components/subject/SubjectList.vue'

export default {
  name: 'Home',
  components: {
    SubjectList
  }
}
</script>
