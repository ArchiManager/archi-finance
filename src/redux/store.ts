import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from '@/redux/features/todo/todoSlice';
import { counterSlice } from '@/redux/features/counter/counterSlice';
import { createNewJobSlice } from "@/redux/features/createNewJob/createNewJobSlice";

import { userApi } from '@/redux/services/userApi';

export const makeStore = () => {
    return configureStore({
        reducer: {
            // feature reducers
            todos: todoSlice.reducer,
            counterReducer: counterSlice.reducer,
            createNewJob: createNewJobSlice.reducer,

            // api slices
            [userApi.reducerPath]: userApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(userApi.middleware),
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
