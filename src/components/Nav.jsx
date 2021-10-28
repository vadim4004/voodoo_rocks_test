import React from 'react';
import { Form, Image } from 'react-bootstrap';
import searchLogo from '../assets/img/search.svg';

export const Nav = ({ search, setSearch }) => {
	const handleChange = (event) => {
		setSearch(event.target.value);
	};
	return (
		<Form
			onSubmit={(e) => e.preventDefault}
			className='mt-5 mb-4 d-flex justify-content-center'
		>
			<Form.Group className='form-input' controlId='name'>
				<Form.Label>
					<Image
						src={searchLogo}
						alt='search logo'
						height='25'
						className='pt-2 img'
					/>
				</Form.Label>
				<Form.Control
					type='text'
					placeholder='Filter by author'
					value={search}
					onChange={handleChange}
					className='input'
				/>
			</Form.Group>
		</Form>
	);
};
