import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { introReducer } from './slices';

// Эта функция создает Store
export const store = configureStore({
   // Для того чтобы создать State для Users и еще один State для Posts передаем reducers редюсеры Users и Posts
   reducer: {
      intro: introReducer,
   },
   devTools: true,
});

// Метод который отправляет запросы на сервер
export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();

// Тип для TS который будет отображать структуру State
export type RootState = ReturnType<typeof store.getState>;
