import React from "react";

import dummyMealsList from "./DummyMeals";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItems/MealItem";

const AvailableMeals = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {dummyMealsList.map((meal) => {
            return (
              <MealItem
                name={meal.name}
                description={meal.description}
                price={meal.price}
                key={meal.id}
                id={meal.id}
              />
            );
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
