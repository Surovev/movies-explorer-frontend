import { useHistory } from 'react-router-dom';

function NotFoundPage () {
  const history = useHistory();

  function redirectBack () {
    history.goBack();
  }
  return (
    <>
      <div className='not-found'>
        <div className='not-found__desc'>
          <h2 className='not-found__title'>404</h2>
          <p className='not-found__subtitle'>Страница не найдена</p>
        </div>
        <p className='not-found__link' onClick={redirectBack}>Назад</p>
      </div>

    </>
  );
}

export default NotFoundPage;
