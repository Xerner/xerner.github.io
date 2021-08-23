import { Button, makeStyles, Theme } from '@material-ui/core';
import {
	ArrowDropDown as ArrowDropDownIcon,
	ArrowDropUp as ArrowDropUpIcon,
	ChevronLeft,
	ChevronRight
} from '@material-ui/icons';
import { clamp } from 'functions/clamp';
import React, { useMemo } from 'react';
import { useState } from 'react';

interface ICarousel {
	cardWidth: number;
	children: JSX.Element[] | JSX.Element;
}

const useStyles = (isMobile: boolean) =>
	makeStyles((theme: Theme) => ({
		button: { width: '100%', color: '#FFFFFF' },
		carousel: {
			maxHeight: window.innerHeight * 0.6,
			overflow: 'visible',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'flex-start'
			// justifyContent: 'center',
		},
		rowNumber: isMobile
			? {
					width: '1.5rem',
					margin: 'auto',
					textAlign: 'center',
					color: theme.palette.type === 'dark' ? '#e8e8e8CC' : '#FFFFFFFF'
			  }
			: {
					width: '2.5rem',
					margin: 'auto',
					textAlign: 'center',
					color: theme.palette.type === 'dark' ? '#e8e8e8CC' : '#080808CC'
			  }
	}))();

export default function ScrollCarousel(props: ICarousel) {
	const { cardWidth, children } = props;
	const [activeIndex, setActiveIndex] = useState(0);
	var spacing = 12;
	const isSmall = window.innerWidth - spacing * 4 < cardWidth;
	const classes = useStyles(isSmall);

	var _cardWidth = isSmall ? window.innerWidth - spacing * 2 : cardWidth;

	var itemPositions: number[] = [];
	for (let i = 0; i < React.Children.count(children); i++) {
		itemPositions.push(i * (_cardWidth + spacing * 2));
	}

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

	const scrollRef = React.createRef<HTMLDivElement>();

	return (
		<div>
			<div
				ref={scrollRef}
				style={{
					overflow: 'hidden'

					// overflowX: 'hidden',
					// overflowY: 'hidden'
				}}
			>
				<div className={classes.carousel}>
					{isSmall ? null : <CarouselMargin cardWidth={_cardWidth} spacing={spacing} />}
					{React.Children.map(children, (child: JSX.Element, index: number) => {
						return (
							<CarouselItem index={index} activeIndex={activeIndex} spacing={spacing}>
								<div
									key={index}
									style={{
										minWidth: _cardWidth,
										maxWidth: _cardWidth,
									}}
								>
									<div className={classes.rowNumber}>{index + 1}</div>
									{child}
								</div>
							</CarouselItem>
						);
					})}
					{isSmall ? null : <CarouselMargin cardWidth={_cardWidth} spacing={spacing} />}
				</div>
			</div>
			<div style={{ display: 'flex', width: _cardWidth, margin: 'auto', padding: "12px 0" }}>
				<div style={{ backgroundColor: '#00000022', width: '50%' }}>
					<Button className={classes.button} onClick={handleNavBackwards}>
						<ChevronLeft />
					</Button>{' '}
				</div>
				<div style={{ backgroundColor: '#00000022', width: '50%' }}>
					<Button className={classes.button} onClick={handleNavForwards}>
						<ChevronRight />
					</Button>{' '}
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
	return (
		<div
			style={{
				maxWidth: window.innerWidth / 2 - cardWidth / 2 - spacing - spacing / 2,
				minWidth: window.innerWidth / 2 - cardWidth / 2 - spacing - spacing / 2,
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
	if (index !== activeIndex) {
		var absoluteDiff = Math.abs(clamp(activeIndex - index, -3, 3));
		delta = absoluteDiff / 3 + 0.3;
	}
	return (
		<div
			style={{
				opacity: 1 - delta,
				marginLeft: spacing,
				marginRight: spacing,
				transition: 'opacity 1s, transform 1s'
			}}
		>
			{children}
		</div>
	);
}
