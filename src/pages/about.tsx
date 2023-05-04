import Article from '../../blocks/Article'
import Footer from '../../components/Footer'
import { Header } from '../../components/Header'


export default function AboutPage() {
  return (
    <main>
      <div>
      <Header />
      <Article hero="This is article">
      <h1>About</h1>
      </Article>

      <Footer />
      </div>
    </main>
  )
}
