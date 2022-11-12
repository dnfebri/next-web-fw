import Head from "next/head"
import { useRouter } from "next/router";
import Footer from "./Footer"
import Navbar from "./Navbar"
import NavbarInves from "./NavbarInves"

function Layout(props) {
  const route = useRouter();
  const path = route.asPath.split('/');
  return (
    <>
      <Head>
        <title>Fitnessworks{props.title ? ' - ' + props.title : ''}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {path[1] === 'invesment' ?
        (<NavbarInves/>) :
        (<Navbar/>)
      }
      {/* <Navbar/> */}
      <main>{ props.children }</main>
      <Footer/>
    </>
  )
}

export default Layout