import axios from 'axios';
import { useEffect, useState } from 'react';

const instance = axios.create({
	baseURL: `http://jsonplaceholder.typicode.com`,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const UseFetch = () => {
	const [posts, setPosts] = useState([]);
	const [users, setUsers] = useState([]);
	// eslint-disable-next-line
	const [limit, setLimit] = useState(20);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchPosts = async () => {
			setIsError(false);
			setIsLoading(true);
			try {
				const { data } = await instance.get(`/posts`, {
					params: {
						_limit: limit,
					},
				});
				setPosts(data);
			} catch (e) {
				setIsError(true);
			}
			setIsLoading(false);
		};

		fetchPosts();

		const fetchUsers = async () => {
			setIsError(false);
			setIsLoading(true);
			try {
				const { data } = await instance.get(`/users`, {
					params: {
						_limit: limit,
					},
				});
				setUsers(data);
			} catch (e) {
				setIsError(true);
			}
			setIsLoading(false);
		};

		fetchUsers();
	}, [limit]);

	return { posts, users, isError, isLoading };
};
