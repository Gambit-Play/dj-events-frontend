import Link from 'next/link';
import { Search } from '../Search/Search';
import styles from './Header.module.css';

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Link href='/'>
					<a>DJ Events</a>
				</Link>
			</div>
			<Search />
			<nav>
				<ul>
					<li>
						<Link href='/events'>Events</Link>
					</li>
					<li>
						<Link href='/events/add'>Add Event</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
