import { toast } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { BiImage } from 'react-icons/bi';
import Layout from '@/components/Layout/Layout';
import { BackButton } from '../../../components/Buttons/BackButton';
import { API_URL, toastConfig } from '@/config/index';
import { EventForm } from '@/components/Forms/EventForm';
import 'react-toastify/dist/ReactToastify.css';
import { Modal } from '@/components/Modals/Modal';
import ImageUpload from '@/components/ImageUpload/ImageUpload';

export default function AddEventPage({ evt }) {
	const seo = {
		title: 'Add New Events',
		// description: '',
		// keywords: '',
	};

	const [form, setForm] = useState(evt);
	const [showModal, setShowModal] = useState(false);
	const [imagePreview, setImagePreview] = useState(
		evt.image?.formats.thumbnail.url ?? null
	);
	const { push, back } = useRouter();

	const handleSubmit = async event => {
		event.preventDefault();
		const isFormEmpty = Object.values(form).some(value => value === '');

		if (isFormEmpty) {
			return toast.error('Please fill in all fields!', toastConfig);
		}

		const response = await fetch(`${API_URL}/events/${evt.id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form),
		});

		if (!response.ok) {
			return toast.error('Something went wrong!', toastConfig);
		} else {
			const evt = await response.json();
			push(`/events/${evt.slug}`);
		}
	};
	const handleInputChange = event => {
		const { name, value } = event.target;
		setForm({ ...form, [name]: value });
	};

	const imageUploaded = async () => {
		const response = await fetch(`${API_URL}/events/${evt.id}`);
		const data = await response.json();

		setImagePreview(data.image?.formats.thumbnail.url ?? null);
		setShowModal(false);
	};

	return (
		<Layout {...seo}>
			<BackButton back={back} />
			<h1>Edit Event</h1>
			<EventForm
				form={form}
				buttonLabel='Update Event'
				handleSubmit={handleSubmit}
				handleInputChange={handleInputChange}
			/>
			<h2>Image Preview:</h2>
			{imagePreview ? (
				<Image src={imagePreview} width={170} height={100} alt='' />
			) : (
				<div>
					<p>No Image Uploaded!</p>
				</div>
			)}
			<div>
				<button
					className='btn-secondary with-icon'
					onClick={() => setShowModal(true)}
				>
					<BiImage size={24} /> Upload Image
				</button>
			</div>
			<Modal show={showModal} onClose={() => setShowModal(false)}>
				<ImageUpload evtId={evt.id} imageUploaded={imageUploaded} />
			</Modal>
		</Layout>
	);
}

export async function getServerSideProps({ params: { id }, query }) {
	const response = await fetch(`${API_URL}/events/${id}`);
	const evt = await response.json();

	return {
		props: { evt },
	};
}
