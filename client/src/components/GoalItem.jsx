import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalsSlice";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-primaryLight flex  p-4">
      <div className="  mr-10">
        <p className="text-primary">
          {new Date(goal.createdAt).toLocaleString("en-US")}
        </p>
        <h1 className="text-primary font-bold">{goal.text}</h1>
      </div>
      <div className="relative ">
        <RxCross2
          onClick={() => dispatch(deleteGoal(goal._id))}
          className="text-primary absolute right-0 top-0 cursor-pointer "
        />
      </div>
    </div>
  );
};
export default GoalItem;
