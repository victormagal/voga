import { useState } from 'react';
import { dataSlider } from './data';
import Button from './button';

export default function Slider() {
	const [slideIndex, setSlideIndex] = useState(1);

	const nextSlide = () => {
		slideIndex !== dataSlider.length ? setSlideIndex(slideIndex + 1) : setSlideIndex(1);
	};

	const prevSlide = () => {
		slideIndex !== 1 ? setSlideIndex(slideIndex - 1) : setSlideIndex(dataSlider.length);
	};

	return (
		<>
			<div className='col-span-1 flex items-center justify-start'>
				<Button direction='prev' moveSlide={prevSlide} />
			</div>
			<div className='col-span-10 h-48 overflow-hidden relative'>
				<div>
					{dataSlider.map((obj, index) => {
						return (
							<div key={obj.id} className={slideIndex === index + 1 ? 'absolute duration-1000 h-full opacity-100 transition-opacity w-full' : 'absolute duration-1000 h-full opacity-0 transition-opacity w-full'}>
								<p className='text-3xl text-center text-dark-gray'>{obj.comment}</p>
								<p className='font-bold mt-8 text-2xl text-center text-white'>{obj.author}</p>
							</div>
						);
					})}
				</div>
			</div>
			<div className='col-span-1 flex items-center justify-end'>
				<Button direction='next' moveSlide={nextSlide} />
			</div>
		</>

	);
}
