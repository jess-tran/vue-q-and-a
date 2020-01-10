<template>
  <div class="card">
    <div class="questions-card">
      <div class="question">
        <nuxt-link :to="`question/${id}`" class="question">{{this.question}}</nuxt-link>
      </div>
      <div v-if="this.answers.length > 0">{{topAnswer}}</div>
      <hr />
      <div class="small muted">
        Tags:
        <span v-if="this.currentTags">{{this.currentTags}}</span>
        <span v-else>N/A</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Questions',
  props: ['question', 'id', 'answers', 'tags'],
  data() {
    return { currentTags: '' }
  },
  methods: {
    displayTags() {
      let tags = this.tags.join(', ')
      this.currentTags = tags
    },
    sortAnswersDesc() {
      let sortedAnswers = JSON.parse(JSON.stringify(this.answers))
      sortedAnswers.forEach((answer, i) => {
        if (i !== 0 && answer.rank > sortedAnswers[i - 1].rank) {
          let higher = answer
          let lower = sortedAnswers[i - 1]
          sortedAnswers[i - 1] = higher
          sortedAnswers[i] = lower
        }
      })
    },
    sortAnswersAsc() {
      let sortedAnswers = JSON.parse(JSON.stringify(this.answers))
      sortedAnswers.forEach((answer, i) => {
        if (i !== 0 && answer.rank < sortedAnswers[i - 1].rank) {
          let lower = answer
          let higher = sortedAnswers[i - 1]
          sortedAnswers[i - 1] = lower
          sortedAnswers[i] = higher
        }
      })
    }
  },
  computed: {
    topAnswer() {
      let topAnswer
      this.answers.forEach((answer, i) => {
        if (i === 0) {
          topAnswer = answer
        } else if (answer.rank > topAnswer.rank) {
          topAnswer = answer
        }
      })
      return topAnswer.answer
    }
  },
  mounted() {
    this.displayTags()
  }
}
</script>

<style scoped>
.questions-card a {
  background-color: white;
  font-size: 1.2em;
  color: rgb(0, 110, 140);
  text-decoration: none;
  white-space: normal;
  font-weight: bold;
}

.questions-card a:hover {
  color: rgb(0, 68, 87);
  text-decoration: underline;
}

.questions-card .topAnswer {
  background-color: white;
  overflow-wrap: break-word;
}

.question {
  margin-bottom: 1em;
}

@media only screen and (max-device-width: 667px) and (orientation: portrait) {
  .question {
    margin-bottom: 5px;
  }
}
</style>