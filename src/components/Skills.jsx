import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiReact
} from 'react-icons/di'

import '../styles/components/skills.css'

const technologies = [
    { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
    { id: 'css', name: 'CSS3', icon: <DiCss3 /> },
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge /> },
    { id: 'react', name: 'React', icon: <DiReact /> },
]

const Skills = () => {
    return (
        <section >
            <h2>Skills</h2>
            <div className='skills-container'>
                {technologies.map((skill) => (
                    <div className='techonology-icon' id={skill.id} key={skill.id}>
                        {skill.icon}
                        <h3>{skill.name}</h3>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills