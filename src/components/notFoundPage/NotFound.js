import './../styles/NotFound.scss';
import { RiVirusLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='error-container'>
      <div className='error'>
        <h1>4<RiVirusLine className='virus-icon' />4</h1>
        <h3>Looks like you are lost in the unknown :(</h3>
        <Link to='/'>Take me to my safe home</Link>
      </div>
    </section>
  );
}

export default NotFound;