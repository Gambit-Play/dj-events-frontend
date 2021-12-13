import { useState } from 'react';
import { API_URL } from '@/config/index';
import style from '@/components/Forms/EventForm.module.css';

export default function ImageUpload({ evtId, imageUploaded }) {
	const [image, setImage] = useState(null);

	const handleSubmit = async event => {
		event.preventDefault();

		console.log('Submit Button');

		const formData = new FormData();
		formData.append('files', image);
		formData.append('ref', 'events');
		formData.append('refId', evtId);
		formData.append('field', 'image');

		const response = await fetch(`${API_URL}/upload`, {
			method: 'POST',
			body: formData,
		});

		if (response.ok) {
			imageUploaded();
		}
	};
	const handleFileChange = event => {
		setImage(event.target.files[0]);
	};

	return (
		<div className={style.form}>
			<h1></h1>
			<form onSubmit={handleSubmit}>
				<div className={style.file}>
					<input type='file' onChange={handleFileChange} />
				</div>
				<input type='submit' value='Upload' className='btn' />
			</form>
		</div>
	);
}
