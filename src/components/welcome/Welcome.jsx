import { useState } from 'react';
import {Button} from '../ui';
import Greeting from '../greeting'
import { firstName } from '../../utils/constants';
import Themes from '../themes';



function Welcome() {
    const [counter, setCounter] = useState(0);

    // add functions
    const add1 = () => {
        setCounter(counter + 1)
    };
    const add5 = () => {
        setCounter(counter + 5)
    };
    const add100 = () => {
        setCounter(counter + 100)
    };

    // substract functions
    const sub1 = () => {
        setCounter(counter - 1)
    };
    const sub5 = () => {
        setCounter(counter - 5)
    };
    const sub100 = () => {
        setCounter(counter - 100)
    };

    // reset function
    const onReset = () => {
        setCounter(0)
    };

    return (
        <div className='mt-5'>
            <Greeting title={`Hello ${firstName}`} subtitle='This is a simple counter' />

            <div className="container mt-5">
                <h2 className="mb-5 text-muted fs-1">{counter}</h2>
            
                <Button onClick={sub100} text="-100" type="danger" />
                <Button onClick={sub5} text="-5" type="danger" />
                <Button onClick={sub1} text="-1" type="danger" />

                <Button onClick={onReset} text="Reset" type="warning" />

                <Button onClick={add1} text="+1" type="success" />
                <Button onClick={add5} text="+5" type="success" />
                <Button onClick={add100} text="+100" type="success" />
            </div>

            <Themes />
        </div>
    );    
}

export default Welcome;