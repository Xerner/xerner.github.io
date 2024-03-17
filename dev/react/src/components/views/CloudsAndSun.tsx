import Clouds from 'components/views/Clouds';
import DarkModeControl from 'components/controllers/DarkModeControl';

export default function CloudsAndSun() {
    return <div id="clouds-sun-and-background" style={{ position: 'relative', height: 0 }}>
        <div id="dark-mode-control-container" style={{ position: 'absolute' }}>
            <DarkModeControl
                id="dark-mode-control"
                className="dark-mode-control"
            />
        </div>
        <Clouds id="clouds" />
    </div>
}