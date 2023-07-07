import { useRouter } from "next/router"



const Apikey = () => {

    const router = useRouter()
    const parametro = router.query.apikey

    return (
        <h1>A rota é: {parametro}</h1>
    )
}

export default Apikey