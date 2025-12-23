const userDB = {
  admin: { 
    password: "password",
    wins: 0,
    losses: 0
  }
}

function fakeAPICall() {
  return new Promise(resolve => setTimeout(_ => resolve(), 1750))
}

const mockAPI = {
  async login({ username, password }) {
    await fakeAPICall()
    if (username in userDB && userDB[username].password === password) {
      let userData = Object.assign({}, userDB[username])
      userData.password = undefined
      return userData
    } else {
      throw new Error("Invalid username and/or password")
    }
  },
  async register({ username, password }) {
    await fakeAPICall()
    if (!username || username in userDB) throw new Error("Invalid username")
    if (!password) throw new Error("Invalid password")
    let userData = {wins: 0, losses: 0}
    userDB[username] = {password, ...userData}
    return userData
  }
}

export default mockAPI
