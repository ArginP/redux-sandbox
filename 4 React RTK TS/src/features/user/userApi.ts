import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
    id: number;
    name: string;
};

// Определяем API с помощью createApi
export const userApi = createApi({
    reducerPath: 'userApi', // Уникальное имя для редюсера RTK Query
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }), // Базовый URL
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => 'users/', // Путь для запроса
        }),
    }),
});

// Экспортируем хук для использования в компонентах
export const { useGetUsersQuery } = userApi;