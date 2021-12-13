import Link from 'next/link';
import { BiChevronLeft } from 'react-icons/bi';
import style from './Buttons.module.css';

export const BackButton = ({ location, back = () => {} }) => {
	if (location) {
		return (
			<Link href={location}>
				<a className={style.back}>
					<BiChevronLeft /> Go Back
				</a>
			</Link>
		);
	}
	if (!location) {
		return (
			<a className={style.back} onClick={back}>
				<BiChevronLeft /> Go Back
			</a>
		);
	}
};
