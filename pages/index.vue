<template>
  <div class="container">
    <div>
      <div class="align-center">
        <span class="greeting">Ask your questions here</span>
      </div>

      <AskCard />
      <div class="tags">
        <div class="tag-header small">Filter by Tags:</div>
        <div class="shift-right">
          <span v-for="(tag, index) in individualTags" :key="index">
            <input
              type="checkbox"
              :value="tag"
              v-model="checkedTags"
              @change="filterQuestions($event)"
            />
            <span class="small">{{tag}}</span>
            <div class="divider" />
          </span>
        </div>
      </div>
      <Questions
        v-for="qAndA in questions"
        :key="qAndA.id"
        :id="qAndA.id"
        :question="qAndA.question"
        :answers="qAndA.answers"
        :tags="qAndA.tags"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import Questions from '../components/questions'
import AskCard from '../components/AskCard'

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
  components: {
    Questions,
    AskCard
  },
  data() {
    return { checkedTags: [], questions: this.$store.state.qAndAs.data }
  },

  computed: mapGetters({
    qAndAs: 'qAndAs/qAndAs',
    individualTags: 'qAndAs/individualTags'
  }),
  methods: {
    addQuestion(e) {
      const text = e.target.value
      this.$store.commit('qAndAs/add', { text })
      e.target.value = ''
    },
    filterQuestions() {
      if (this.checkedTags.length === 0) {
        this.questions = this.$store.state.qAndAs.data
      } else {
        let filteredQuestions = this.qAndAs.filter(qAndA => {
          return this.checkedTags.every(checkedTag =>
            qAndA.tags.includes(checkedTag)
          )
        })

        this.questions = filteredQuestions
      }
    }
  },
  created() {
    this.$store.commit('qAndAs/sortDescById')
  }
}
</script>

<style scoped>
.greeting {
  font-size: 3em;
  font-weight: 300;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: inline;
}
.wrapper {
  max-width: 60vw;
}

.tags {
  margin-left: 4em;
  margin-top: 2em;
}

.tag-header {
  margin-bottom: 0.5em;
}

.shift-right {
  margin-left: 0.5em;
}
@media only screen and (max-device-width: 667px) and (orientation: portrait) {
  .shift-right {
    margin-left: 1.3em;
  }
  .greeting {
    font-size: 6vw;
    font-weight: 300;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: inline;
  }
  .tags {
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
