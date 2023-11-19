import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("users", () => {
  const user = ref(null);
  const handleLogin = () => {};
  const handleSignup = (credentials) => {
    const { email, password, username } = credentials;
    if (password.length > 6) {
      return (errorMessage.value = "Password length is too short");
    }
  };
  const handleLout = () => {};
  const getUser = () => {};

  return { user, handleLogin, handleSignup, handleLout, getUser };
});
