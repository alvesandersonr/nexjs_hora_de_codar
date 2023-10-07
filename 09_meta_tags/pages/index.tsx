import Link from "next/link"
import Head from "next/head"

import styles from '@/styles/pages/Home.module.css'

export default function Home() {

    return (
        <>
            <Head>
                <title>Home Page</title>
                <meta name="keywords" content="Roupas, Calçados, Bonés"></meta>
                <meta name="description" content="Econtre a melhor roupa para você" />
            </Head>
            <div>
                <h1 className={styles.title}>Adicionando CSS</h1>
            </div>
        </>
        
    )
}