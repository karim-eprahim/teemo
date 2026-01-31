import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';

interface UserState {
  id: string;
  name: string;
  bio: string;
  image: string;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    id: '',
    name: '',
    bio: '',
    image: '',
  }),
  actions: {
    async login(email: string, Password: string) {
      return await axios.post("users/login", { email, Password });
    },
  },
  persist: true
});
