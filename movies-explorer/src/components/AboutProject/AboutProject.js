function AboutProject () {
  return (
    <div id='about-project' className='about-project'>
      <div className='title'>
        <h2 className='title__content'>О проекте</h2>
      </div>
      <div className='about-project__row_two-col'>
        <div className='about-project__desc'>
          <h5 className='about-project__desc-title'>Дипломный проект включал 5 этапов</h5>
          <p className='about-project__desc-subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__desc'>
          <h5 className='about-project__desc-title'>На выполнение диплома ушло 5 недель</h5>
          <p className='about-project__desc-subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='color-line'>
        <div className='color-line_first-type'>
          <h6 className='color-line__title is-green'>1 неделя</h6>
          <p className='color-line__subtitle'>Back-end</p>
        </div>
        <div className='color-line_second-type'>
          <h6 className='color-line__title is-grey'>4 недели</h6>
          <p className='color-line__subtitle'>Front-end</p>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
