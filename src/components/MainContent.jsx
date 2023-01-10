import '../styles/components/mainContent.css'
import ButtonContact from './ButtonContact'
import Contact from './Contact'
import Skills from './Skills'

const MainContent = () => {
    return (
        <main className="container">
            <div className="header">
                <div className='avatar'>
                <img src="https://avatars.githubusercontent.com/u/108318270?v=4" alt="avatar" id='avatar-img'/>
                </div>
                <h1>João Victor Porfírio</h1>
                <h3>Desenvolvedor Frontend</h3>
            </div>
            <Contact/>
            <Skills/>
            <ButtonContact/>
        </main>
    )
}
export default MainContent