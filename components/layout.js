import Navbar from './navbar'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
        <Navbar/>
      <div className="min-h-screen">
        <main >{children}</main>
      </div>
      <Footer />
    </>
  )
}
