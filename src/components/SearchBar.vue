<template>
  <div class="form-group">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        v-model="searchName"
      />
      <div class="input-group-append">
        <button
          @click="handleClickSearch(searchName)"
          class="btn btn-sm btn-gradient-primary"
          type="button"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { createNamespacedHelpers, useStore } from 'vuex'
const { mapActions } = createNamespacedHelpers('user')

export default {
  setup() {
    const store = useStore()
    const searchName = ref('')
    const handleClickSearch = () => {
      store.dispatch('user/setSearchNameAction', searchName.value)
    }
    return { searchName, handleClickSearch }
  },
}
</script>

<style></style>
