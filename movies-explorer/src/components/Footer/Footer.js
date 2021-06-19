
function Footer () {
  const date = new Date();
  return (
    <footer className='footer'>
      <p className='footer__subtitle'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__nav'>
        <p className='footer__copyright'> &copy; {date.getFullYear()}</p>
        <nav className='footer__social-bar'>
          <a href='https://praktikum.yandex.ru/' className='footer__social-link'>Яндекс.Практикум</a>
          <a href='https://github.com/Surovev' className='footer__social-link'>Github</a>
          <a href='https://facebook.com/' className='footer__social-link'>Facebook</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
