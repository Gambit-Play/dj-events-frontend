import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from 'utils/date';
import style from './EventItem.module.css';

export const EventItem = ({ evt }) => {
	return (
		<div className={style.event}>
			<div className={style.img}>
				<Image
					src={
						evt.image?.formats.thumbnail.url ||
						'/images/event-default.png'
					}
					alt=''
					height={100}
					width={170}
				/>
			</div>
			<div className={style.info}>
				<span>
					{formatDate(evt.date)} @ {evt.time}
				</span>
				<h3>{evt.name}</h3>
			</div>
			<div className={style.link}>
				<Link href={`/events/${evt.slug}`}>
					<a className='btn'>Details</a>
				</Link>
			</div>
		</div>
	);
};
