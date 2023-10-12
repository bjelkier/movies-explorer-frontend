import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {

  const navigate = useNavigate();

  return (
    <main>
      <section className='not-found'>
        <article className='not-found__error'>
          <h1 className='not-found__code'>404</h1>
          <span className='not-found__message'>Страница не найдена</span>
          <button className='not-found__button' type='button' onClick={() => { navigate(-1) }}>Назад</button>
        </article>
      </section>
    </main>
  )
};

export default NotFound;
