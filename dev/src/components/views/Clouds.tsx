import Cloud, { TOP_OFFSET } from 'components/controllers/Cloud';

export default function Clouds({ id }: { id: string }) {
    // return null;
	return (
		<div id={id} className="clouds" style={{ top: TOP_OFFSET }}>
			{/* group 1 */}
			<Cloud cloudIndex={0} initialLeft={-0.025} top={0} />
			<Cloud cloudIndex={2} initialLeft={0.12}   top={0}    distance={1} />

			{/* group 2 */}
			<Cloud cloudIndex={1} initialLeft={0.31}   top={0.05} distance={0.7} />
			<Cloud cloudIndex={2} initialLeft={0.4}    top={0} />
			<Cloud cloudIndex={1} initialLeft={0.55}   top={0.05} distance={0.7} />

			{/* group 3 */}
			<Cloud cloudIndex={1} initialLeft={0.7}    top={0} />
			<Cloud cloudIndex={0} initialLeft={0.85}   top={0.05} distance={0.5} /> 
			{/* end cloud */}
			<Cloud cloudIndex={0} initialLeft={0.975}  top={0} />

			{/* Background clouds */}
			<Cloud cloudIndex={3} initialLeft={0.05}  top={0}     distance={0.25} />
			<Cloud cloudIndex={3} initialLeft={0.22}   top={0}    distance={0.4} />
			<Cloud cloudIndex={3} initialLeft={0.45}   top={0}    distance={0.3} />
			<Cloud cloudIndex={3} initialLeft={0.7}    top={0.05} distance={0.5} />

			{/* end cloud */}
			<Cloud cloudIndex={3} initialLeft={0.95}   top={0} />
		</div>
	);
}