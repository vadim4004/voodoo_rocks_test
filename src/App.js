import { useState } from 'react';
import { UseFetch } from './api/api';
import { Post } from './components/Post';
import { Col, Container, Row } from 'react-bootstrap';
import './App.scss';
import { Nav } from './components/Nav';

function App() {
	const [search, setSearch] = useState('');
	const { posts, users, isError, isLoading } = UseFetch();
	posts.forEach((post, id) => {
		post.name = users[id]?.name;
	});

	const filteredName = !search
		? posts
		: posts.filter((post) =>
				post.name?.toLowerCase().includes(search.toLowerCase())
		  ) || posts;

	return (
		<>
			<Nav search={search} setSearch={setSearch} />
			<Container>
				{isError && <div>Something went wrong...</div>}

				{isLoading ? (
					<div>Loading...</div>
				) : (
					<Row md={3}>
						{filteredName?.map((post) => (
							<Col key={post.id}>
								<Post post={post} />
							</Col>
						))}
					</Row>
				)}
			</Container>
		</>
	);
}

export default App;
