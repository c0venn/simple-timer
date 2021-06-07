import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';

function Timer (props){
    return (
        <div className="counter">
            <div className="icon"><i class="far fa-clock"></i></div>
            <div className="hour">{props.digithour}</div>
            <div className="minutes">{props.digitminutes}</div>
            <div className="minute">{props.digitminute}</div>
            <div className="seconds">{props.digitseconds}</div>
            <div className="second">{props.digitsecond}</div>
        </div>
    );
}
Timer.propTypes = {
    digithour: propTypes.number,
    digitminutes: propTypes.number,
    digitminute: propTypes.number,
    digitseconds: propTypes.number,
    digitsecond: propTypes.number
};
let contador =0;
setInterval(function){
    const hour = Math.floor(contador/10000);
    const minutes = Math.floor(contador/1000);
    const minute = Math.floor(contador/100);
    const seconds = Math.floor(contador/10):
    const second = Math.floor(contador/1);
    ReactDOM.render(<counter digitsecond={contador.indexOf()}) />,document.querySelector('#')
}