import './globals.css'
import { Open_Sans } from 'next/font/google'
import { Navbar } from '@/components/Navbar/navbar'
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from '@/components/Toast/Toast';
import { Provider } from '@/components/Provider/Provider'
import { ProviderNProgress } from '@/components/Provider/ProviderNProgress';

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Kicks e-commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${openSans.className} bg-gray `}>
        <Provider>
          <Navbar />
          <Toast />
          <main className="mt-24 md:mt-36 px-4 md:px-16">
            <ProviderNProgress>
              {children}
            </ProviderNProgress>
          </main>
        </Provider>
      </body>
    </html>
  )
}
