<template>
  <div class="card">
    <div class="answers" v-if="this.answer">{{this.answer}}</div>
    <hr />
    <div class="small muted">Rank: {{this.rank}}</div>
  </div>
</template>

<script>
export default {
  name: 'Answers',
  props: ['answer', 'rank']
}
</script>

<style scoped>
.answers {
  white-space: pre;
  margin-bottom: 1em;
}
</style>