import './AboutProject.css'

function AboutProject() {
  return (
    <main className='about-project'>
      <div className='about-project__container'>
        <h2 className='about-project__title'>О проекте</h2>
        <div className='about-project__description-container'>
          <div className='about-project__description'>
            <h3 className='about-project__description-title'>
              Дипломный проект включал 5 этапов
            </h3>
            <span className='about-project__description-caption'>
              Составление плана, работу над бэкендом, вёрстку,
              добавление функциональности и финальные доработки.
            </span>
          </div>
          <div className='about-project__description'>
            <h3 className='about-project__description-title'>
              На выполнение диплома ушло 5 недель
            </h3>
            <span className='about-project__description-caption'>
              У каждого этапа был мягкий и жёсткий дедлайн,
              которые нужно было соблюдать, чтобы успешно защититься.
            </span>
          </div>
        </div>
        <div className='about-project__scale-container'>
          <div className='about-project__scale-block about-project__scale-block_type_backend'>
            <span className='about-project__duration about-project__duration_type_backend'>1 неделя</span>
            <span className='about-project__sort'>Back-end</span>
          </div>
          <div className='about-project__scale-block'>
            <span className='about-project__duration'>4 недели</span>
            <span className='about-project__sort'>Front-end</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutProject;
