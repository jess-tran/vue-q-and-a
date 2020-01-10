<template>
  <div class="card">
    <div>What is your question?</div>
    <form @submit="onSubmit">
      <div>
        <textarea v-model="message" rows="5"></textarea>
      </div>
      <div class="align-center">
        <div class="small">Add Tags (optional)</div>
        <div class="shift--right">
          <span v-for="(tag, index) in individualTags" :key="index" class="checkbox--button">
            <input
              type="checkbox"
              :value="tag"
              class="tags"
              v-model="checkedTags"
              @change="selectedTags($event)"
            />

            <span class="small">{{tag}}</span>
            <div class="divider" />
          </span>
        </div>
      </div>
      <div>
        <button class="button--secondary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'AskCard',
  data() {
    return {
      message: '',
      checkedTags: []
    }
  },
  computed: mapGetters({
    qAndAs: 'qAndAs/qAndAs',
    individualTags: 'qAndAs/individualTags'
  }),
  methods: {
    onSubmit(e) {
      e.preventDefault()
      let text = this.message
      let tags = this.checkedTags
      let newId = this.qAndAs.length + 1

      let newDataObject = {
        id: newId,
        question: text,
        answers: [],
        tags: tags,
        slug: 'question_' + newId
      }
      if (/\S/.test(text)) {
        this.$store.commit('qAndAs/addQuestion', { newDataObject })
        this.message = ''
        this.checkedTags = []
      }
    },
    selectedTags(e) {
      return this.checkedTags
    }
  }
}
</script>


<style scoped>
.shift--right {
  margin-left: 1.3em;
}
</style>