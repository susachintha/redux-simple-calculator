import React from 'react';
import { useDispatch } from 'react-redux';
import { 
    buttonClick
} from './calculatorSlice';
import styles from './Calc.module.css';

export function CalcButton(props) {

    const dispatch = useDispatch();

    return ( 
        <button
            className={styles.button}
            aria-label="Button"
            onClick={() => dispatch(buttonClick(Number(props.name)))}
        >
            {props.name}
        </button>
    );
}