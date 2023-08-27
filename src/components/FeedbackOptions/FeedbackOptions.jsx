import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css"

export const FeedbackOptions = ({ handleGood, handleNeural, handleBad }) => {
  return (
    <div>
      <button type="button" onClick={handleGood} className={css.btn}>
        Good
      </button>
      <button type="button" onClick={handleNeural} className={css.btn}>
        Neural
      </button>
      <button type="button" onClick={handleBad} className={css.btn}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleGood: PropTypes.func.isRequired,
  handleNeural: PropTypes.func.isRequired,
  handleBad: PropTypes.func.isRequired,
}

