import Head from 'next/Head';
import { useRouter } from 'next/router';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Showcase from '../Showcase/Showcase';
import style from './Layout.module.css';

export default function Layout({ children, title, description, keywords }) {
	const { pathname } = useRouter();
	const isRootPath = pathname === '/';

	return (
		<main>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>
			<Header />
			{isRootPath && <Showcase />}
			<div className={style.container}>{children}</div>
			<Footer />
		</main>
	);
}

Layout.defaultProps = {
	title: 'DJ Events | Find the hottest parties',
	description: 'Find the latest DJ and other musical events',
	keywords: 'music, dj, edm, events',
};
