import styles from '../../styles/header.module.css';
import Link from 'next/link';
export default function Header({name, link}) {
    
    return (
        <div className={styles.header}>
            <Link href="/dashboard"><img style={{cursor: 'pointer'}} src='/logo.svg'></img></Link>
            {name ? <Link href={link}><span>{name}</span></Link>: null}
        </div>
    )
}