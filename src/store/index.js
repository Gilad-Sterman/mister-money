import { createStore } from 'vuex'
import contact from './modules/contact.js'

const storeOptions = {
    strict: true,
	state() {
		return {
		}
	},
	mutations: {
	},
    actions: {

    },
    getters: {
    },
    modules: {
        contact,
    }
}
const store = createStore(storeOptions)
// store.subscribe((cmd, state) => {
//     console.log('cmd', cmd)
//     console.log('state', state)
// }) 
export default store