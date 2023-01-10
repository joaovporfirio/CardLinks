import '../styles/components/contact.css'
import { AiFillPhone, AiOutlineMail, AiFillEnvironment,AiOutlineUnlock } from 'react-icons/ai'

const Contact = () => {

    const informations = [
        { name: 'Disponível para novas oportunidades', id: 'openToWork', icon: < AiOutlineUnlock/> },
        { name: 'Montes Claros - MG', id: 'localizacao', icon: < AiFillEnvironment/> },
        { name: '31 9 95400129', id: 'wpp', icon: < AiFillPhone/> },
        { name: 'jvictorpa@outlook.com', id: 'mail', icon: < AiOutlineMail/> }
    ]

    return (
        <section className='info-container'>
            {informations.map((info) => (
                <a href='#' className='info-individual' id={info.id} key={info.id}>
                    {info.icon}
                    <p>{info.name}</p>
                </a>
            ))}
        </section>

            )
}

export default Contact