import { useRouter } from "next/router"



const Apikey = () => {

    const router = useRouter()
    const parametro = router.query.Apikey

    return (
        <h1>{parametro}</h1>
    )
}

export default Apikey