const userDB = {
  "admin": "password"
}

function fakeAPICall() {
  return new Promise(resolve => setTimeout(_ => resolve(), 1750))
}

const mockAPI = {
  async login({ username, password }) {
    await fakeAPICall()
    if (userDB[username] === password) {
      return username
    } else {
      throw new Error("Invalid username and/or password")
    }
  },
  async register({ username, password }) {
    await fakeAPICall()
    if (!username || username in userDB) throw new Error("Invalid username")
    if (!password) throw new Error("Invalid password")
    userDB[username] = password
    return { name: username }
  }
}

export default mockAPI
