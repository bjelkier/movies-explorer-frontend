import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {

  const navigate = useNavigate();

  return (
    <main className='not-found'>
      <div className='not-found_error'>
        <h1 className='not-found__code'>404</h1>
        <h2 className='not-found__message'>Страница не найдена</h2>
      </div>
      <button className='not-found__button' type='button' onClick={() => { navigate(-1) }}>Назад</button>
    </main>
  )
};

export default NotFound;
