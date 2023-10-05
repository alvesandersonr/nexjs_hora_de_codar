import Navbar from "./Navbar"
import Footer from "./Footer"

import styles from '../../styles/layout/MainContainer.module.css'

export default function MainContainer({children}: {children: any}) {
    return (
        <> 
            <Navbar />
            <div className={styles.container}>{children}</div>
            <Footer />
        </>
    )
}