import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Preahvihear,Roboto} from "next/font/google"
const roboto= Roboto({
  subsets:["latin"],
  weight:["300","400"]
})

export default function App({ Component, pageProps }: AppProps) {
 return (
   <main className={roboto.className}>
     <Component {...pageProps} />
   </main>
 );
}
