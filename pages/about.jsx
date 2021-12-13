import Link from 'next/link';
import Layout from '@/components/Layout/Layout';

export default function AboutPage() {
	const seo = {
		title: 'About | DJ Events',
		// description: '',
		// keywords: '',
	};

	return (
		<Layout {...seo}>
			<h1>About</h1>
			<p>This is an app to find the latest DJ and other musical events</p>
			<p>Version 1.0.0</p>
		</Layout>
	);
}
