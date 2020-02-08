import * as React from 'react';
import {Hello} from './components/Hello';

export const App = () => {
    return <>
        <Hello compiler="test" framework="react" />
    </>
}