import { createSlice } from "@reduxjs/toolkit";
import data from '../jsonData/data.json'

const initData = data.DUMMY_DATA;

const initialState = {}

initData.forEach((item) => {
    initialState[item.id] = {
        itemApprove: false,
        isUrgent: false,
        notUrgent: false
    }
});

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers:{
        approve(state, action){
            const {id} = action.payload
            const approved = state[id].itemApprove;
            if(!approved){
                state[id].itemApprove = !state[id].itemApprove
            }
        },
        urgent(state, action){
            const {id, isYesClicked} = action.payload;
            const isUrgent = state[id].isUrgent;
            if(!isUrgent && isYesClicked){
                state[id].isUrgent = true
                state[id].notUrgent = false
            }else {
                state[id].isUrgent = false
                state[id].notUrgent = true
            }
        },
    }
})
export const statusAction = statusSlice.actions;
export default statusSlice;