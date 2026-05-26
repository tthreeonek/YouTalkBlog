import BottomBar from './components/BottomBar'
import TopBar from './components/TopBar'
import ArticlePage from './pages/ArticlePage'
import BlogPage from './pages/BlogPage'

function App() {
  const isArticle = window.location.pathname.includes('article')

  return (
    <>
      <TopBar />
      {isArticle ? <ArticlePage /> : <BlogPage />}
      <BottomBar />
    </>
  )
}

export default App