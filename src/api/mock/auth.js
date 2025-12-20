function fakeAPICall() {
  return new Promise(resolve => setTimeout(_ => resolve(), 1750))
}

const mockAPI = {
  async login({ username, password }) {
    await fakeAPICall()
    if (username !== "admin" || password !== "password") {
      throw new Error("invalid username and/or password")
    }
    return { name: "admin" }
  },
  async register({ username, password }) {
    await fakeAPICall()
    if (!username) throw new Error("Invalid username")
    if (!password) throw new Error("Invalid password")
    return { name: username }
  }
}

export default mockAPI
