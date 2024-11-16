import React from 'react';
import { FaReact, FaNodeJs, FaJava, FaCss3Alt, FaHtml5, FaJsSquare, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiTailwindcss, SiPostman, SiMysql, SiMongodb, SiExpress } from 'react-icons/si';
import './Skills.css'

const skills = [
    { name: 'React JS', icon: <FaReact size={50} /> },
    { name: 'Node.js', icon: <FaNodeJs size={50} /> },
    { name: 'Java', icon: <FaJava size={50} /> },
    { name: 'Spring Boot', icon: <SiSpringboot size={50} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} /> },
    { name: 'HTML', icon: <FaHtml5 size={50} /> },
    { name: 'CSS', icon: <FaCss3Alt size={50} /> },
    { name: 'JavaScript', icon: <FaJsSquare size={50} /> },
    { name: 'Postman', icon: <SiPostman size={50} /> },
    { name: '', icon: <SiMysql size={50} /> },
    { name: 'MongoDB', icon: <SiMongodb size={50} /> },
    { name: 'Express.js', icon: <SiExpress size={50} /> },
    { name: 'Workbench', icon: <FaDatabase size={50} /> }, // Using database icon for Workbench
];

const SkillsPage = () => {
    return (
        <div style={styles.container} className='skil' >
            <h2>My Skills</h2><br /><br /><br /><br />
            <div style={styles.skillsContainer}>
                {skills.map((skill, index) => (
                    <div key={index} style={styles.skillCard}>
                        {skill.icon}
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        
    },
    skillsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
    },
    skillCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: '100px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
};

export default SkillsPage;