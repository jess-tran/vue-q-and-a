export const state = () => ({
  data: [
    {
      id: 1,
      question: 'Question 1',
      answers: [
        {
          id: 1,
          answer: 'Answer 1',
          rank: 3
        },
        {
          id: 2,
          answer: 'Answer 2',
          rank: 2
        }
      ],
      tags: ['a', 'b', 'c'],
      slug: 'question_1'
    },
    {
      id: 2,
      question: 'Question 2',
      answers: [
        {
          id: 1,
          answer: 'Answer 1',
          rank: 3
        }
      ],
      tags: ['a', 'c'],
      slug: 'question_2'
    },
    {
      id: 3,
      question: 'Question 3',
      answers: [
        {
          id: 1,
          answer: 'test',
          rank: 3
        },
        {
          id: 2,
          answer: 'test',
          rank: 2
        }
      ],
      tags: ['a'],
      slug: 'question_3'
    },
    {
      id: 4,
      question: 'Question 4',
      answers: [
        {
          id: 1,
          answer: 'Answer 1',
          rank: 3
        },
        {
          id: 2,
          answer: 'Answer 2',
          rank: 2
        },
        {
          id: 3,
          answer: 'Answer 3',
          rank: 2
        }
      ],
      tags: ['c'],
      slug: 'question_4'
    },
    {
      id: 5,
      question: 'Question 5',
      answers: [
        {
          id: 1,
          answer: 'Answer 1',
          rank: 1
        },
        {
          id: 2,
          answer: 'Answer 2',
          rank: 4
        }
      ],
      tags: ['d'],
      slug: 'question_5'
    },
    {
      id: 6,
      question: 'Question 6',
      answers: [
        {
          id: 1,
          answer: 'Answer 1',
          rank: 5
        }
      ],
      tags: ['a', 'b'],
      slug: 'question_6'
    }
  ]
})

export const getters = {
  qAndAs: state => {
    return state.data
  },
  individualTags: state => {
    let tags = []
    state.data.forEach(data => {
      data.tags.forEach(tag => {
        if (tags.indexOf(tag) === -1) {
          tags.push(tag)
        }
      })
    })
    return tags
  }
}

export const mutations = {
  addQuestion(state, { newDataObject }) {
    state.data.unshift(newDataObject)
    window.scrollTo(0, 250)
  },
  addAnswer(state, answerData) {
    state.data.forEach(qAndA => {
      if (qAndA.id == answerData.questionId) {
        answerData.answers.id = qAndA.answers.length + 1
        qAndA.answers.unshift(answerData.answers)
      }
    })
    window.scrollTo(0, 200)
  },
  sortDescById(state) {
    for (let i = state.data.length - 1; i >= 0; i--) {
      for (let j = 1; j <= i; j++) {
        if (state.data[j].id > state.data[j - 1].id) {
          let temp = state.data[j - 1]
          state.data[j - 1] = state.data[j]
          state.data[j] = temp
        }
      }
    }
  },
  sortAnswersDescById(state) {
    state.data.map(data => {
      for (let i = data.answers.length - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
          if (data.answers[j].id > data.answers[j - 1].id) {
            let temp = data.answers[j - 1]
            data.answers[j - 1] = data.answers[j]
            data.answers[j] = temp
          }
        }
      }
    })
  }
}

export default {
  state,
  getters,
  mutations
}
