import './Palette.css';
import notifySound from './src_notify.mp3'
import { Link } from "react-router-dom";
import palletes from "./pallete.json"

function Palette() {
    var palette = palletes.find(palette => palette.id === window.location.href.split("/").pop());
    return (
        <>
            <header>
                <Link to="/" className='back-button'>Back</Link>
            </header>
            <div>
                <div className='selected-color-panel'>
                    <h1>Color is copied!</h1>
                    <button onClick={closeColorPanel}>Back to Palette</button>
                </div>
            </div>
            <div className='palette-colors'>
                {palette.colors.map(currentColor =>
                    <>
                        <div style={{ backgroundColor: currentColor.color }}>
                            <span>{currentColor.name}</span>
                            <div className='tooltip'>
                                <button id={currentColor.color} onClick={copyColor}>
                                    Copy Color
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

const copyColor = event => {
    navigator.clipboard.writeText(event.currentTarget.id);
    playSound();

    const selectedColorPanel = document.querySelector(".selected-color-panel");
    selectedColorPanel.style.backgroundColor = event.currentTarget.id;
    selectedColorPanel.style.visibility = 'visible';
};

const closeColorPanel = event => {

    const selectedColorPanel = document.querySelector(".selected-color-panel");
    selectedColorPanel.style.visibility = 'hidden';
};

function playSound() {
    new Audio(notifySound).play();
}

export default Palette;