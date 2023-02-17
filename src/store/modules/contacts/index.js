const module = {
    namespaced: true,
    state() {
        return {
            contacts: [
                { id: 2, name: 'Jason', avatar: '/avatars/avatar-02.jpg' },
                { id: 3, name: 'Janet', avatar: '/avatars/avatar-03.jpg' }
            ]
        }
    },
    getters: {
        getContacts: (state) => {
            return state.contacts
        }
    }
}

export default module