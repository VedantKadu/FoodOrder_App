import React from "react";

import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <main>
        <AvailableMeals />
      </main>
    </React.Fragment>
  );
};

export default Meals;
