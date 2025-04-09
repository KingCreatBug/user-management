<template>
  <tbody>
    <user-item v-for="user in userListBySearchName" :key="user.id" :user="user"></user-item>
  </tbody>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import UserItem from './UserItem.vue'

export default {
  components: {
    UserItem,
  },

  setup() {
    const store = useStore()
    const userListBySearchName = computed(() => store.getters['user/userListBySearchName'])
    const getAllUser = () => {
      store.dispatch('user/getAllUserAction')
    }

    getAllUser()

    const userList = () => {
      return store.state.userList
    }

    return { userListBySearchName, userList }
  },
}
</script>

<style></style>
