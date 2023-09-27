import { createStore } from "vuex";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

const store = createStore({
    state: {
        users: [],
        currentUser:[]
    },
    getters: {
        getUsers(state){
            return state.users
        },
        getUsersById(state){
            return (id) => {
                return state.users.filter(userx => userx.username == id)
            }
        },
        isLoggedAccount(state){
            return state.isLogged
        },
        getDepartment(state){
            return (username)=>{
                return state.currentUser.filter(curr => curr.username == username)
            }
        },
        getData(state){
            return state.currentUser
        }
    },
    mutations: {
        async initializeUsers(state){
            // state.users = JSON.parse(localStorage.getItem("users")) //localstorge
            const result = await axios.get('https://10.0.6.2/backend/users')
            state.users = result.data
        },
        async inquire(state, user){
            const result = await axios.post('https://10.0.6.2/backend/inquire', user)

            state.currentUser = result.data
        },
        editUser(state, user){
            state.users.map(userx => {
                if(userx.id == user.id) {
                    userx.fname = user.fname
                    userx.lname = user.lname
                    return userx
                }
                return userx
            })
        }
    },
    actions: {
        inquireDepartment(context, user){
            context.commit('inquire', user)
        }
    },
});
// localstorage
// store.subscribe((mutation, state) => {
//     localStorage.setItem("users", JSON.stringify(state.users))
// })

export default store