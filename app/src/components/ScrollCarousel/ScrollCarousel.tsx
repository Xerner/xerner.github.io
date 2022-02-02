import { Button } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { clamp } from 'functions/clamp';
import React, { useState, CSSProperties } from 'react';

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
				{/* Carousel Index */}
				<div id="scroll-carousel-numbers" className="scroll-carousel-numbers">
					{React.Children.map(children, (item, index) => (
						<div
							className="scroll-carousel-number"
							onClick={() => handleNav(index)}
							style={{ opacity: activeIndex === index ? 1 : 0.25 }}
						>
							<span className="scroll-carousel-number-span">{index + 1}</span>
						</div>
					))}
				</div>

				{/* Buttons */}
				<div className="scroll-carousel-buttons">
					<div className="scroll-carousel-button-wrapper">
						<Button className="scroll-carousel-button" onClick={handleNavBackwards}>
							<ChevronLeft />
						</Button>{' '}
					</div>
					<div className="scroll-carousel-button-wrapper">
						<Button className="scroll-carousel-button" onClick={handleNavForwards}>
							<ChevronRight />
						</Button>{' '}
					</div>
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
