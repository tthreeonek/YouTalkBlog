import logo from '../assets/youtalk/logo.svg'
import { navItems } from '../data/blogContent'
import Icon from './Icon'

function TopBar() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="header__logo" href="/blog" aria-label="YouTalk - перейти в блог">
          <img src={logo} width="52" height="36" alt="YouTalk" />
        </a>
        <nav className="header__nav" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a className="header__link" href="/blog" key={item}>
              {item}
              {item === 'Материалы' && <Icon name="chevron" />}
            </a>
          ))}
        </nav>
        <button className="header__button" type="button">Подобрать психолога</button>
        <button className="header__burger" type="button" aria-label="Открыть меню">
          <Icon name="burger" />
        </button>
      </div>
    </header>
  )
}

export default TopBar