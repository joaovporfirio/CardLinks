import { useContext } from 'react';
import { MdOutlineDarkMode, MdWbSunny } from 'react-icons/md';
import { ThemeContext } from 'styled-components';
import '../styles/components/header.css'


const Header = ({ toToggleTheme }) => {

    const { title } = useContext(ThemeContext)
    const icon = title=='light' ? <MdOutlineDarkMode/> : <MdWbSunny/>

    return (
        <section className="header-button">
            <div className="btn-dark-mode">
                <button className='btn-icon' onClick={() => toToggleTheme()}>
                    {icon}
                </button>
            </div>
        </section>
    )
}

export default Header