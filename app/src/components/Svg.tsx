
export default function Svg(props: any) {
	const { children } = props;
	return <svg {...props} xmlns="http://www.w3.org/2000/svg">
		{children}
	</svg>;
}