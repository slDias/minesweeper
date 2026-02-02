const common = {
  userDB: {
    admin: {
      password: "password",
      wins: 0,
      losses: 0,
    },
  },
  currentUser: null,
  fakeAPICall: function () {
    return new Promise((resolve) => setTimeout((_) => resolve(), 1750));
  },
};

export default common;
