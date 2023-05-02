import { createGoal } from "../features/goals/goalsSlice";
import GoalItem from "../components/GoalItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const GoalForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const { goals } = useSelector((state) => state.goals);
  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createGoal({ text }));
    setText("");
    // console.log(text);
  };
  return (
    <div className="text-center w-64">
      <section className="flex justify-center  ">
        <form onSubmit={onSubmit} className=" text-center w-[30rem] ">
          <div className="flex flex-col ">
            <label htmlFor="goal" className="mb-4">
              Enter your Goal
            </label>
            <input
              className="placeholder-style input-style "
              id="goal"
              name="goal"
              placeholder="Start typing..."
              value={text}
              onChange={onChange}
            />
          </div>
          <button type="sunbit" className="btn-submit  mt-4">
            Add your Goal
          </button>
        </form>
      </section>
      <section className="border mx-32 mt-10 ">
        <div className=" flex justify-center   ">
          <div>
            <div className="flex flex-col lg:flex-row gap-5">
              {goals.length > 0 ? (
                goals.map((goal) => {
                  return <GoalItem key={goal._id} goal={goal} />;
                })
              ) : (
                <h3>No Goals Set</h3>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default GoalForm;
