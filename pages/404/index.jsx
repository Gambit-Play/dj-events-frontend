import Link from 'next/Link';
import { useRouter } from 'next/router';
import { BiErrorAlt } from 'react-icons/bi';
import Layout from '@/components/Layout/Layout';
import style from './404.module.css';

export default function NotFoundPage() {
	const { back } = useRouter();

	return (
		<Layout title='Page Not Found'>
			<div className={style.error}>
				<BiErrorAlt size={100} color='red' />
				<h1>404</h1>
				<h4>Sorry, there is nothing here</h4>
				<a onClick={back}>Go Back</a>
			</div>
		</Layout>
	);
}
