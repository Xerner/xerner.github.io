import { Button, makeStyles, Theme } from '@material-ui/core';
import {
	ArrowDropDown as ArrowDropDownIcon,
	ArrowDropUp as ArrowDropUpIcon
} from '@material-ui/icons';
import { clamp } from 'library/clamp';
import { isMobile } from 'library/isMobile';
import React, { useMemo } from 'react';
import { useState } from 'react';

interface ICarousel {
	cardWidth: number;
	children: JSX.Element[] | JSX.Element;
}

const useStyles = (cardWidth: number, isMobile: boolean) =>
	makeStyles((theme: Theme) => ({
		button: { width: '100%', color: '#FFFFFF' },
		carousel: {
			maxHeight: window.innerHeight * 0.6,
			overflow: 'visible',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			padding: '24px 0 24px 0',
		},
		rowNumber: isMobile
			? {
					width: '1.5rem',
					margin: 'auto',
					textAlign: 'center',
					color: theme.palette.type === 'dark' ? '#e8e8e8CC' : '#FFFFFFFF'
			  }
			: {
					margin: 'auto',
					width: '2.5rem',
					textAlign: 'center',
					color: theme.palette.type === 'dark' ? '#e8e8e8CC' : '#080808CC'
			  }
	}))();

export default function Carousel(props: ICarousel) {
	const { cardWidth, children } = props;
	const [activeIndex, setActiveIndex] = useState(0);
	var spacing = -48
	var cardSpacing = cardWidth - (spacing*2);
	const classes = useStyles(cardSpacing, isMobile());
	const refs: React.RefObject<HTMLDivElement>[] = useMemo(
		() => React.Children.map(children, () => React.createRef<HTMLDivElement>()),
		[children]
	);

	const handleNavBackwards = () => {
		var nextIndex = clamp(activeIndex - 1, 0, React.Children.count(children) - 1);
		setActiveIndex(nextIndex);
		// if (scrollRef.current !== null) {
		// 	scrollRef.current.scroll({
		// 		left: scrollRef.current.scrollLeft - cardWidth,
		// 		behavior: 'smooth'
		// 	});
		// }
	};

	const handleNavForwards = () => {
		var nextIndex = clamp(activeIndex + 1, 0, React.Children.count(children) - 1);
		setActiveIndex(nextIndex);
		// if (scrollRef.current !== null) {
		// 	scrollRef.current.scroll({
		// 		left: scrollRef.current.scrollLeft + cardWidth,
		// 		behavior: 'smooth'
		// 	});
		// }
	};

	const scrollRef = React.createRef<HTMLDivElement>();

	return (
		<div>
			<div
				ref={scrollRef}
				style={{
					// padding: 24,
					// overflowX: 'scroll',
					overflowY: 'hidden',
				}}
			>
				<div className={classes.carousel}>
					{/* {<CarouselMargin cardWidth={cardWidth} />} */}
					{React.Children.map(children, (child: JSX.Element, index: number) => {
						return (
							<CarouselItem index={index} activeIndex={activeIndex} spacing={spacing}>
								<div
									key={index}
									ref={refs[index]}
									style={{
										// display: 'flex',
										// flexDirection: 'column',
										// alignItems: 'center',
										minWidth: cardWidth,
										maxWidth: cardWidth
									}}
								>
									<div className={classes.rowNumber}>{index + 1}</div>
									{child}
								</div>
							</CarouselItem>
						);
					})}
					{/* {<CarouselMargin cardWidth={cardWidth} />} */}
				</div>
			</div>
			<div style={{ backgroundColor: '#00000022' }}>
				<Button className={classes.button} onClick={handleNavBackwards}>
					<ArrowDropUpIcon />
				</Button>{' '}
			</div>
			<div style={{ backgroundColor: '#00000022' }}>
				<Button className={classes.button} onClick={handleNavForwards}>
					<ArrowDropDownIcon />
				</Button>{' '}
			</div>
		</div>
	);
}

interface ICarouselMargin {
	cardWidth: number;
}

function CarouselMargin({ cardWidth }: ICarouselMargin) {
	return (
		<div
			style={{
				maxWidth: window.innerWidth / 2 - cardWidth / 2,
				minWidth: window.innerWidth / 2 - cardWidth / 2,
				height: 10
			}}
		/>
	);
}

interface ICarouselItem {
	index: number;
	activeIndex: number;
	spacing: number;
	children: JSX.Element[] | JSX.Element;
}

function CarouselItem({ index, activeIndex, spacing, children }: ICarouselItem) {
	var delta = 0;
	var scale = 1;
	var _spacing = spacing;
	if (index !== activeIndex) {
		var absoluteDiff = Math.abs(clamp(activeIndex - index, -3, 3));
		delta = absoluteDiff / 3 + 0.3;
		scale = 1 / (absoluteDiff + 0.5);
		_spacing = (absoluteDiff*2) * _spacing;
	}
	var zIndex = index === activeIndex ? 2 : 1;
	return (
		<div
			style={{
				zIndex: zIndex,
				marginLeft: _spacing,
				marginRight: _spacing,
				opacity: 1 - delta,
				transform: `scale(${scale}, ${scale})`,
				transition: 'opacity 1s, transform 1s'
			}}
		>
			{children}
		</div>
	);
}
