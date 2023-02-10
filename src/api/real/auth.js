const host = "http://localhost:3080"
const basePostRequest = {
    method: 'post',
    mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Headers': "*"
    }
}
const authAPI = {
    async login (payload) {
        const response = await fetch(`${host}/logins`, {
            ...basePostRequest,
            body: JSON.stringify(payload)
        })
        const data = await response.json()
        if (response.ok) return data

        throw data.error
    },
    async register (payload) {
        const response = await fetch(`${host}/users`, {
            ...basePostRequest,
            body: JSON.stringify(payload)
        })
        const data = await response.json()
        if (response.ok) return data

        throw data.error
    }
}

export default authAPI