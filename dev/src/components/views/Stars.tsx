import { useCookie } from "hooks/useCookie";
import { useEffect } from "react";
import MyName from 'components/controllers/MyName';
import StarsController from 'components/controllers/Stars';

export default function Stars() {
    const [playAnimation, setPlayAnimation] = useCookie('playAnimation', true);

    // Entrance animation
	// This is supposed to go off at the same time the name finishes animating
	// It turns of the bool that is hiding the main content, and shrinks a buffer that allows the name to move upwards
	useEffect(() => {
		if (playAnimation) {
			setTimeout(() => {
				setPlayAnimation(false);
			}, 2000);
		}
	}, [playAnimation, setPlayAnimation]);
    
    return <div
        id="stars-and-name"
        className="starry-night-bg"
        style={{
            height: '100vh'
        }}
    >
        <MyName playAnimation={playAnimation} wait={2500} />
        <StarsController numberOfStars={250} maxWait={2000} minWait={500} />
    </div>
}
