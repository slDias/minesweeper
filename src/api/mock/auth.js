function fakeAPICall () {
    return new Promise(resolve => setTimeout(_ => resolve(), 1750))
}

export default {
    async login ({ username, password }) {
        await fakeAPICall()
        if (username !== "admin" || password !== "password") throw "invalid username and/or password"
        return {
            name: "hasusuah"
        }
    },
    async register ({ username, password }) {
        await fakeAPICall()
        if (!username) throw "Invalid username"
        if (!password) throw "Invalid password"
        return { name: "haushauhs" }
    }
}