import CloudsController from 'components/controllers/CloudsController';
import DarkModeControl from 'components/controllers/DarkModeControl';

export default function CloudsAndSun() {
    return <div id="clouds-sun-and-background" style={{ position: 'relative' }}>
        <div id="dark-mode-control-container" style={{ position: 'absolute' }}>
            <DarkModeControl
                id="dark-mode-control"
                className="dark-mode-control"
            />
        </div>
        <CloudsController id="clouds" />
    </div>
}