import React from 'react';
import { useDispatch } from 'react-redux';
import { 
    opButtonClick
} from './calculatorSlice';
import styles from './Calc.module.css';

export function CalcOperatorButton(props) {

    const dispatch = useDispatch();
    const operatorAction = {type: props.name, value: props.name}

    return ( 
        <button
            className={styles.button}
            aria-label="Button"
            onClick={() => dispatch(opButtonClick(operatorAction))}
        >
            {props.name}
        </button>
    );
}