import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/home">
                        Produtos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}