import Link from "next/link";

export default function Header({photo} : {photo?: string | undefined}){
    return (
        <header>
            <Link href="/">
                <h1>reviveImages</h1>
            </Link>
        </header>
    )

}