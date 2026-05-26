import { tags } from '../data/blogContent'

function TagList() {
  return (
    <ul className="tags" aria-label="Темы статей">
      {tags.map((tag, index) => (
        <li className="tags__item" key={tag}>
          <button className={`tags__button${index === 2 ? ' tags__button--active' : ''}`} type="button">
            {index < 3 && <span className="tags__emoji" aria-hidden="true">{index === 0 ? '🙂' : '🦄'}</span>}
            {tag}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TagList