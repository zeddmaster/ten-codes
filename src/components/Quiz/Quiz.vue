<script setup>
import {ref} from "vue";
import {build} from "../../services/QuestionBuilder.js";

const question = ref(null)
const answers = ref([])

const chosen = ref('')

function nextQuestion(){
  chosen.value = '' // reset
  const stage = build(5)
  question.value = stage.question
  answers.value = stage.answers
}

function choose(variant){

}

function isTrue(variant){
  return variant === question.value.title_ru
}

function getVariantClass(variant){
  if(variant !== chosen.value)
    return ''

  return isTrue(variant) ? 'is-success' : 'is-danger'
}

</script>

<template>

  <section class="quiz">
    <template v-if="question && answers.length">

      <div class="quiz__question">
        {{ question.code }}
      </div>

      <div class="quiz__answers">
        <button v-for="(variant, i) in answers" :key="variant + i"
                @click="chosen = variant"
                class="button" :class="getVariantClass(variant)">
          {{ variant }}
        </button>
        <button @click="nextQuestion" class="button" :class="isTrue(chosen) ? 'is-primary' : 'is-link'">
          {{ isTrue(chosen) ? 'Next' : 'Skip' }}
        </button>
      </div>
    </template>

    <div v-else class="quiz__start">
      <button @click="nextQuestion" class="button is-primary is-medium">
        Start
      </button>
    </div>
  </section>
</template>

<style scoped>

</style>