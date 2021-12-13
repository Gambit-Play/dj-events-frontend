import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BiX } from 'react-icons/bi';
import styles from './Modal.module.css';

export const Modal = ({ show, onClose, children, title }) => {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => setIsBrowser(true), []);

	const handleClose = e => {
		e.preventDefault();
		onClose();
	};

	const modalContent = show ? (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<div className={styles.header}>
					<a href='#' onClick={handleClose}>
						<BiX />
					</a>
				</div>
				{title && <div>{title}</div>}
				<div className={styles.body}>{children}</div>
			</div>
		</div>
	) : null;

	if (isBrowser) {
		return ReactDOM.createPortal(
			modalContent,
			document.getElementById('modal-root')
		);
	} else {
		return null;
	}
};

// https://devrecipes.net/modal-component-with-next-js/
