import { useEffect } from "react"
// import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from "../../app/hooks.ts";
import { fetchUsers } from "./userSlice.ts";

export const UserView = () => {
    const users = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <>
            <div>
                <h2>List of users:</h2>
                {users.loading && <div>Loading...</div>}
                {!users.loading && !!users.error && <div>Error: {users.error}</div>}
                {!users.loading && !users.error && !!users.users.length &&
                    <ul>{users.users.map((user) => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                ))}</ul>}
            </div>
        </>
    )
}
