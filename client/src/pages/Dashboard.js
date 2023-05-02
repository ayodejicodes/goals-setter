import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getGoals, resetGoals } from "../features/goals/goalsSlice";
import Spinner from "../components/Spinner";
import GoalForm from "../components/GoalForm";
// import Footer from "../components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, message } = useSelector((state) => state.goals);

  useEffect(() => {
    // if (isError) {
    //   console.log(message);
    // }

    if (!user) {
      navigate("/");
    }

    dispatch(getGoals());

    return () => {
      dispatch(resetGoals());
    };
  }, [user, isError, message, navigate, dispatch]);

  isLoading && <Spinner />;

  return (
    <div className="global-container flex flex-col items-center  ">
      <section className="text-center flex flex-col justify-center items-center h-[25vh] gap-5">
        <h1 className="font-bold text-[1.5rem] lg:text-[2.5rem] text-primary">
          Welcome, {user?.name}
        </h1>
        <p className="text-primary text-lg ">Goals Dashboard</p>
      </section>
      <GoalForm />

      {/* <Footer /> */}
    </div>
  );
};
export default Dashboard;
