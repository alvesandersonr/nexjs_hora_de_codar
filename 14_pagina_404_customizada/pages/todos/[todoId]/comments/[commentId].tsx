import Link from "next/link";
import { useRouter } from "next/router";

export default function Comment() {
    const router = useRouter()
    const todoId = router.query.todoId
    const commentid = router.query.commentId

    return (
        <>
            <Link href={`/todos/${todoId}`}>Voltar</Link>
            <h1>Exibindo comentário: {commentid} </h1>
            <p>Do todo <strong>{todoId}</strong></p>
        </>
    )
}