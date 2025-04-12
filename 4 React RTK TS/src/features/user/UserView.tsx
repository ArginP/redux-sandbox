// import { useEffect } from "react"
// import { useSelector, useDispatch } from 'react-redux'
// import { useAppSelector, useAppDispatch } from "../../app/hooks.ts";
// import { fetchUsers } from "./userSlice.ts";
import { useState } from "react";
import { useGetUsersQuery, useGetPostsQuery, useCreatePostMutation } from './userApi'; // Импортируем хук из userApi

export const UserView = () => {
    // const users = useAppSelector((state) => state.user)
    // const dispatch = useAppDispatch()
    // useEffect(() => {
    //     dispatch(fetchUsers())
    // }, [])

    const [isShown, setIsShown] = useState(false);
    const [numOfPosts, setNumOfPosts] = useState(5);
    const [numOffset, setNumOffset] = useState(1);

    const { data: users, isLoading, isError, error } = useGetUsersQuery(); // Вызываем хук
    const { data: posts, isLoading: isLoadingPosts, isError: isErrorPosts, error: errorPosts } = useGetPostsQuery({
        limit: numOfPosts,
        start: numOffset - 1,
    }); // Вызываем хук для постов с кастомным запросом
    const [createPostMutation, {isLoading: isCreationPost}] = useCreatePostMutation();
    function handleCreatePost() {
        const newPost = {
            title: "New Post",
            body: "Body text of the post",
        }
        createPostMutation(newPost)
    }

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
                {isError && <div>{'error' in error ? error.error : 'Error: Something went wrong'}</div>}
                {users && users.length > 0 && (
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                )}

                <div className="posts-controls">

                    <label>Number of posts to show:
                    <input
                        type="number"
                        value={numOfPosts}
                        onChange={e => setNumOfPosts(parseInt(e.target.value))}
                    /></label>

                    <label>Show from post number:
                    <input
                        type="number"
                        value={numOffset}
                        min={1}
                        max={100}
                        onChange={e => {
                            setNumOffset(parseInt(e.target.value))
                        }}
                    /></label>

                    <div className="buttons-container">
                        {/*<button onClick={() => useGetPostsQuery({*/}
                        {/*    limit: numOfPosts,*/}
                        {/*    offset: numOffset,*/}
                        {/*})}>*/}
                        {/*    Refresh posts*/}
                        {/*</button>*/}

                        <button onClick={() => setIsShown(!isShown)}>
                            {isShown ? "Hide posts" : "Show posts"}
                        </button>

                        <button onClick={handleCreatePost}>
                            {isCreationPost ? "Creating..." : "Create post"}
                        </button>
                    </div>

                </div>

                {isShown &&
                    <>
                        <h2>List of posts:</h2>
                        {isLoadingPosts && <div>Loading...</div>}
                        {isErrorPosts && <div>{'error' in errorPosts ? errorPosts.error : 'Error: Something went wrong'}</div>}
                        {posts && posts.length > 0 && (
                            <ul>
                                {posts.map((post) => (
                                    <div className={"post"}>
                                        <h2 key={post.id}>{post.id}. {post.title}</h2>
                                        <p>{post.body}</p>
                                    </div>
                                ))}
                            </ul>
                        )}
                    </>}

            </div>
        </>
    )
}
