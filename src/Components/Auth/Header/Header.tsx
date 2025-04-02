import React from 'react';
import { faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'react-responsive';

export default function Header() {
  const _btn = "text_darkBlue flex_center justify-content-between w-100";
  const isTablet = useMediaQuery({
    query: '(max-width: 992px)'
  });

  // If the screen is not tablet-sized,
  // render nothing
  if (!isTablet) return null;

  return (
    <h5
      className={_btn}
      id="offcanvasNavbarLabel">
      Close form
      <button
        type="button"
        className="default_btn"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <FontAwesomeIcon
          className="text_darkBlue"
          icon={faRectangleXmark}
        />
      </button>
    </h5>
  );
}
