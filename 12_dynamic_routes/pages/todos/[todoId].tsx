import Link from "next/link"

import { useRouter } from "next/router"

export default function Todo()
{
    const router = useRouter()

    const todoId = router.query.todoId
  
    return (
        <>
            <Link href="/todos">Voltar</Link>
            <h1>Exibindo o todo: {todoId}</h1>
            <p>
                Comentario: la la la...
                <Link href={`/todos/${todoId}/comments/1`}>
                    Detalhes
                </Link>
            </p>
            <p>
                Comentario: le le le...
                <Link href={`/todos/${todoId}/comments/2`}>
                    Detalhes
                </Link>
            </p>
            <p>
                Comentario: li li li...
                <Link href={`/todos/${todoId}/comments/3`}>
                    Detalhes
                </Link>
            </p>
        </>
    )
}