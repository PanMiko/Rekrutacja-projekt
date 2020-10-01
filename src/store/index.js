import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state() {
        return {
            status: '',
            title: '',
            sessions: [],
            arrangement: {},
            choosenSession: '',
            //
            choosenSeats: [],
            //
            userInfo: {},
            
        };
    },
    mutations: {
        getInfoFromServer(state) {
            const requestOptions = {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({"movie": "78483421"})
            };
            fetch("http://localhost:5000/movie", requestOptions)
                .then(response => response.json())
                .then(data => {
                    state.status = data.status;
                    state.status = data.status;
                    state.title = data.title;
                    state.sessions = data.sessions;
                    state.arrangement = data.arrangement;


                    for (let i = 0; i < state.sessions.length; i++) {
                        let unix_timestamp = state.sessions[i];
                        let date = new Date(unix_timestamp * 1000);
                        let hours = date.getHours();
                        let minutes = "0" + date.getMinutes();

                        state.sessions[i] = hours + ':' + minutes.substr(-2);
                    }
                });
        },
        userSession(state, payload) {
            state.choosenSession = payload;
            console.log(payload);
        },
        //
        addSeat(state, payload) {
            state.choosenSeats.push(payload);
        },
        removeSeat(state, payload) {
            state.choosenSeats.splice(payload, 1);
        },
        //
        pushUserInfo(state, payload) {
            state.userInfo = payload;
        }
    },
    actions: {
        getInfoFromServer(context) {
            context.commit('getInfoFromServer');
        },
        userSession(context, payload) {
            context.commit('userSession', payload);
        },
        //
        addSeat(context, payload) {
            context.commit('addSeat', payload);
        },
        removeSeat(context, payload) {
            context.commit('removeSeat', payload);
        },
        //
        pushUserInfo(context, payload) {
            context.commit('pushUserInfo', payload);
        }
    },
    getters: {
        getStatus(state) {
            return state.status;
        },
        getTitle(state) {
            return state.title;
        },
        getSessions(state) {
            return state.sessions;
        },
        getArrangement(state) {
            return state.arrangement;
        }
    },
    modules: {}
})
