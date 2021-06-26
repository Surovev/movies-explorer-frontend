function AboutMe () {
  return (
    <div id='about-me' className='about-me'>
      <div className='title'>
        <h2 className='title__content'>Студент</h2>
      </div>
      <div className='about-me__content'>
        <div className='about-me__info'>
          <h3 className='about-me__title'>Дмитрий</h3>
          <p className='about-me__subtitle'>Фронденд-разработчик, 30 лет.</p>
          <p className='about-me__desc'>
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className='about-me__social-links'>
            <a href='#' className='about-me__social-link'>Facebook</a>
            <a href='#' className='about-me__social-link'>Github</a>
          </div>
        </div>
        <div className='about-me__img-wrapper'>
          <img className='about-me__img' src='http://placekitten.com/276/344' />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
