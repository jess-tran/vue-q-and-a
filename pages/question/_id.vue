<template>
  <div class="container">
    <div class="card">
      <div class="question">{{question}}</div>
      <div>
        <div class="answer-card">
          <div class="header">Answer Here</div>
          <form @submit="onSubmit">
            <textarea v-model="answer" rows="5"></textarea>
            <div>
              <button class="button--primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div>
      <select name="sortAnswers" @change="sortAnswers($event)" ref="dropdown">
        <option value="1">New</option>
        <option value="2">Descending Rank</option>
        <option value="3">Ascending Rank</option>
      </select>
    </div>
    <div>
      <Answers
        v-for="answer in answers"
        :key="answer.id"
        :answer="answer.answer"
        :rank="answer.rank"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Answers from '../../components/Answers'

export default {
  head() {
    return {
      title: 'Enquirie',
      meta: [
        {
          hid: 'Q&A',
          name: 'Q&A',
          content: 'Get your questions answered here!'
        }
      ]
    }
  },
  components: { Answers },
  data() {
    return {
      question: '',
      answers: [],
      answer: ''
    }
  },
  computed: mapGetters({
    qAndAs: 'qAndAs/qAndAs'
  }),
  methods: {
    sortAnswers(e) {
      if (e.target.value == '2') {
        this.sortAnswersDescRank()
      } else if (e.target.value == '3') {
        this.sortAnswersAscRank()
      } else {
        this.filterById(this.qAndAs)
      }
    },
    filterById(qAndAs) {
      let filteredData = qAndAs.filter(
        qAndA => qAndA.id == this.$route.params.id
      )

      filteredData.map(data => {
        this.question = data.question
        this.answers = data.answers
      })
    },
    sortAnswersDescRank() {
      this.filterById(this.qAndAs)
      let sortedAnswers = JSON.parse(JSON.stringify(this.answers))
      for (let i = sortedAnswers.length - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
          if (sortedAnswers[j].rank > sortedAnswers[j - 1].rank) {
            let temp = sortedAnswers[j - 1]
            sortedAnswers[j - 1] = sortedAnswers[j]
            sortedAnswers[j] = temp
          }
        }
      }
      this.answers = sortedAnswers
    },
    sortAnswersAscRank() {
      this.filterById(this.qAndAs)
      let sortedAnswers = JSON.parse(JSON.stringify(this.answers))
      for (let i = sortedAnswers.length - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
          if (sortedAnswers[j - 1].rank > sortedAnswers[j].rank) {
            let temp = sortedAnswers[j - 1]
            sortedAnswers[j - 1] = sortedAnswers[j]
            sortedAnswers[j] = temp
          }
        }
      }
      this.answers = sortedAnswers
    },
    onSubmit(e) {
      e.preventDefault()

      let answer = this.answer
      let answerObject = { id: 0, answer: answer, rank: 1 }
      let questionId = this.$route.params.id

      let answerData = {
        questionId: questionId,
        answers: answerObject
      }
      if (/\S/.test(answerData.answers.answer)) {
        this.$store.commit('qAndAs/addAnswer', answerData)
        this.answer = ''
        this.filterById(this.qAndAs)
        this.$refs['dropdown'].value = '1'
      }
    }
  },
  mounted() {
    this.filterById(this.qAndAs)
    this.$store.commit('qAndAs/sortAnswersDescById')
  }
}
</script>

<style scoped>
.question {
  font-size: 1.2em;
  background-color: white;
  font-weight: bold;
  margin-bottom: 1.5em;
}

.answer-card {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: rgb(240, 240, 240);
  padding: 0.5em;
  margin: 1rem 0;
  border: 0.5px solid rgb(219, 219, 219);
  border-radius: 5px;
  max-width: 60vw;
}

.answer-card .header {
  float: left;
  margin-top: 1em;
  color: rgb(109, 108, 108);
}

.answer-card div {
  background-color: rgb(240, 240, 240);
}

.answer-card form {
  background-color: rgb(240, 240, 240);
  max-width: 60vw;
}

.answer-card textarea {
  width: 100%;
  background-color: white;
  border: 0.5px solid rgb(206, 206, 206);
}

@media only screen and (max-device-width: 667px) and (orientation: portrait) {
  .answer-card {
    background-color: rgb(240, 240, 240);
    padding: 1em;
    margin: 1rem 0;
    border: 0.5px solid rgb(219, 219, 219);
    border-radius: 5px;
    max-width: 90vw;
  }

  .answer-card form {
    background-color: rgb(240, 240, 240);
    max-width: 90vw;
  }
}
</style>