import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default function Button({ direction, moveSlide }) {
	return (
		<button onClick={moveSlide}>
			{direction === 'next' ? <FontAwesomeIcon className='h-10 w-10' icon={faCaretRight} /> : <FontAwesomeIcon className='h-10 w-10' icon={faCaretLeft} />}
		</button>
	);
};
