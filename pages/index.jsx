import Link from 'next/link';
import { EventItem } from '@/components/EventItem/EventItem';
import Layout from '@/components/Layout/Layout';
import { API_URL } from '@/config/index';
import { Fragment } from 'react';

export default function HomePage({ events }) {
	const hasEvents = events.length > 0;

	return (
		<Layout>
			<h1>Upcoming Events</h1>
			{!hasEvents ? (
				<h3>No events to show</h3>
			) : (
				<Fragment>
					{events.map(evt => (
						<EventItem key={evt.id} evt={evt} />
					))}
					<Link href='/events'>
						<a className='btn-secondary'>View All Events</a>
					</Link>
				</Fragment>
			)}
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/events/?_sort=date:ASC&_limit=3`);
	const events = await res.json();

	return {
		props: { events },
		revalidate: 5,
	};
}
