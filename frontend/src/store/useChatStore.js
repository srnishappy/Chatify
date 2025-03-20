import { create } from 'zustand';
import { toast } from 'react-toastify';
import { axiosInstance } from '../lib/axios';

export const useChatStore = create((set) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get('/messages/user');
      set({ users: res.data });
    } catch (err) {
      toast.error('Something went wrong');
    } finally {
      set({ isUsersLoading: false });
    }
  },
  getMessagers: async (id) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${id}`);
      set({ messages: res.data });
    } catch (err) {
      toast.error('Something went wrong');
    } finally {
      set({ isMessagesLoading: false });
    }
  },
  setSelectedUser: (selectedUser) => {
    set({ selectedUser });
  },
}));
