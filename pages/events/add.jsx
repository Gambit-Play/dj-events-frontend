import { toast } from 'react-toastify';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout/Layout';
import { BackButton } from '@/components/Buttons/BackButton';
import { API_URL, toastConfig } from '@/config/index';
import { EventForm } from '@/components/Forms/EventForm';
import 'react-toastify/dist/ReactToastify.css';

export default function AddEventPage() {
	const seo = {
		title: 'Add New Events',
		// description: '',
		// keywords: '',
	};

	const [form, setForm] = useState({
		name: '',
		venue: '',
		performers: '',
		address: '',
		date: '',
		time: '',
		description: '',
	});
	const { push } = useRouter();
	const handleSubmit = async event => {
		event.preventDefault();
		const isFormEmpty = Object.values(form).some(value => value === '');

		if (isFormEmpty) {
			return toast.error('Please fill in all fields!', toastConfig);
		}

		const response = await fetch(`${API_URL}/events`, {
			method: 'POST',
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

	return (
		<Layout {...seo}>
			<BackButton location='/events' />
			<h1>Add New Event</h1>
			<EventForm
				form={form}
				buttonLabel='Add Event'
				handleSubmit={handleSubmit}
				handleInputChange={handleInputChange}
			/>
		</Layout>
	);
}
