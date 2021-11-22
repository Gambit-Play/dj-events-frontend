import { useRouter } from 'next/router';
import Layout from '../../components/Layout/Layout';

export default function EventPage() {
	const router = useRouter();

	return (
		<Layout>
			Single event page
			<h2>{router.query.slug}</h2>
			<button onClick={router.back}>BACK</button>
		</Layout>
	);
}
