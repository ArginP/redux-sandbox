import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from "./userSlice.js";

export const UserView = () => {
    const users = useSelector((state) => state.user)
    const dispatch = useDispatch()
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
