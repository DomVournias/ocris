import { create } from "zustand"

const useStore = create((set)=> ({
    currentProduct: 0,
    setCurrentProduct: (index) => set(() => ({currentProduct: index})),
    activeProduct: 0,
    setActiveProduct: (index) => set(() => ({activeProduct: index})),
    mobileMenuModal: false,
    openMobileMenuModal: () => set(() => ({mobileMenuModal: true})),
    closeMobileMenuModal: () => set(() => ({mobileMenuModal: false})),
    videoModal: false,
    openVideoModal: () => set(() => ({videoModal: true})),
    closeVideoModal: () => set(() => ({videoModal: false})),
    currentTestimonial: 0,
    setCurrentTestimonial: (index) => set(() => ({currentTestimonial: index})),
    searchModal: false,
    openSearchModal: () => set(() => ({searchModal: true})),
    closeSearchModal: () => set(() => ({searchModal: false})),
}))

export default useStore