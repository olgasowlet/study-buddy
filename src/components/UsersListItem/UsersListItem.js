import React from "react";
import PropTypes from "prop-types";

function UsersListItem({ userData: { name, attendance, avarage = '0%' } }) {
  return (
    <div>
      <li>
        <div>{avarage}</div>
        <div>
          <p>{name}</p>
          <p>{attendance}</p>
        </div>
        <button>X</button>
      </li>
    </div>
  );
}

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
    avarage: PropTypes.string,
  }),
};

export default UsersListItem;
