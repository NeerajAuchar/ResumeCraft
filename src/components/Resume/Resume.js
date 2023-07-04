import React, { useEffect, useState } from 'react'
import styles from './Resume.module.css';
import { AtSign, Calendar, GitHub, Linkedin, MapPin, Paperclip, Phone } from 'react-feather';

function Resume(props) {

    const [columns, setColumns] = useState([[], []])

    const workExpSection = (
        <div key={"workexp"} className={`${styles.section} ${styles.workExp}`}>
            <div className={styles.sectionTitle}>Work Experience</div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <p className={styles.title}>Full-Stack Developer</p>
                    <p className={styles.subTitle}>Company Name</p>
                    <a className={styles.link}> <Paperclip /> http://asdfasdv.com/qweuqw/asda  </a>
                    <div className={styles.date}> < Calendar /> 12/02/2022 - 15/03/2023 </div>

                    <p className={styles.location}> <MapPin /> Remote</p>
                    <ul className={styles.points}>
                        <li className={styles.points}>It is point number one </li>
                        <li className={styles.points}>It is point number two </li>
                        <li className={styles.points}>It is point number three </li>
                        <li className={styles.points}>It is point number four </li>

                    </ul>
                </div>
            </div>
        </div>);
    const projectSection = (
        <div key={"project"} className={`${styles.section} ${styles.workExp}`}>
            <div className={styles.sectionTitle}>Projects</div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <p className={styles.title}>Project-1</p>
                    <a className={styles.link}> <Paperclip /> http://asdfasdv.com/qweuqw/asda  </a>
                    <a className={styles.link}> <GitHub /> http://github.com/NeerajAuchar </a>
                    <ul className={styles.points}>
                        <li className={styles.points}>It is point number one </li>
                        <li className={styles.points}>It is point number two </li>
                        <li className={styles.points}>It is point number three </li>
                        <li className={styles.points}>It is point number four </li>

                    </ul>
                </div>
            </div>
        </div>);

    const educationSection = (
        <div key={"education"} className={`${styles.section} ${styles.workExp}`}>
            <div className={styles.sectionTitle}>Education</div>
            <div className={styles.content}>
                <div className={styles.item}>
                    <p className={styles.title}>Btech</p>
                    <p className={styles.subTitle}>Some Randome College</p>
                    <div className={styles.date}> < Calendar /> 12/02/2022 - 15/03/2023 </div>
                </div>
            </div>
        </div>);

    const achivementSection = (
        <div key={"achivements"} className={`${styles.section} ${styles.workExp}`}>
            <div className={styles.sectionTitle}>Achivements</div>
            <div className={styles.content}>
            < ul className={styles.numbered}>
                <li>Achivement 1</li>
                <li>Achivement 2</li>
                <li>Achivement 3</li>
                <li>Achivement 4</li>
            </ul>
            </div>
        </div>);

    const summarySection = (
        <div key={"summary"} className={`${styles.section} ${styles.workExp}`}>
            <div className={styles.sectionTitle}>Summary</div>
            <div className={styles.content}>
                <div className={styles.overview}>
                    This is dummy basic summary
                </div>
            </div>
        </div>);

    const otherSection = (
        <div key={"other"} className={`${styles.section} ${styles.workExp}`}>
            <div className={styles.sectionTitle}>Other</div>
            <div className={styles.content}>
                <div className={styles.overview}>
                    This is dummy basic others
                </div>

            </div>
        </div>);

    useEffect(() => {
        setColumns([
            [projectSection, educationSection, summarySection],
            [workExpSection, achivementSection, otherSection],
        ])
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.heading}>Name</p>
                <p className={styles.subHeading}>Front-end Developer</p>

                <div className={styles.links}>
                    < a className={styles.link}> <AtSign /> Email@gmail.com</a>
                    < a className={styles.link}> <Phone /> 1234567890</a>
                    < a className={styles.link}> <Linkedin /> htttps://linkedin.in</a>
                    < a className={styles.link}> <GitHub /> htttps://google.in</a>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.col1}>{columns[0]}</div>
                <div className={styles.col2}>{columns[1]}</div>
            </div>

        </div>
    )
}

export default Resume