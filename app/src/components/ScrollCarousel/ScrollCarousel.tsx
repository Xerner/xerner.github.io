import { Button, makeStyles, Theme } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { clamp } from 'functions/clamp';
import React, { useEffect, useState, CSSProperties, useMemo } from 'react';

interface ICarousel {
	children: JSX.Element[] | JSX.Element;
}

const useStyles = makeStyles((theme: Theme) => ({
	button: { width: '100%', color: '#FFFFFF' }
}));

// TODO: JSDocs
export default function ScrollCarousel(props: ICarousel) {
	const { children } = props;
	const [activeIndex, setActiveIndex] = useState(0);
	const classes = useStyles();
	const scrollRef = React.createRef<HTMLDivElement>();
	const widthRef = React.createRef<HTMLDivElement>();
	const itemPositions: number[] = useMemo(() => [], []);
	// const isSmallScreen = React.useRef<boolean>();
	// const _cardWidth = React.useRef<number>(0);

	useEffect(() => {
		if (widthRef.current === null) return console.error('bruh whut');
		// else console.log(widthRef.current.clientWidth);
		// if (typeof cardWidth === 'string') {
		// 	_cardWidth.current =
		// 		widthRef.current.scrollWidth * stringToPercentage(cardWidth) - spacing * 2;
		// 	isSmallScreen.current = false;
		// } else {
		// 	const maxWidth = widthRef.current.clientWidth - spacing * 2;
		// 	_cardWidth.current = cardWidth;
		// 	isSmallScreen.current = maxWidth < _cardWidth.current;
		// 	//console.log(maxWidth);
		// 	_cardWidth.current = isSmallScreen.current ? maxWidth : cardWidth;
		// }

		for (let i = 0; i < React.Children.count(children); i++) {
			itemPositions.push(i);
			// itemPositions.push(i * _cardWidth.current);
		}
	}, [children, itemPositions, widthRef]);

	const scrollToIndex = (index: number) => {
		if (index !== activeIndex && scrollRef.current !== null) {
			scrollRef.current.scroll({
				left: itemPositions[index],
				behavior: 'smooth'
			});
		}
	};

	const handleNav = (index?: number) => {
		if (index !== undefined) {
			setActiveIndex(index);
			scrollToIndex(index);
		} else {
			var nextIndex = clamp(activeIndex - 1, 0, React.Children.count(children) - 1);
			setActiveIndex(nextIndex);
			scrollToIndex(nextIndex);
		}
	};

	// const handleNav = (index?: number) => {
	// 	if (index !== undefined) {
	// 		setActiveIndex(index);
	// 		scroll(index);
	// 	} else {
	// 		var nextIndex = clamp(activeIndex - 1, 0, React.Children.count(children) - 1);
	// 		setActiveIndex(nextIndex);
	// 		scroll(nextIndex);
	// 	}
	// };

	const handleNavBackwards = () => {
		if (scrollRef.current !== null && widthRef.current !== null) {
			scrollRef.current.scroll({
				left: clamp(scrollRef.current.scrollLeft - widthRef.current.clientWidth, 0, scrollRef.current.scrollWidth),
				behavior: 'smooth'
			});
		}
	};

	const handleNavForwards = () => {
		if (scrollRef.current !== null && widthRef.current !== null) {
			scrollRef.current.scroll({
				left: clamp(scrollRef.current.scrollLeft + widthRef.current.clientWidth, 0, scrollRef.current.scrollWidth),
				behavior: 'smooth'
			});
		}
	};

	// const handleNavBackwards = () => {
	// 	var nextIndex = clamp(activeIndex - 1, 0, React.Children.count(children) - 1);
	// 	setActiveIndex(nextIndex);
	// 	scroll(nextIndex);
	// };

	// const handleNavForwards = () => {
	// 	var nextIndex = clamp(activeIndex + 1, 0, React.Children.count(children) - 1);
	// 	setActiveIndex(nextIndex);
	// 	scroll(nextIndex);
	// };

	return (
		<div id="scroll-carousel" className="scroll-carousel" ref={widthRef}>
			<div
				id="scroll-carousel-top"
				ref={scrollRef}
				// style={{
				// 	overflow: 'hidden'
				// }}
			>
				{/* Carousel Items */}
				<div id="scroll-carousel-items" className="scroll-carousel-items">
					{/* {isSmallScreen.current ? null : (
						<CarouselMargin cardWidth={_cardWidth.current} spacing={spacing} />
					)} */}
					{React.Children.map(children, (child: JSX.Element, index: number) => {
						return (
							<CarouselItem index={index} activeIndex={activeIndex}>
								{child}
							</CarouselItem>
						);
					})}
					{/* {isSmallScreen.current ? null : (
						<CarouselMargin cardWidth={_cardWidth.current} spacing={spacing} />
					)} */}
				</div>
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
				<div className='scroll-carousel-buttons'>
					<div className='scroll-carousel-button-wrapper'>
						<Button className={classes.button} onClick={handleNavBackwards}>
							<ChevronLeft />
						</Button>{' '}
					</div>
					<div className='scroll-carousel-button-wrapper'>
						<Button className={classes.button} onClick={handleNavForwards}>
							<ChevronRight />
						</Button>{' '}
					</div>
				</div>
			</div>
		</div>
	);
}

// interface ICarouselMargin {
// 	cardWidth: number;
// 	spacing: number;
// }

// function CarouselMargin({ cardWidth, spacing }: ICarouselMargin) {
// 	var width: number = window.innerWidth / 2 - cardWidth / 2 - spacing;
// 	return (
// 		<div
// 			style={{
// 				maxWidth: width, // - spacing / 2,
// 				minWidth: width, // - spacing / 2,
// 				height: 10 // just so its selectable with dev tools
// 			}}
// 		/>
// 	);
// }

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

// function stringToPercentage(percentage: string) {
// 	return parseFloat(percentage.substring(0, percentage.length - 1)) / 100;
// }
