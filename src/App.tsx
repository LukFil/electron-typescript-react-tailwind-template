import * as React from 'react'
import * as ReactDOM from 'react-dom'

function App() {

    return <div className='md:container mx-auto flex items-center justify-center h-screen bg-gray-200'>
        <p className='text-indigo-400 text-2xl'>React + Tailwind + Typescript</p>
    </div>
}

function render() {
    ReactDOM.render(<App />, document.body)
}

render()
