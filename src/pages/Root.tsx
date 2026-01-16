import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col">
    <div className='container mx-auto px-20 pb-10 grow'>
        <Header />
        <Outlet />
    </div>
    <Footer />
    </div>
  )
}
