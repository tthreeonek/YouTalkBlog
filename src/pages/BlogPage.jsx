import PostItem from '../components/PostItem'
import Breadcrumbs from '../components/Breadcrumbs'
import TagList from '../components/TagList'
import { articles } from '../data/blogContent'

function BlogPage() {
  return (
    <main className="main">
      <Breadcrumbs items={['Главная', 'Блог']} />
      <section className="blog container" aria-labelledby="blog-title">
        <h1 className="blog__title" id="blog-title">Блог</h1>
        <TagList />
        <div className="blog__grid">
          {articles.map((article) => (
            <PostItem post={article} key={`${article.title}-${article.image}`} />
          ))}
        </div>
        <button className="blog__more button button--primary" type="button">Ещё</button>
      </section>
    </main>
  )
}

export default BlogPage