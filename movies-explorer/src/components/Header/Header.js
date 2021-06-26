import { useHistory } from 'react-router-dom';

import logo from '../../images/header-logo.svg';

import Navigation from '../Navigation/Navigation.js';

// <props.Navigation />

function Header (props) {
  const headerClassName = `header ${props.auth ? 'header_type_auth' : ''}`;

  const history = useHistory();

  function redirectHome () {
    history.push('/');
  }

  return (
    <header className={headerClassName}>
      <img className='header__logo' src={logo} alt='логотип' onClick={redirectHome} />
      <Navigation />
    </header>
  );
}

export default Header;

// function Header () {
//   return (<header className='header'>
//     <img className='header__logo' src={logo} alt='логотип' />
//     <div className='header__info'>
//       <Navigation />
//       <div className='header__user-info'>
//         <a href='#' className='header__link'>Аккаунт</a>
//         <div className='header__user-icon-wrap'>
//           <img className='header__user-icon' src={profileIcon} alt='user icon' />
//         </div>
//       </div>
//     </div>
//           </header>);
// }
