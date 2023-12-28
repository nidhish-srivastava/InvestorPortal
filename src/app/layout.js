import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { InvestorPanelProvider } from '@/context/context'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Investor Panel',
  description: 'Welcome to Investor Panel, your gateway to exciting investment opportunities! Create an account, browse through innovative projects, and submit investment requests effortlessly. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <InvestorPanelProvider>
      <body className={inter.className}>{children}</body>
      </InvestorPanelProvider>
    </html>
  )
}
