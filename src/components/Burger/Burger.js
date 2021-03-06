import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngridient/BurgerIngridient';

const burger = (props) => {

    let tranformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (tranformedIngredients.length === 0) {
        tranformedIngredients = <p>Please start adding ingridients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {tranformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;