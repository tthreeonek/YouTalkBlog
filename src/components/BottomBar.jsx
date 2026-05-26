import skLogo from '../assets/youtalk/footer/sk-logo.svg'
import skMember from '../assets/youtalk/footer/sk-member.svg'
import socialDzen from '../assets/youtalk/footer/social-dzen.svg'
import socialTg from '../assets/youtalk/footer/social-tg.svg'
import socialTwitter from '../assets/youtalk/footer/social-twitter.svg'
import socialVk from '../assets/youtalk/footer/social-vk.svg'
import { footerColumns } from '../data/blogContent'
import Icon from './Icon'

const socialItems = [
  { name: 'ВКонтакте', icon: socialVk },
  { name: 'Telegram', icon: socialTg },
  { name: 'Twitter', icon: socialTwitter },
  { name: 'Дзен', icon: socialDzen },
]

function BottomBar() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <nav className="footer__nav" aria-label="Навигация в подвале">
          {footerColumns.map((column) => (
            <ul className="footer__list" key={column.join('-')}>
              {column.map((item) => (
                <li key={item}><a href="/blog">{item}</a></li>
              ))}
            </ul>
          ))}
        </nav>

        <section className="subscribe" aria-labelledby="subscribe-title">
          <h2 id="subscribe-title">Одно письмо в неделю со свежими новостями и акциями</h2>
          <form className="subscribe__form">
            <label className="visually-hidden" htmlFor="email">Ваш e-mail</label>
            <input id="email" type="email" placeholder="Ваш e-mail" />
            <button type="submit" aria-label="Подписаться"><Icon name="arrow" /></button>
          </form>
          <p>Подписываясь, я соглашаюсь на обработку персональных данных в соответствии с ФЗ РФ № 152-ФЗ «О персональных данных», а также с Политикой конфиденциальности</p>
        </section>

        <div className="footer__social">
          <div className="footer__badge" aria-label="Участник Сколково">
            <img className="footer__badge-logo" src={skLogo} alt="" />
            <img className="footer__badge-member" src={skMember} alt="" />
          </div>
          <ul className="socials" aria-label="Социальные сети">
            {socialItems.map((social) => (
              <li key={social.name}>
                <a href="/blog" aria-label={social.name}>
                  <img src={social.icon} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>©Youtalk, 2018 - 2022</span>
        <a href="/blog">Юридические документы</a>
        <a href="/blog">Способы оплаты</a>
      </div>
    </footer>
  )
}

export default BottomBar