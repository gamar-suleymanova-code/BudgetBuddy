import { setRegisterFormActive } from "../../../slices/authFormSlice"; 
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/data"; // Assuming RootState is the type for your Redux state
import '../../../store/data'

export default function FooterAuthCard() {
  // Typing the selector state using RootState
  const registerFormActive = useSelector((state: RootState) => state.authForm.registerFormActive);
  const dispatch = useDispatch();

  const flipAuthorizationCard = () => {
    dispatch(setRegisterFormActive(!registerFormActive)); // Toggle the state
  };

  return (
    <div className="text_darkBlue text_sm text-center text_balance">
      <span>{`${registerFormActive ? "Already" : "Don’t"} have an Account${registerFormActive ? "" : " yet" }?`}</span>
      <button
        className="btn_link transition_default ps-1 fw-bold h-auto"
        id="register-tab"
        onClick={flipAuthorizationCard} // Simplified the onClick handler
      >
        {`${registerFormActive ? "Login" : "Create One"} Now!`}
      </button>
    </div>
  );
}
