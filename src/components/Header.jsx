import { useContext } from 'react';
import { MdOutlineDarkMode, MdWbSunny } from 'react-icons/md';
import { ThemeContext } from 'styled-components';
import '../styles/components/header.css'
import dark from '../styles/darkMode/dark'
import light from '../styles/darkMode/light'

const Header = ({ toToggleTheme }) => {

    const { title } = useContext(ThemeContext)

    return (
        <section className="header-button">
            <div className="btn-dark-mode">
                <button className='btn-icon' onClick={() => toToggleTheme()}>
                    <MdWbSunny/>
                </button>
            </div>
        </section>
    )
}

export default Header