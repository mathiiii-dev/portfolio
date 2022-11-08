import '../styles/globals.css'
import Header from "../components/Header";

function MyApp({Component, pageProps}) {
    return (
        <div id="app" className="container grid-xl">
            <Header/>
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp
