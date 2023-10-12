import './Promo.css';
import promoImage from '../../images/promo-image.svg'

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <img className='promo__image' src={promoImage} alt='Спираль или сигнал СОС' />
      </div>
    </section>
  )

}

export default Promo;
