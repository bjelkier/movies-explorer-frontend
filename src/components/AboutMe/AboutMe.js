import './AboutMe.css';
import studentPhoto from '../../images/student-photo.jpg';

function AboutMe() {
  return (
    <section className='about-me'>
      <div className='about-me__container'>
        <h2 className='about-me__heading'>Студентка</h2>
        <div className='about-me__info-photo-container'>
          <div className='about-me__info-container'>
            <h3 className='about-me__title'>Альбина</h3>
            <h4 className='about-me__subtitle'>Chief Marketing, 32 года</h4>
            <p className='about-me__description'>
              Последние три года, предшествовавшие решению сменить профессию, я возглавляла департамент маркетинга в инвестиционно-строительном холдинге.
              Участвуя в создании сайтов со стороны заказчика, я поняла, что хочу делать цифровой мир более эстетичным, гармоничным и благоустроенным. За переменами я пришла в Яндекс Практикум, ведь обучение новому всегда стоит свеч и даёт смелость менять мир вокруг. Кроме бесконечной любви к кодингу, я люблю путешествия, книги и велосипеды.
            </p>
            <a className='about-me__github' href='https://github.com/bjelkier' target='_blank' rel="noreferrer">GitHub</a>
          </div>
          <div className='about-me__photo-container'>
            <img className='about-me__student-photo' src={studentPhoto} alt='Фотография студентки курса веб-разработки' />
          </div>
        </div>
      </div>
    </section>
  )
};

export default AboutMe;
