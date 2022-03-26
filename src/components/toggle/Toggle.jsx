import React, { useContext } from 'react';
import './toggle.scss';
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import { ThemeContext } from '../../context';

const Toggle = () => {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"})
    }
    return (
        <div className="toggle">
            <img src={Sun} alt="Sun" className="toggle_icon" />
            <img src={Moon} alt="Moon" className="toggle_icon" />
            <div className="toggle_btn" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></div>
        </div>
    )
}

export default Toggle