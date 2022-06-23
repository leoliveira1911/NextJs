import Link from "next/link"
import logo from '../assets/imgs/logo.png'
import Image from "next/image"


export default function Logo() {
    return (
        <Link href="/">
            <Image src={logo} alt="logo" width='170px' height='100px' />
        </Link>

    )
}