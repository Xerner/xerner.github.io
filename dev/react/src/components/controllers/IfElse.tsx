import React from 'react';

/**
 * @param condition - boolean
 * @param children - React.ReactElement
 */
interface IIfElse {
	condition: boolean;
	children: React.ReactElement | React.ReactElement[];
}

/**
 * Returns the first child if true, and the second child if false
 * @param {boolean} condition boolean
 */
export default function IfElse(props: IIfElse): React.ReactElement | null {
	const { condition, children } = props;
	
	switch (React.Children.count(children)) {
		case 0:
			console.error('IfElse has no children');
			break;
		case 1:
			return condition ? React.Children.only(children) : null;
		case 2:
			if (condition) return React.Children.toArray(children)[0] as React.ReactElement;
			else return React.Children.toArray(children)[1] as React.ReactElement;
		default:
			console.error('IfElse was given more than 2 children');
			break;
	}
	return null;
}
