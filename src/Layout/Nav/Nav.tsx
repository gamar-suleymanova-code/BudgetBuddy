import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setNavHeight } from "../../slices/mainSlice";

export default function Nav() {
  const dispatch = useDispatch();
  const navbarRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current) {
      setTimeout(() => {
        dispatch(setNavHeight(navbarRef.current.offsetHeight));
      }, 10);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <nav className="position-absolute inline_center" ref={navbarRef}>
        <img
            className="pt-2"
            src="/logo.svg"
            alt="BudgetBuddy"
            title="BudgetBuddy"
        />
    </nav>
  );
}
