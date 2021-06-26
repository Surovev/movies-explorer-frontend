import Header from '../Header/Header.js';

function Profile () {
  return (
    <div className='profile__page'>
      <Header />
      <div className='profile'>

        <h2 className='profile__title'>Привет, username</h2>
        <div className='profile__info'>
          <div className='profile__info-row'>
            <p className='profile__info-item'>Имя</p>
            <p className='profile__info-item profile__info-item_value'>username</p>
          </div>
          <div className='profile__info-row'>
            <p className='profile__info-item'>E-mail</p>
            <p className='profile__info-item profile__info-item_value'>user@email.est</p>
          </div>

        </div>
        <div className='profile__links'>
          <p className='profile__link'>Редактировать</p>
          <p className='profile__link profile__link_is-red'>Выйти из аккаунта</p>
        </div>
      </div>
    </div>
  );
}

export default Profile
;
