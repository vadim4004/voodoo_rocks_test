import React from 'react';
import { Card } from 'react-bootstrap';

export const Post = ({ post }) => {
	return (
		<Card className='mt-3 shadow-sm'>
			<Card.Title className='pt-2 px-3 title'>
				{post.title.charAt(0).toUpperCase() + post.title.slice(1)}
			</Card.Title>
			<Card.Body className='px-3'>
				{post.body.charAt(0).toUpperCase() + post.body.slice(1)}
				<footer className='mt-4' style={{ color: 'grey' }}>
					{post.name}
				</footer>
			</Card.Body>
		</Card>
	);
};
