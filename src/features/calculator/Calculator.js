import React from 'react';
import { useSelector } from 'react-redux';
import { 
    selectCalculator 
} from './calculatorSlice';
import styles from './Calc.module.css';
import { CalcButton } from './CalcButton';
import { CalcOperatorButton } from './CalcOperatorButton';

export function Calculator() {
    const calculator = useSelector(selectCalculator);

    return ( 
    <div>
        <h1>Calculator</h1>
        <div>
            <div>
                <CalcButton name="1"/>
                <CalcButton name="2"/>
                <CalcButton name="3"/>
            </div>
            <div>
                <CalcButton name="4"/>
                <CalcButton name="5"/>
                <CalcButton name="6"/>
            </div>
            <div>
                <CalcButton name="7"/>
                <CalcButton name="8"/>
                <CalcButton name="9"/>
            </div>
            <div>
                <CalcOperatorButton name="CE"/>
                <CalcButton name="0"/>
                <CalcOperatorButton name="="/>
            </div>
            <div>
                <CalcOperatorButton name="C"/>
                <CalcOperatorButton name="+"/>
                <CalcOperatorButton name="-"/>
                <CalcOperatorButton name="*"/>
                <CalcOperatorButton name="/"/>
            </div>
            <span className={styles.value}>{calculator.join('')}</span>
        </div>
    </div>
    );
}