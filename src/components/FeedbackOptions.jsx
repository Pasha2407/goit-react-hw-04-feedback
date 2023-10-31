import css from './section.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {
        (options = options.map(item => (
          <button className={css.button} key={item} onClick={onLeaveFeedback}>
            {item}
          </button>
        )))
      }
    </div>
  );
};

export default FeedbackOptions;
