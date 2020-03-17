import React from 'react'

const Jsx =()=>{
    // return(
    //     <div>
    //         <h1>hallo jsx</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id :'hallo',className:'dummyclass'},
        React.createElement('h1',null,'hallo Jsx')

        
    )
}

export default Jsx