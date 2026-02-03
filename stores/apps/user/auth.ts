import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';

interface UserState {
  userData: object;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    userData: {}
  }),
  actions: {
    async login(email: string, Password: string) {
      return await axios.post("users/login", { email, Password });
    },
    async register(firstName: string, lastName: string, email: string, password: string) {
      return await axios.post("users/register", { FirstName: firstName, lastName: lastName, email: email, Password: password });
    },
    setUserData(data:object){
      this.$state.userData = data
    }
  },
  persist: true
});
