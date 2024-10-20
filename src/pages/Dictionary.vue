<script setup>

import {useTenCodes} from "../constants/ten-codes.js";
import {computed, ref} from "vue";

const tenCodesRaw = useTenCodes()
const search = ref('')

const tenCodes = computed(() => {
  if (!search.value)
    return tenCodesRaw

  return tenCodesRaw.filter(i => i.code.includes(search.value) || i.title_ru.includes(search.value) || i.title_en.includes(search.value))
})

</script>

<template>
  <div class="section">
    <input v-model="search" type="text" class="input">

    <table class="table">
      <thead>
      <tr>
        <th>Ten-code</th>
        <th>Описание</th>
      </tr>
      </thead>
      <tr v-for="tenCode in tenCodes" :key="tenCode.code">
        <td>{{ tenCode.code }}</td>
        <td>{{ tenCode.title_ru }}</td>
      </tr>
    </table>

  </div>
</template>