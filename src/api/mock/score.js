import common from "./common";

const scoreAPI = {
  async update({ isWin }) {
    await common.fakeAPICall();

    if (!common.currentUser || !(common.currentUser in common.userDB))
      throw new Error("Unauthorized");

    if (isWin) common.userDB[common.currentUser].wins += 1;
    else common.userDB[common.currentUser].losses += 1;

    return common.userDB[common.currentUser];
  },
};

export default scoreAPI;
