import styles from './Header.module.css'
import resumesvg from '../assets/resume.svg'


function Header() {
    return (
        <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.heading}>
            A <span>Resume</span> that stands out!
          </p>
          <p className={styles.heading}>
            Make your own resume at <span> ResumeCraft</span>
          </p>
        </div>
        <div className={styles.right}>
          <img src={resumesvg} alt="Resume" />
        </div>
      </div>
    )
}

export default Header