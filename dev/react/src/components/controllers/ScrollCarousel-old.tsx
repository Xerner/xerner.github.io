import { Button, makeStyles, Theme } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { clamp } from 'library/clamp';
import React, { useEffect, useState, CSSProperties, useMemo } from 'react';

interface ICarousel {
	cardWidth: number | string;
	spacing: number;
	style?: CSSProperties;
	numberStyle?: CSSProperties;
	itemStyle?: CSSProperties;
	children: JSX.Element[] | JSX.Element;
}

const useStyles = makeStyles((theme: Theme) => ({
	button: { width: '100%', color: '#FFFFFF' },
	carousel: {
		maxHeight: window.innerHeight * 0.6,
		overflow: 'visible',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start'
	}
}));

// TODO: JSDocs
export default function ScrollCarousel(props: ICarousel) {
	const { cardWidth, spacing, style, numberStyle, itemStyle, children } = props;
	const [activeIndex, setActiveIndex] = useState(0);
	const classes = useStyles();
	const scrollRef = React.createRef<HTMLDivElement>();
	const widthRef = React.createRef<HTMLDivElement>();
	const itemPositions: number[] = useMemo(() => [], []);
	const isSmallScreen = React.useRef<boolean>();
	const _cardWidth = React.useRef<number>(0);

	useEffect(() => {
		if (widthRef.current === null) return console.error('bruh whut');
		// else console.log(widthRef.current.clientWidth);
		if (typeof cardWidth === 'string') {
			_cardWidth.current =
				widthRef.current.scrollWidth * stringToPercentage(cardWidth) - spacing * 2;
			isSmallScreen.current = false;
		} else {
			const maxWidth = widthRef.current.clientWidth - spacing * 2;
			_cardWidth.current = cardWidth;
			isSmallScreen.current = maxWidth < _cardWidth.current;
			//console.log(maxWidth);
			_cardWidth.current = isSmallScreen.current ? maxWidth : cardWidth;
		}

		for (let i = 0; i < React.Children.count(children); i++) {
			itemPositions.push(i * _cardWidth.current);
		}
	}, [cardWidth, children, itemPositions, spacing, widthRef]);

	const handleNav = (index?: number) => {
		if (index !== undefined) {
			setActiveIndex(index);
			scroll(index);
		} else {
			var nextIndex = clamp(activeIndex - 1, 0, React.Children.count(children) - 1);
			setActiveIndex(nextIndex);
			scroll(nextIndex);
		}
	};

	const handleNavBackwards = () => {
		var nextIndex = clamp(activeIndex - 1, 0, React.Children.count(children) - 1);
		setActiveIndex(nextIndex);
		scroll(nextIndex);
	};

	const handleNavForwards = () => {
		var nextIndex = clamp(activeIndex + 1, 0, React.Children.count(children) - 1);
		setActiveIndex(nextIndex);
		scroll(nextIndex);
	};

	const scroll = (index: number) => {
		if (index !== activeIndex && scrollRef.current !== null) {
			scrollRef.current.scroll({
				left: itemPositions[index],
				behavior: 'smooth'
			});
		}
	};

	return (
		<div style={style} ref={widthRef}>
			<div
				ref={scrollRef}
				style={{
					overflow: 'hidden'
				}}
			>
				{/* Carousel Items */}
				<div className={classes.carousel}>
					{isSmallScreen.current ? null : (
						<CarouselMargin cardWidth={_cardWidth.current} spacing={spacing} />
					)}
					{React.Children.map(children, (child: JSX.Element, index: number) => {
						return (
							<CarouselItem
								index={index}
								activeIndex={activeIndex}
								spacing={spacing}
								width={_cardWidth.current}
								itemStyle={itemStyle}
							>
								{child}
							</CarouselItem>
						);
					})}
					{isSmallScreen.current ? null : (
						<CarouselMargin cardWidth={_cardWidth.current} spacing={spacing} />
					)}
				</div>
			</div>
			<div style={{ margin: 'auto', width: _cardWidth.current }}>
				{/* Carousel Index */}
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						fontSize: '1.25rem',
						margin: 'auto'
					}}
				>
					{React.Children.map(children, (item, index) => (
						<div
							onClick={() => handleNav(index)}
							style={{
								marginRight: 12,
								padding: '12px 0',
								opacity: activeIndex === index ? 1 : 0.25,
								cursor: 'pointer',
								...numberStyle
							}}
						>
							<span
								style={{
									backgroundColor: '#00000044',
									padding: 5,
									borderRadius: '25%',
									color: "#CCCCCC"
								}}
							>
								{index + 1}
							</span>
						</div>
					))}
				</div>

				{/* Buttons */}
				<div style={{ display: 'flex' }}>
					<div style={{ backgroundColor: '#00000044', width: '50%' }}>
						<Button className={classes.button} onClick={handleNavBackwards}>
							<ChevronLeft />
						</Button>{' '}
					</div>
					<div style={{ backgroundColor: '#00000044', width: '50%' }}>
						<Button className={classes.button} onClick={handleNavForwards}>
							<ChevronRight />
						</Button>{' '}
					</div>
				</div>
			</div>
		</div>
	);
}

interface ICarouselMargin {
	cardWidth: number;
	spacing: number;
}

function CarouselMargin({ cardWidth, spacing }: ICarouselMargin) {
	var width: number = window.innerWidth / 2 - cardWidth / 2 - spacing;
	return (
		<div
			style={{
				maxWidth: width, // - spacing / 2,
				minWidth: width, // - spacing / 2,
				height: 10 // just so its selectable with dev tools
			}}
		/>
	);
}

interface ICarouselItem {
	index: number;
	activeIndex: number;
	spacing: number;
	width: number | string;
	itemStyle?: CSSProperties;
	children: JSX.Element[] | JSX.Element;
}

function CarouselItem({ index, activeIndex, spacing, width, itemStyle, children }: ICarouselItem) {
	var delta = 0;
	if (index !== activeIndex) {
		var absoluteDiff = Math.abs(clamp(activeIndex - index, -3, 3));
		delta = absoluteDiff / 3 + 0.3;
	}
	return (
		<div
			style={{
				opacity: 1 - delta,
				paddingLeft: spacing,
				paddingRight: spacing,
				minWidth: width,
				maxWidth: width,
				transition: 'opacity 1s, transform 1s'
			}}
		>
			{itemStyle !== undefined ? <div style={itemStyle}>{children}</div> : children}
		</div>
	);
}

function stringToPercentage(percentage: string) {
	return parseFloat(percentage.substring(0, percentage.length - 1)) / 100;
}
