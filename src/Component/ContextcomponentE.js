import React, {useContext} from 'react';
import ContextcomponentF from './ContextcomponentF';
import {userContext} from './Component/Contextappcomponent';


function ContextcomponentE() {
    const user = useContext(userContext)
    return (
    <div>
        {user}
    </div>
  )
}

export default ContextcomponentE