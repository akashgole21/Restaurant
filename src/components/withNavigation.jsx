import React, { useNavigate } from "react";

const withNavigation = (RestaurantCreate) => {
  return (props) => {
    const navigate = useNavigate();

    return <RestaurantCreate {...props} navigate={navigate} />;
  };
};

export default withNavigation;