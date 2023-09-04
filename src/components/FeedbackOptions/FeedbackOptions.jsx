import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeebdack }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          name={option}
          type="button"
          onClick={onLeaveFeebdack}
          className={css.btn}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeebdack: PropTypes.func.isRequired,
}
