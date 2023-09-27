import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__text'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className='footer__underline'>
          <span className='footer__copyright'>© 2023</span>
          <ul className='footer__links'>
            <a className='footer__link' href='https://practicum.yandex.ru/' target='_blank' rel="noreferrer">Яндекс.Практикум</a>
            <a className='footer__link' href='https://github.com/bjelkier' target='_blank' rel="noreferrer">Github</a>
          </ul>
        </div>
      </div>
    </footer >
  )
}

export default Footer;
