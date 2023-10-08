import Link from "next/link"
import Head from "next/head"
import Image from "next/image"

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
                <Image src="/images/city.jpg" width="400" height="500" alt="Cidade a noite" />
            </div>
        </>
        
    )
}