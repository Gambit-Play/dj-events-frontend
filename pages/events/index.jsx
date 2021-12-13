import Link from 'next/link';
import { EventItem } from '@/components/EventItem/EventItem';
import Layout from '@/components/Layout/Layout';
import { API_URL, PER_PAGE } from '@/config/index';
import Pagination from '@/components/Pagination/Pagination';

export default function EventsPage({ events, page, total }) {
	const seo = {
		title: 'Events',
		// description: '',
		// keywords: '',
	};
	const hasEvents = events.length > 0;

	return (
		<Layout {...seo}>
			<h1>Upcoming Events</h1>
			{!hasEvents ? (
				<h3>No events to show</h3>
			) : (
				events.map(evt => <EventItem key={evt.id} evt={evt} />)
			)}
			<Pagination page={page} total={total} />
		</Layout>
	);
}

export async function getServerSideProps({ query: { page = 1 } }) {
	const numPage = Number(page);
	// Calculate start page
	const start = numPage === 1 ? 0 : (numPage - 1) * PER_PAGE;
	// Fetch total/count
	const totalRes = await fetch(`${API_URL}/events/count`);
	const total = await totalRes.json();
	// Fetch events
	const res = await fetch(
		`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
	);
	const events = await res.json();

	return {
		props: { events, page: numPage, total },
	};
}
