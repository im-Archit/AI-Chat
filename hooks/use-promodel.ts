import { create } from "zustand";


interface useProModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useProModal = create<useProModalStore>((set) => ({
  isOpen: false, // Set it to false initially
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
