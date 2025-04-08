import { createUsersApi, getAllUsersApi, removeUsersApi, updateUsersApi } from '@/apis/user'

const state = () => {
  return {
    userList: [
      {
        id: 1,
        name: 'Hoàng Bảo Trung',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSBuFXgq3jf1eqWCDpBWJqlhH9d6ANbAa9dA&s',
        age: 23,
        description: 'thân thiện , hoc hỏi nhanh',
        programmingLanguage: ['JS', 'JAVA'],
        gender: 'Nam',
        type: 'ADMIN',
      },
      {
        id: 2,
        name: 'Hồ Thị Xô My',
        avatar:
          'https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg',
        age: 22,
        description: 'thân thiện , hoc hỏi nhanh',
        programmingLanguage: ['PHP', 'C#'],
        gender: 'Nữ',
        type: 'CLIENT',
      },
    ],
    searchName: '',
  }
}
const getters = {
  userListBySearchName(state) {
    const { userList, searchName } = state
    return userList.filter((user) => user.name.toLowerCase().includes(searchName.toLowerCase()))
  },
}

const mutations = {
  setUserListMutation(state, payload) {
    state.userList = payload
  },
  setSearchNameMutation(state, payload) {
    state.searchName = payload
  },
  addUserMutation(state, payload) {
    state.userList.push(payload)
  },
  removeUserMutation(state, payload) {
    state.userList = state.userList.filter((user) => user.id !== payload)
  },
  updateUserMutation(state, payload) {
    state.userList = state.userList.map((user) => {
      if (user.id === payload.id) {
        return payload
      }
      return user
    })
  },
}

const actions = {
  async getAllUserAction(context) {
    const payload = await getAllUsersApi()
    context.commit('setUserListMutation', payload)
  },
  setSearchNameAction(context, payload) {
    context.commit('setSearchNameMutation', payload)
  },
  async addUserAction(context, payload) {
    const res = await createUsersApi(payload)
    context.commit('addUserMutation', res)
    // Goi lai action getAllUserAction
    context.dispatch('getAllUserAction')
  },
  async removeUserAction(context, payload) {
    const res = await removeUsersApi(payload)
    context.commit('removeUserMutation', res)
    // Goi lai action getAllUserAction
    context.dispatch('getAllUserAction')
  },
  async updateUserAction(context, payload) {
    const res = await updateUsersApi(payload)
    context.commit('updateUserMutation', res)
    // Goi lai action getAllUserAction
    context.dispatch('getAllUserAction')
  },
}

export default { namespaced: true, state, getters, mutations, actions }
