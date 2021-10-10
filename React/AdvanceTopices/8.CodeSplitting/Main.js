import React,{Suspense} from 'react'
import { render } from 'react-dom';
const Home = React.lazy(()=>import('./Home'))
const About = React.lazy(()=>import('./About'))


export default class Main extends React.Component{
constructor(props){
    super(props);
}

render(){
    console.log('render')
    return(
        //fallback props will show Loadding... until the Child Component not render..
        <Suspense fallback={<div>Loading....</div>}>
            <section>
                {/* becuase of the lazy() method will import the file just little later */}
                <Home/>
                <About/>
            </section>
        </Suspense>
    );
}
}
