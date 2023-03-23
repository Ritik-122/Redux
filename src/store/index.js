import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increament(state) {
      state.counter++;
    },
    decreament(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice=createSlice({
    name:'authentication',
    initialState:{isAuthenticated:false},
    reducers:{
        login(state){
            state.isAuthenticated=true

        },
        logout(state){
            state.isAuthenticated=false

        }
    }

})
const store = configureStore({
  reducer: {counter:counterSlice.reducer,auth:authSlice.reducer}
});
export const authActions=authSlice.actions
export const counterActions = counterSlice.actions;
export default store;
