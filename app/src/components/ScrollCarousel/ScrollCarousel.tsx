import { clamp } from 'functions/clamp';
import React, { useState, CSSProperties } from 'react';
import blur from '../../functions/blur';

interface ICarousel {
	children: JSX.Element[] | JSX.Element;
}

/**
 * TODO
 * @param props
 * @returns
 */
export default function ScrollCarousel(props: ICarousel) {
	const { children } = props;
	const [activeIndex, setActiveIndex] = useState(0);
	const scrollRef = React.createRef<HTMLDivElement>();

	const scrollToIndex = (index: number) => {
		if (scrollRef.current !== null) {
			scrollRef.current.scroll({
				left: scrollRef.current.clientWidth * index,
				behavior: 'smooth'
			});
		}
	};

	const handleNav = (index: number) => {
		setActiveIndex(index);
		scrollToIndex(index);
	};

	const handleNavBackwards = () => {
		if (scrollRef.current !== null) {
			var nextIndex = clamp(activeIndex - 1, 0, React.Children.count(children) - 1);
			setActiveIndex(nextIndex);
			scrollToIndex(nextIndex);
		}
	};

	const handleNavForwards = () => {
		if (scrollRef.current !== null) {
			var nextIndex = clamp(activeIndex + 1, 0, React.Children.count(children) - 1);
			setActiveIndex(nextIndex);
			scrollToIndex(nextIndex);
		}
	};

	return (
		<div id="scroll-carousel" className="scroll-carousel">
			{/* Carousel Index */}
			<div id="scroll-carousel-numbers" className="scroll-carousel-numbers">
				{React.Children.map(children, (item, index) => (
					<button
						className="button button-green scroll-carousel-number pixel-font"
						onClick={(e) => {
							handleNav(index);
							blur();
						}}
						style={{ opacity: activeIndex === index ? 1 : 0.25, fontSize: '1.75rem' }}
					>
						{index + 1}
					</button>
				))}
			</div>

			{/* Carousel Items */}
			<div ref={scrollRef} id="scroll-carousel-items" className="scroll-carousel-items">
				{React.Children.map(children, (child: JSX.Element, index: number) => {
					return (
						<CarouselItem index={index} activeIndex={activeIndex}>
							{child}
						</CarouselItem>
					);
				})}
			</div>

			<div id="scroll-carousel-bottom">
				{/* Buttons */}
				<div className="scroll-carousel-buttons">
					<button
						className="pixel-font button button-green scroll-carousel-button"
						onClick={(e) => {
							handleNavBackwards();
							blur();
						}}
						style={{ fontSize: '2rem', padding: 6 }}
					>
						⇦{/* <ChevronLeft style={{ textShadow: '3px 3px black' }} /> */}
					</button>{' '}
					<button
						className="pixel-font button button-green scroll-carousel-button"
						onClick={(e) => {
							handleNavForwards();
							blur();
						}}
						style={{ fontSize: '2rem' }}
					>
						⇨{/* <ChevronRight /> */}
					</button>{' '}
				</div>
			</div>
		</div>
	);
}

interface ICarouselItem {
	index: number;
	activeIndex: number;
	itemStyle?: CSSProperties;
	children: JSX.Element[] | JSX.Element;
}

function CarouselItem({ index, activeIndex, itemStyle, children }: ICarouselItem) {
	var delta = 0;
	if (index !== activeIndex) {
		var absoluteDiff = Math.abs(clamp(activeIndex - index, -3, 3));
		delta = absoluteDiff / 3 + 0.3;
	}
	return (
		<div className="scroll-carousel-item" style={{ opacity: 1 - delta }}>
			{itemStyle !== undefined ? <div style={itemStyle}>{children}</div> : children}
		</div>
	);
}
