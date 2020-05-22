import React from 'react'

const BasicLayout = ({ children }) => {

    
    return <div>
        {
            children
        }
    </div>
}

BasicLayout.getInitialProps = async ({ store }) => {
    console.log("base props")
    const { dispatch , getState } = store
    await new Promise(resolve => {
        
        setTimeout(() => {
            dispatch({
                type:"test/setBase",
                payload:{
                    text:"Hello base"
                }
            })
            resolve()
        }, 2000);
    }) 
    console.log("base return")
    return getState()
}

export default BasicLayout