import common from "./common";

const mockAPI = {
  async login({ username, password }) {
    await common.fakeAPICall();
    if (
      username in common.userDB &&
      common.userDB[username].password === password
    ) {
      let userData = Object.assign({}, common.userDB[username]);
      userData.password = undefined;
      common.currentUser = username;
      return { username, ...userData };
    } else {
      throw new Error("Invalid username and/or password");
    }
  },
  async register({ username, password }) {
    await common.fakeAPICall();
    if (!username || username in common.userDB)
      throw new Error("Invalid username");
    if (!password) throw new Error("Invalid password");
    let userData = { wins: 0, losses: 0 };
    common.userDB[username] = { password, ...userData };
    common.currentUser = username;
    return { username, ...userData };
  },
};

export default mockAPI;
