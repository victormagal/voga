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
			<div className='col-span-1 lg:flex hidden items-center justify-start'>
				<Button direction='prev' moveSlide={prevSlide} />
			</div>
			<div className='lg:col-span-10 col-span-4 lg:h-48 h-64 relative'>
				<div className='h-full relative w-full'>
					{dataSlider.map((obj, index) => {
						return (
							<div key={obj.id} className={slideIndex === index + 1 ? 'absolute duration-1000 opacity-100 transition-opacity' : 'absolute duration-1000 opacity-0 transition-opacity'}>
								<p className='lg:text-3xl text-xl text-center text-dark-gray'>{obj.comment}</p>
								<p className='font-bold mt-8 lg:text-2xl text-base text-center text-white'>{obj.author}</p>
							</div>
						);
					})}
				</div>
        <div className='flex space-x-20 justify-center lg:hidden relative'>
          <Button direction='prev' moveSlide={prevSlide} />
          <Button direction='next' moveSlide={nextSlide} />
        </div>
			</div>
			<div className='col-span-1 lg:flex hidden items-center justify-end'>
				<Button direction='next' moveSlide={nextSlide} />
			</div>
		</>

	);
}
