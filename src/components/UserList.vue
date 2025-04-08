<template>
  <tbody>
    <user-item v-for="user in userListBySearchName" :key="user.id" :user="user"></user-item>
  </tbody>
</template>

<script>
import UserItem from './UserItem.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapState, mapActions } = createNamespacedHelpers('user')

export default {
  components: {
    UserItem,
  },
  computed: {
    ...mapGetters({
      userListBySearchName: 'userListBySearchName',
    }),

    ...mapState({
      userList: (state) => state.userList,
    }),
  },
  methods: {
    ...mapActions({
      getAllUser: 'getAllUserAction',
    }),
  },
  created() {
    this.getAllUser()
  },
}
</script>

<style></style>
