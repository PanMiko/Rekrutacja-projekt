import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state() {
        return {
            status: '',
            title: '',
            sessions: [],
            arrangement: {}
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
                        var date = new Date(unix_timestamp * 1000);
                        var hours = date.getHours();
                        var minutes = "0" + date.getMinutes();

                        var formattedTime = hours + ':' + minutes.substr(-2);

                        console.log(formattedTime);
                        state.sessions[i] = formattedTime;
                    }
                });
        },
    },
    actions: {},
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
