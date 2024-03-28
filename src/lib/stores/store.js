import { create } from "zustand"

const useStore = create((set)=> ({
    currentProduct: 0,
    setCurrentProduct: (index) => set(() => ({currentProduct: index})),
    activeProduct: 0,
    setActiveProduct: (index) => set(() => ({activeProduct: index})),
    mobileMenuModal: false,
    openMobileMenuModal: () => set(() => ({mobileMenuModal: true})),
    closeMobileMenuModal: () => set(() => ({mobileMenuModal: false}))
}))

export default useStore