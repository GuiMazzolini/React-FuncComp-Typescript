import React from 'react';
import { Child } from './Child';

const Parent = () => {
    return <Child color="red" onClick={() => console.log("done")}/>
};

export default Parent;