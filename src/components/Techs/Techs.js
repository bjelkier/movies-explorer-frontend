import './Techs.css'

function Techs() {
  return (
    <main className='techs'>
      <div className='techs__container'>
        <h2 className='techs__title'>Технологии</h2>
        <h3 className='techs__subtitle'>7 технологий</h3>
        <span className='techs__caption'>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </span>
        <ul className='techs__list'>
          <li className='techs__blocks'><span className="techs__tech">HTML</span></li>
          <li className='techs__blocks'><span className="techs__tech">CSS</span></li>
          <li className='techs__blocks'><span className="techs__tech">JS</span></li>
          <li className='techs__blocks'><span className="techs__tech">React</span></li>
          <li className='techs__blocks'><span className="techs__tech">Git</span></li>
          <li className='techs__blocks'><span className="techs__tech">Express.js</span></li>
          <li className='techs__blocks'><span className="techs__tech">mongoDB</span></li>
        </ul>
      </div>
    </main>
  )
}

export default Techs;
