import React, { Suspense, lazy } from 'react'
// import Comp1 from './components/Comp1'
// import Comp2 from './components/Comp2'

const Comp1= lazy(()=> import('./components/Comp1'))
const Comp2= lazy(()=> import('./components/Comp2'))

function App2() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>this is Lazy Loading Page</h1>
            <Suspense fallback={<div>Loading... Comp1</div>}>
                <Comp1 />
            </Suspense>
            <Suspense fallback={<div>Loading... Comp2</div>}>
                <Comp2 />
            </Suspense>
        </div>
    )
}

export default App2
