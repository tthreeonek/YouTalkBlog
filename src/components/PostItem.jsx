function PostItem({ post }) {
  return (
    <article className={`card${post.wide ? ' card--wide' : ''}`}>
      <a className="card__image-link" href="/article" aria-label={`Читать статью: ${post.title}`}>
        <img className="card__image" src={post.image} alt="" />
      </a>
      <div className="card__tags">
        {post.tags.map((tag) => (
          <span className="card__tag" key={tag}>
            <span className="card__tag-icon" aria-hidden="true">🦄</span>
            {tag}
          </span>
        ))}
      </div>
      <div className="card__body">
        <h2 className="card__title">
          <a href="/article">{post.title}</a>
        </h2>
        <p className="card__author">Автор: {post.author}</p>
        <p className="card__excerpt">{post.excerpt}</p>
        <time className="card__date" dateTime="2021-08-21">{post.date}</time>
      </div>
    </article>
  )
}

export default PostItem