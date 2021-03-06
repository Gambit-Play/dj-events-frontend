import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<p>Copyright &copy; DJ Events {year}</p>
			<p>
				<Link href='/about'>About This Project</Link>
			</p>
		</footer>
	);
};
