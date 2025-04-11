// import { useEffect } from "react"
// import { useSelector, useDispatch } from 'react-redux'
// import { useAppSelector, useAppDispatch } from "../../app/hooks.ts";
// import { fetchUsers } from "./userSlice.ts";
import { useGetUsersQuery } from './userApi'; // Импортируем хук из userApi

export const UserView = () => {
    // const users = useAppSelector((state) => state.user)
    // const dispatch = useAppDispatch()
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])

    const { data: users, isLoading, error } = useGetUsersQuery(); // Вызываем хук

    return (
        <>
            <div>
                {/*<h2>List of users:</h2>*/}
                {/*{users.loading && <div>Loading...</div>}*/}
                {/*{!users.loading && !!users.error && <div>Error: {users.error}</div>}*/}
                {/*{!users.loading && !users.error && !!users.users.length &&*/}
                {/*    <ul>{users.users.map((user) => (*/}
                {/*        <li key={user.id}>*/}
                {/*            {user.name}*/}
                {/*        </li>*/}
                {/*))}</ul>}*/}

                <h2>List of users:</h2>
                {isLoading && <div>Loading...</div>}
                {error && <div>{'error' in error ? error.error : 'Error: Something went wrong'}</div>}
                {users && users.length > 0 && (
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}
