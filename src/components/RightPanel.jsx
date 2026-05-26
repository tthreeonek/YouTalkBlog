import { sidebarImages } from '../data/articlePics'

function RightPanel() {
  return (
    <aside className="sidebar" aria-label="Дополнительные материалы">
      <section className="sidebar-card sidebar-card--blue">
        <img className="sidebar-card__hero" src={sidebarImages.chat} alt="" />
        <h2>Загружаем свободные окошки</h2>
        <p>Все в порядке, сейчас мы перенаправим вас в сервис записи Qlick, через который удобно выбрать дату, время встречи и оплатить её</p>
        <button className="button button--primary" type="button">Подробнее</button>
      </section>

      <section className="sidebar-card therapist">
        <div className="therapist__badges" aria-label="Форматы работы">
          <span>📝 Переписка</span>
          <span>📹 Видео</span>
        </div>
        <img className="therapist__photo" src={sidebarImages.person} alt="Психолог Лилия" />
        <h2>Лилия</h2>
        <p className="therapist__role">Психолог</p>
        <p className="therapist__meta">Опыт 6 лет · 43 года</p>
        <h3>С чем работает психолог</h3>
        <ul>
          <li>Тревога, тревожности</li>
          <li>Подавленность</li>
          <li>Тревога и панические атаки</li>
        </ul>
        <button className="button button--primary" type="button">Подробнее</button>
      </section>

      <a className="sidebar-banner" href="/blog">
        <img className="sidebar-banner__confetti" src={sidebarImages.giftBg} alt="" />
        <span>Дарите заботу</span>
        <img className="sidebar-banner__gift sidebar-banner__gift--one" src={sidebarImages.giftOne} alt="" />
        <img className="sidebar-banner__gift sidebar-banner__gift--two" src={sidebarImages.giftTwo} alt="" />
        <img className="sidebar-banner__gift sidebar-banner__gift--three" src={sidebarImages.giftThree} alt="" />
      </a>

      <section className="sidebar-card sidebar-card--price">
        <h2>8 Видео сессий</h2>
        <p>Проработать небольшие проблемы и продвинуться к важным изменениям.</p>
        <strong>18 500 ₽</strong>
        <button className="button button--primary" type="button">Купить</button>
        <img className="sidebar-card__price-image sidebar-card__price-image--one" src={sidebarImages.priceCardOne} alt="" />
        <img className="sidebar-card__price-image sidebar-card__price-image--two" src={sidebarImages.priceCardTwo} alt="" />
      </section>
    </aside>
  )
}

export default RightPanel