import { Forward as ForwardIcon } from '@material-ui/icons';
import Delayable from './Delayable';
import nameGraph from 'library/myNameGraph';
import StarGraph from 'components/controllers/StarGraph';
import { K, E, N, T, H } from 'components/controllers/StarLetter';

interface MyNameProps {
    playAnimation: boolean;
    wait: number;
}

// const starImg = "images/star_12x12.png"
// const animations = [
//     [
// 		'',
// 		// 'animate__animated animate__fadeInRightBig animate__fast',
// 		// 'animate__animated animate__fadeInDownBig animate__slow'
// 	],
// ];

export default function MyName(props: MyNameProps) {
    const { wait } = props;
    console.log(window.innerWidth);
    console.log(700 / window.innerWidth);

    return (
        <div className="name-container">
            <Delayable wait={wait}>
                <div className="d-flex justify-content-center" style={{ position: 'relative', width: '80vw', height: '40vh' }}>
                    <K />
                    <E />
                    <N />
                    <T />
                    <H />
                    {/* <svg 
                        width="auto" 
                        height="400" 
                        style={{ 
                            position: 'absolute',
                            maxWidth: "700px"
                        }}
                    >
                        <StarGraph graph={nameGraph} />
                    </svg> */}
                </div>

                {/* Look Below */}
                <Delayable wait={wait + 2000}>
                    <div
                        style={{
                            position: 'absolute',
                            top: window.innerHeight * 0.8,
                            textAlign: 'center',
                            zIndex: 10,
                            color: 'white',
                            fontSize: '1.5rem',
                            fontWeight: 'bold'
                        }}
                        className="animate__animated animate__fadeInUp"
                    >
                        <div>Look Below</div>
                        <div style={{ transform: 'rotate(90deg)' }}>
                            <ForwardIcon style={{ color: 'white', fontSize: '2rem' }} />
                        </div>
                    </div>
                </Delayable>
            </Delayable>
        </div>
    );
}
