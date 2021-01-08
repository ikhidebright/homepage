export default {
  methods: {
    getUserData(userData) {
      return this.$http.get("https://hirng-x2021.glitch.me/api", userData);
    },
  },
};
