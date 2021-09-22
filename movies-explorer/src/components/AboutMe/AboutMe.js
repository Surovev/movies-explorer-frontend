import avatar from '../../images/avatar.jpg';

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
                Я родился и вырос в Московской области, 6 лет назад переехал в Сочи. Увлекаюсь горным велосипедом и лыжами. Пару лет назад решил погрузиться в мир IT.
                В 2021 году окончил курс по веб-разработке яндека практикум, параллельно работал и развивался в фрилансе.
          </p>
          <div className='about-me__social-links'>
            <a href='https://www.facebook.com/dmitrii.alabam.7' className='about-me__social-link'>Facebook</a>
            <a href='https://github.com/Surovev' className='about-me__social-link'>Github</a>
          </div>
        </div>
        <div className='about-me__img-wrapper'>
          <img className='about-me__img' src={avatar} alt='avatar' />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
