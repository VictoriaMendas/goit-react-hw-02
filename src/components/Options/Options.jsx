// import Feedback from "../Feedback/Feedback";
import css from "./Options.module.css";
const array = ["good", "neutral", "bad"];
export default function Options({ updateFeedback, resetFeedback, total }) {
  return (
    <div>
      {array.map((option) => {
        return (
          <button
            className={css.btn}
            key={option}
            onClick={() => updateFeedback(option)}
          >
            {option}
          </button>
        );
      })}
      {total > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}
