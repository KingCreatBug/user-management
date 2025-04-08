import axios from 'axios'

export const getAllUsersApi = async () => {
  const res = await axios({
    method: 'GET',
    url: 'https://67f48124cbef97f40d2e6268.mockapi.io/users',
  })
  return res.data
}

export const createUsersApi = async (user) => {
  const res = await axios({
    method: 'POST',
    url: 'https://67f48124cbef97f40d2e6268.mockapi.io/users',
    data: user,
  })
  return res.data
}

export const removeUsersApi = async (userId) => {
  const res = await axios({
    method: 'DELETE',
    url: `https://67f48124cbef97f40d2e6268.mockapi.io/users/${userId}`,
  })
  return res
}

export const updateUsersApi = async (user) => {
  const res = await axios({
    method: 'PUT',
    url: `https://67f48124cbef97f40d2e6268.mockapi.io/users/${user.id}`,
    data: user,
  })
  return res
}
