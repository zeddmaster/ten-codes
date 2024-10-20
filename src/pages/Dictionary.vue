<script setup>

import {useTenCodes} from "../constants/ten-codes.js";
import {computed, onMounted, ref} from "vue";

const tenCodesRaw = useTenCodes()
const search = ref('')

const tenCodes = computed(() => {
  if (!search.value)
    return tenCodesRaw

  return tenCodesRaw.filter(i => i.code.includes(search.value) || i.title_ru.includes(search.value) || i.title_en.includes(search.value))
})

const searchInput = ref('')

onMounted(() => {
  searchInput.value.focus()
})

</script>

<template>
  <div class="section">
    <input v-model="search" type="text"
           ref="searchInput"
           class="input is-medium"
           placeholder="Search..."/>

    <table class="table mx-auto mt-6" style="min-width: 600px;">
      <thead>
      <tr>
        <th>Ten-code</th>
        <th>Описание</th>
      </tr>
      </thead>

      <tbody v-if="tenCodes.length">
      <tr v-for="tenCode in tenCodes" :key="tenCode.code">
        <td>{{ tenCode.code }}</td>
        <td>{{ tenCode.title_ru }}</td>
      </tr>
      </tbody>

      <tbody v-else>
      <tr>
        <td colspan="2" class="has-text-centered has-text-danger py-4">
          Nothing found
        </td>
      </tr>
      </tbody>

    </table>

  </div>
</template>