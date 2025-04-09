<template>
  <div class="card">
    <div class="card-body">
      <form class="forms-sample">
        <!-- Username -->
        <div class="form-group">
          <label for="username">Username</label>
          <input
            v-model="user.name"
            type="text"
            class="form-control"
            id="username"
            placeholder="Username"
          />
        </div>
        <!-- Age -->
        <div class="form-group">
          <label for="age">Age</label>
          <input v-model="user.age" type="number" class="form-control" id="age" placeholder="Age" />
        </div>
        <!-- Avatar -->
        <div class="form-group">
          <label for="avatar">Avatar</label>
          <input
            v-model="user.avatar"
            type="text"
            class="form-control"
            id="avatar"
            placeholder="avatar"
          />
        </div>
        <!-- Programming Language -->
        <div class="form-group">
          <label for="">Programming Language : </label>
          <div class="form-row-flex">
            <div class="form-check">
              <label class="form-check-label">
                <input
                  v-model="user.programmingLanguage"
                  value="Javascript"
                  type="checkbox"
                  class="form-check-input" />
                JavaScript <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  v-model="user.programmingLanguage"
                  value="Java"
                  type="checkbox"
                  class="form-check-input" />
                Java <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  v-model="user.programmingLanguage"
                  value="PHP"
                  type="checkbox"
                  class="form-check-input" />
                PHP <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  v-model="user.programmingLanguage"
                  value="Python"
                  type="checkbox"
                  class="form-check-input" />
                Python <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  v-model="user.programmingLanguage"
                  value="C#"
                  type="checkbox"
                  class="form-check-input" />
                C# <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  v-model="user.programmingLanguage"
                  value="C/C++"
                  type="checkbox"
                  class="form-check-input" />
                C/C++ <i class="input-helper"></i
              ></label>
            </div>
          </div>
        </div>
        <!-- Gender -->
        <div class="form-group">
          <label for="">Gender : </label>
          <div class="d-flex">
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  v-model="user.gender"
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="Nam" />
                Nam <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  v-model="user.gender"
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="Nữ" />
                Nữ <i class="input-helper"></i
              ></label>
            </div>
            <div class="form-check mr-3">
              <label class="form-check-label">
                <input
                  v-model="user.gender"
                  type="radio"
                  class="form-check-input"
                  name="gender"
                  id="gender"
                  value="khác" />
                Khác <i class="input-helper"></i
              ></label>
            </div>
          </div>
        </div>
        <!-- Type User -->
        <div class="form-group row">
          <label class="col-sm-3 col-form-label">Type User : </label>
          <div class="col-sm-9">
            <select v-model="user.typeUser" class="form-control">
              <option value="ADMIN">Admin</option>
              <option value="CLIENT">Client</option>
            </select>
          </div>
        </div>
        <!-- Description -->
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            v-model="user.description"
            class="form-control"
            id="description"
            rows="4"
          ></textarea>
        </div>
        <button
          @click.prevent="handleSubmit(user)"
          type="submit"
          class="btn btn-gradient-primary mr-2"
        >
          Submit
        </button>
        <button class="btn btn-light">Cancel</button>
      </form>
    </div>
  </div>
</template>

<script>
import { watch, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
export default {
  props: {
    userInfo: Object,
  },
  setup(props) {
    const store = useStore()
    const { userInfo } = toRefs(props)
    const user = reactive({
      name: '',
      age: '',
      avatar: '',
      programmingLanguage: [],
      gender: 'Nam',
      typeUser: 'CLIENT',
      description: '',
    })

    // Chuyen doi props thanh reactive
    watch(
      userInfo,
      (newVal) => {
        if (newVal) {
          user.id = newVal.id
          user.name = newVal.name
          user.age = newVal.age
          user.avatar = newVal.avatar
          user.programmingLanguage = [...newVal.programmingLanguage]
          user.gender = newVal.gender
          user.typeUser = newVal.typeUser
          user.description = newVal.description
        }
      },
      { immediate: true },
    )

    const handleUpdateUser = (user) => {
      store.dispatch('user/updateUserAction', user)
    }

    const handleAddUser = (user) => {
      store.dispatch('user/addUserAction', user)
    }

    const handleSubmit = () => {
      if (user.id) {
        handleUpdateUser(user)
      } else {
        handleAddUser(user)
      }
    }

    return { user, handleSubmit }
  },
}
</script>

<style>
.form-row-flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
