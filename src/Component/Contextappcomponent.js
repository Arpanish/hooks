import React from 'react'
import Contextcomponentc from './Component/Contextcomponentc'

function Contextappcomponent() {
    const UserContext = React.createContext()
  return (
    <div className='App'>
        <UserContext.Provider value={'Aparna'}>
        <Contextcomponentc />
        </UserContext.Provider>
   
    </div>
  )
}

export default Contextappcomponent