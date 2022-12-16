import Navbar from './navbar'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
        <Navbar preview={preview} />
      <div className="min-h-screen">
        <main className="pt-3">{children}</main>
      </div>
      <Footer />
    </>
  )
}
