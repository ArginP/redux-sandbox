import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
    id: number;
    name: string;
};

type Post = {
    id: number;
    title: string;
    body: string;
}

// Определяем API с помощью createApi
export const userApi = createApi({
    reducerPath: 'userApi', // Уникальное имя для редюсера RTK Query
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }), // Базовый URL
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => 'users/', // Путь для запроса
        }),
        getPosts: builder.query<Post[], { limit: number; start: number }>({
            query: ({ limit, start }) => `posts?_limit=${limit}&_start=${start}`,
        }), // Добавляем параметры для запроса, в соответствии с используемым API (jsonplaceholder)
        createPost: builder.mutation<Post, Omit<Post, 'id'>>({
            query: (post) => ({
                url: "/posts",
                method: "POST",
                body: post,
            })
        })
        // <Post, Omit<Post, 'id'>>
        // типизируем пост, но указываем, что когда будем создавать пост, в нем не будет id, т.к. id выдает бэкенд
    }),
});

// Экспортируем хук для использования в компонентах
export const { useGetUsersQuery, useGetPostsQuery, useCreatePostMutation } = userApi;