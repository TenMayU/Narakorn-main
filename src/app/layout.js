import Navbar from '@/component/navbar/Navbar'
import './globals.css'
import { Kanit } from 'next/font/google'
import Footer from '@/component/footer/footer'
import { ThemProvider } from '@/context/ThemContext'
import AuthProvider from '@/component/auth/auth'

const Kanits = Kanit({ subsets: ['thai'], weight:['200'] })

export const metadata = {
  title: 'NarakornBlog',
  description: 'NarakornProfile',


}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Kanits.className}>
        <ThemProvider>
          <AuthProvider>            
        <Navbar/>
        <div className=" container">
        {children}
        </div>  
        <Footer/>
          </AuthProvider>
        </ThemProvider>    
        </body>
    </html>
  )
}
