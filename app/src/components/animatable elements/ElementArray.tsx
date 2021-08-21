import Delayable from 'components/Delayable';
import { arrayMax } from 'functions/arrayMax';
import { ReactElement, useMemo } from 'react';

export interface IElementArrayOptions {
	element: JSX.Element;
	rowSize: number;
	columnSize: number;
	itemClassName?: string | string[];
	isDelayRandom?: boolean;
	rowDelay?: number;
	rowDelayMaxIncrement?: number;
}

interface ElementArrayProps extends IElementArrayOptions {
	bitmap: boolean[][];
}

export default function ElementArray(props: ElementArrayProps) {
	const {
		element,
		rowSize,
		columnSize,
		bitmap,
		itemClassName,
		rowDelay,
		rowDelayMaxIncrement,
		isDelayRandom,
		...other
	} = props;

	const rows = bitmap.length;
	const columns = arrayMax(bitmap.map((row: boolean[]) => row.length));
	const width = columns * columnSize;
	const height = rows * rowSize;

	const content = useMemo(() => {
		return (
			<div style={{ width: width, height: height, position: 'relative' }} {...other}>
				{bitmap.map((row: boolean[], rowIndex: number) => (
					<ElementArrayRow
						key={rowIndex}
						element={element}
						row={row}
						rowIndex={rowIndex}
						rowSize={rowSize}
						columnSize={columnSize}
						itemClassName={itemClassName}
						rowDelay={rowDelay}
						rowDelayMaxIncrement={rowDelayMaxIncrement}
						isDelayRandom={isDelayRandom}
					/>
				))}
			</div>
		);
	}, [
		width,
		height,
		other,
		bitmap,
		element,
		rowSize,
		columnSize,
		itemClassName,
		rowDelay,
		rowDelayMaxIncrement,
		isDelayRandom
	]);

	return content;
}

interface IElementArrayRow extends IElementArrayOptions {
	row: boolean[];
	rowIndex: number;
}

function ElementArrayRow(props: IElementArrayRow) {
	const {
		element,
		row,
		rowIndex,
		rowSize,
		columnSize,
		itemClassName,
		rowDelay,
		rowDelayMaxIncrement,
		isDelayRandom
	} = props;

	var delay = rowDelay !== undefined && rowDelay !== 0 ? 1 + rowDelay : 0;

	return (
		<>
			{row.map((bit: boolean, colIndex: number) => {
				delay = incrementDelay(rowDelay, isDelayRandom, rowDelayMaxIncrement, delay);
				var itemClassName2 = calculateItemClass(itemClassName);

				return bit ? (
					<ElementArrayItem
						key={colIndex}
						element={element}
						index={colIndex}
						left={colIndex * columnSize}
						top={rowIndex * rowSize}
						className={itemClassName2}
						wait={delay}
					/>
				) : null;
			})}
		</>
	);
}

interface IElementArrayItem {
	element: ReactElement;
	index: number;
	left: number;
	top: number;
	className: string;
	wait: number;
}

/**
 * A component used in the {@link ElementArrayRow} component
 * @param props
 * ```
 * index: the row index of the element
 * left: how far left the element should be placed
 * top: how far below the top the element should be placed
 * className: a generic className
 * wait: a delay before the element will appear
 * ```
 */
function ElementArrayItem(props: IElementArrayItem) {
	const { element, index, left, top, className, wait } = props;
	return (
		<div key={index} style={{ position: "absolute", left: left, top: top }} className={className}>
			<Delayable wait={wait}>{element}</Delayable>
		</div>
	);
}

function incrementDelay(
	rowDelay: number | undefined,
	isDelayRandom: boolean | undefined,
	rowDelayMaxIncrement: number | undefined,
	delay: number
) {
	if (rowDelay) {
		if (isDelayRandom) {
			var increment = (rowDelayMaxIncrement ? rowDelayMaxIncrement : 1) * Math.random();
			delay = rowDelay + increment;
		} else {
			delay += rowDelay;
		}
	}
	return delay;
}

function calculateItemClass(classes: string | string[] | undefined) {
	if (classes === undefined) return '';
	return Array.isArray(classes) ? classes[Math.floor(Math.random() * classes.length)] : classes;
}
