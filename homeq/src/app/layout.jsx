import { Plus_Jakarta_Sans, Cardo } from 'next/font/google';
import '../scss/style.css';
import Header from '@/components/layout/header/Header';

 export const plus = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800']
 })
 export const cardo = Cardo({
  subsets: ['latin'],
  weight: [ '400',  '700']
 })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plus.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}