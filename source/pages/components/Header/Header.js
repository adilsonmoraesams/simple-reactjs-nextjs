import Link from 'next/link';
import Head from 'next/head';

import HeaderStyled from './Header.styled';

export default function Header(props) {

    return (
        <header className="header">
            <style jsx>{HeaderStyled}</style>
            <Head>
                <title> {props.title} </title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-6c4nX2tn5KbzeBJo9Ywpa0Gkt+mzCzJBrE1RB6fmpcsoN+b/w/euwIMuQKNyUoU/nToKN3a8SgNOtPrbW12fug==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>


            <Link href="/">
                <a>
                    <img alt="Logo Treina Cook" src="/img/logo.svg" />
                </a>
            </Link>
        </header>
    )

}