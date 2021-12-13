import { formatDate } from '@/utils/date';
import style from './EventForm.module.css';

export const EventForm = ({
	form,
	buttonLabel,
	handleSubmit,
	handleInputChange,
}) => {
	return (
		<form onSubmit={handleSubmit} className={style.form}>
			<div className={style.grid}>
				<div>
					<label htmlFor='name'>Event Name:</label>
					<input
						type='text'
						id='name'
						name='name'
						value={form.name}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='performers'>Performers:</label>
					<input
						type='text'
						id='performers'
						name='performers'
						value={form.performers}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='venue'>Venue:</label>
					<input
						type='text'
						id='venue'
						name='venue'
						value={form.venue}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='address'>Address:</label>
					<input
						type='text'
						id='address'
						name='address'
						value={form.address}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='date'>Date:</label>
					<input
						type='date'
						id='date'
						name='date'
						value={formatDate(form.date, 'yyyy-LL-dd')}
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor='time'>Time:</label>
					<input
						type='text'
						id='time'
						name='time'
						value={form.time}
						onChange={handleInputChange}
					/>
				</div>
			</div>
			<div>
				<div>
					<label htmlFor='description'>Description:</label>
					<textarea
						type='text'
						id='description'
						name='description'
						value={form.description}
						onChange={handleInputChange}
					/>
				</div>
			</div>
			<input type='submit' value={buttonLabel} className='btn' />
		</form>
	);
};
