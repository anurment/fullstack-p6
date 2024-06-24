import { createSlice  } from "@reduxjs/toolkit"

//const initialState = 'test notification'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        addNotification(state, action) {
            return action.payload
        },
        deleteNotification(state, action) {
            return null
        }
    }
})

export const { addNotification, deleteNotification } =
notificationSlice.actions

export default notificationSlice.reducer
