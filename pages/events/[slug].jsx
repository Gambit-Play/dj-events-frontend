import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { API_URL } from '@/config/index';
import Layout from '@/components/Layout/Layout';
import { BiPencil, BiX, BiChevronLeft } from 'react-icons/bi';
import style from './Event.module.css';
import { formatDate } from 'utils/date';
import { BackButton } from '@/components/Buttons/BackButton';
import 'react-toastify/dist/ReactToastify.css';

export default function EventPage({ evt }) {
	const { push } = useRouter();
	const deleteEvent = async event => {
		event.preventDefault();
		if (confirm('Are you sure?')) {
			const response = await fetch(`${API_URL}/events/${evt.id}`, {
				method: 'DELETE',
			});
			const data = await response.json();

			if (!response.ok) {
				toast.error(data.message);
			} else {
				push('/events');
			}
		}
	};

	return (
		<Layout>
			<div className={style.event}>
				<div className={style.controls}>
					<Link href={`/events/edit/${evt.id}`}>
						<a className={style.edit}>
							<BiPencil /> Edit Event
						</a>
					</Link>
					<a className={style.delete} onClick={deleteEvent}>
						<BiX /> Delete Event
					</a>
				</div>
				<span>
					{formatDate(evt.date)} @ {evt.time}
				</span>
				<h1>{evt.name}</h1>
				{evt.image && (
					<div className={style.image}>
						<Image
							alt=''
							src={evt.image.formats.medium.url}
							width={960}
							height={600}
						/>
					</div>
				)}
				<h3>Performers:</h3>
				<p>{evt.performers}</p>
				<h3>Description:</h3>
				<p>{evt.description}</p>
				<h3>Venue: {evt.venue}</h3>
				<p>{evt.address}</p>
				<BackButton location='/events' />
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ query: { slug }, params }) {
	const res = await fetch(`${API_URL}/events?slug=${slug}`);
	const evt = await res.json();

	return {
		props: { evt: evt[0] },
	};
}
