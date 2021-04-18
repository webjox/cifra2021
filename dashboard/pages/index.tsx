import styles from '../styles/startPage.module.css';
import Link from 'next/link';


export default function Home () {
  return (
    <div className={styles.mainContainer} >
            <span>Webjox</span>
            <div className={styles.navContainer}>
                <Link href="/dashboard" ><span><img src='/dashboard.svg'/>В дашборд</span></Link>
                <div style={{width: '3px', height: "30px", backgroundColor: 'white'}} ></div>
                <Link href="/map"><span><img src='/map.svg'/>На карту</span></Link>
            </div>
    </div>
  )
}
