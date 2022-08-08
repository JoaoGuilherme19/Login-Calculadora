
import React, { useState } from 'react';
import './calculator.css'
import Tilt from 'react-parallax-tilt';

const Home = () => {
    const [num, setNum] = useState(0)
    const [operator, setOperator] = useState()
    const [oldNum, setOldNum] = useState(0)
    const [variable, setV] = useState()
    const [sign, setSign] = useState()
    const [oldVariable, setO] = useState()

    const getNum = (e) => {
        const input = e.target.firstChild.textContent
        if (num === 0) {
            setNum(input)
        } else {
            setNum(num + input)
        }
    }
    const clear = () => {
        setNum(0)
        setOldNum(0)
        setV("")
        setSign("")
        setO("")
    }
    const percent = () =>{
        setNum(num / 100)
    }
    const changeSign = () => {
        if (num>0) {
            setNum(-num)
        } else {
            setNum(Math.abs(num))
        }
    }

    const operatorHandle = (e) => {
        const operatorInput = e.target.firstChild.textContent
        setOperator(operatorInput)
        setOldNum(num)
        setSign(operatorInput)
        setNum(0)
        console.log(operatorInput);
        setV(num)
    }

    const calculate = () => {
        var total
        console.log(oldNum, operator, num);
        setO(num)

        if (operator === '/') {
            total = parseFloat(oldNum) / parseFloat(num)
            setNum(total.toFixed(2))
        } 
        else if (operator === 'X'){
            total = parseFloat(oldNum) * parseFloat(num)
            setNum(total.toFixed())
        } 
        else if (operator === '+'){
            total = parseFloat(oldNum) + parseFloat(num)
            setNum(total.toFixed())
        } 
        else if (operator === '-'){
            total = parseFloat(oldNum) - parseFloat(num)
            setNum(total.toFixed())
            return
        }
        console.log(num)

    }

    return (
        <Tilt>
            <div className="calculator">
                <div className="history">
                    <h2>{variable}{sign}{oldVariable}</h2>
                </div>
                <div className="resultado">
                    <h1>{num}</h1>
                </div>
                <div className="botoesArea">
                    <button className="botoes gray" onClick={clear}>AC</button>
                    <button className="botoes gray" onClick={changeSign}>+/-</button>
                    <button className="botoes gray" onClick={percent}>%</button>
                    <button className="botoes orange" onClick={operatorHandle}>/</button>
                    <button className="botoes" onClick={getNum}>7</button>
                    <button className="botoes" onClick={getNum}>8</button>
                    <button className="botoes" onClick={getNum}>9</button>
                    <button className="botoes orange" onClick={operatorHandle}>X</button>
                    <button className="botoes" onClick={getNum}>4</button>
                    <button className="botoes" onClick={getNum}>5</button>
                    <button className="botoes" onClick={getNum}>6</button>
                    <button className="botoes orange" onClick={operatorHandle}>-</button>
                    <button className="botoes" onClick={getNum}>1</button>
                    <button className="botoes" onClick={getNum}>2</button>
                    <button id="plus" className="botoes" onClick={getNum}>3</button>
                    <button className="botoes orange" onClick={operatorHandle}>+</button>
                    <button className="botoes zero" onClick={getNum}>0</button>
                    <button className="botoes" onClick={getNum}>.</button>
                    <button className="botoes orange" onClick={calculate}>=</button>
                </div>
            </div>
        </Tilt>

    );
}

export default Home;
