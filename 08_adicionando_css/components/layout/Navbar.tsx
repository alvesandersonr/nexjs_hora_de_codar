import Link from "next/link"

import styles from '../../styles/layout/Navbar.module.css'

export default function Navbar() {
    return (
        <nav>
            <ul className={styles.navbar}>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        Produtos
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        Sobre
                    </Link>
                </li>
            </ul>
        </nav>
    )
}