import './Portfolio.css';
import pointer from '../../images/pointer.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <div className='portfolio__container'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <a className='portfolio__links' href='https://github.com/bjelkier/how-to-learn'
          target='_blank' rel="noreferrer">
          <h3 className='portfolio__link-name'>Статичный сайт</h3>
          <img className='portfolio__pointer' src={pointer} alt='стрелка'></img>
        </a>
        <a className='portfolio__links' href='https://github.com/bjelkier/russian-travel'
          target='_blank' rel="noreferrer">
          <h3 className='portfolio__link-name'>Адаптивный сайт</h3>
          <img className='portfolio__pointer' src={pointer} alt='стрелка'></img>
        </a>
        <a className='portfolio__links' href='https://github.com/bjelkier/react-mesto-api-full-gha'
          target='_blank' rel="noreferrer">
          <h3 className='portfolio__link-name'>Одностраничное приложение</h3>
          <img className='portfolio__pointer' src={pointer} alt='стрелка'></img>
        </a>
      </div>
    </section>
  )
}

export default Portfolio;
