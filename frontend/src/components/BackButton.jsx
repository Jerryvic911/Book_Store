import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import PropTypes from 'prop-types';

const BackButton = ({ destination = '/', className = '' }) => {
  return (
    <div className={`flex ${className}`}>
      <Link
        to={destination}
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit flex items-center'
        aria-label="Go back"
      >
        <BsArrowLeft className='text-2xl' />
        <span className="ml-2">Back</span> {/* Optional text for clarity */}
      </Link>
    </div>
  );
};

BackButton.propTypes = {
  destination: PropTypes.string,
  className: PropTypes.string,
};

export default BackButton;

