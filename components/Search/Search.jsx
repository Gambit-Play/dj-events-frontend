import { useState } from 'react';
import { useRouter } from 'next/router';
import style from './Search.module.css';

export const Search = () => {
	const [term, setTerm] = useState('');
	const { push } = useRouter();
	const handleSubmit = event => {
		event.preventDefault();
		push(`/events/search?term=${term}`);
	};

	return (
		<div className={style.search}>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={term}
					onChange={event => setTerm(event.target.value)}
					placeholder='Search Events '
				/>
			</form>
		</div>
	);
};
