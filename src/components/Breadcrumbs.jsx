function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs container" aria-label="Хлебные крошки">
      <ol className="breadcrumbs__list">
        {items.map((item) => (
          <li className="breadcrumbs__item" key={item}>
            <a className="breadcrumbs__link" href="/blog">{item}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
