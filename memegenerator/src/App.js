import React from 'react'
import Header from './Header.js'
import MemeGenerator from './MemeGenerator'

/** Header will only display things
 * MemeGenerator will be calling to an API and holding on to data
 * Each should be in their own file of the same name*/

 function App(){
    return(
        <div>
            <Header/>
            <MemeGenerator/>
        </div>

    )
}
export default App