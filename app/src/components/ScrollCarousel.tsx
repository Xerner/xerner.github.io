import { Button, makeStyles, Theme } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { clamp } from 'functions/clamp';
import React from 'react';
import { CSSProperties } from 'react';
import { useState } from 'react';

interface ICarousel {
	cardWidth: number;
	spacing: number;
	style?: CSSProperties;
	numberStyle?: CSSProperties;
	itemStyle?: CSSProperties;
	children: JSX.Element[] | JSX.Element;
}

const useStyles = (isSmall: boolean) =>
	makeStyles((theme: Theme) => ({
		button: { width: '100%', color: '#FFFFFF' },
		carousel: {
			maxHeight: window.innerHeight * 0.6,
			overflow: 'visible',
			display: 'flex',
			flexDirection: 'row',
			alignItems: 'flex-start'
		},
		rowNumber: isSmall
			? {
					width: '1.5rem',
					margin: 'auto',
					padding: 12,
					textAlign: 'center',
					color: theme.palette.type === 'dark' ? '#e8e8e8CC' : '#FFFFFFFF'
			  }
			: {
					width: '2.5rem',
					margin: 'auto',
					padding: 12,
					textAlign: 'center',
					color: theme.palette.type === 'dark' ? '#e8e8e8CC' : '#080808CC'
			  }
	}))();

// TODO: JSDocs
export default function ScrollCarousel(props: ICarousel) {
	const { cardWidth, spacing, style, numberStyle, itemStyle, children } = props;
	const [activeIndex, setActiveIndex] = useState(0);
	const isSmall = window.innerWidth - spacing * 4 < cardWidth;
	const classes = useStyles(isSmall);
	const scrollRef = React.createRef<HTMLDivElement>();
	const _cardWidth = isSmall ? window.innerWidth - spacing * 2 : cardWidth;
	
	const itemPositions: number[] = [];
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


	return (
		<div style={style}>
			<div
				ref={scrollRef}
				style={{
					overflow: 'hidden'
				}}
			>
				<div className={classes.carousel}>
					{isSmall ? null : <CarouselMargin cardWidth={_cardWidth} spacing={spacing} />}
					{React.Children.map(children, (child: JSX.Element, index: number) => {
						return (
							<CarouselItem
								index={index}
								activeIndex={activeIndex}
								spacing={spacing}
								width={_cardWidth}
								itemStyle={itemStyle}
							>
								{child}
							</CarouselItem>
						);
					})}
					{isSmall ? null : <CarouselMargin cardWidth={_cardWidth} spacing={spacing} />}
				</div>
			</div>
			<div style={{ margin: 'auto', width: _cardWidth }}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						fontSize: '1.25rem',
						margin: 'auto',
						...numberStyle
					}}
				>
					{itemPositions.map((item, index) => (
						<div
							style={{
								marginRight: 12,
								padding: '12px 0',
								opacity: activeIndex === index ? 1 : 0.25
							}}
						>
							{index + 1}
						</div>
					))}
				</div>

				<div style={{ display: 'flex' }}>
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
				maxWidth: window.innerWidth / 2 - cardWidth / 2 - spacing, // - spacing / 2,
				minWidth: window.innerWidth / 2 - cardWidth / 2 - spacing, // - spacing / 2,
				height: 10
			}}
		/>
	);
}

interface ICarouselItem {
	index: number;
	activeIndex: number;
	spacing: number;
	width: number;
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
				marginLeft: spacing,
				marginRight: spacing,
				minWidth: width,
				maxWidth: width,
				transition: 'opacity 1s, transform 1s'
			}}
		>
			{itemStyle !== undefined ? <div style={itemStyle}>{children}</div> : children}
		</div>
	);
}
