import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from  './SeasonDisplay';
import Spinner from './Spinner'


/* const App = () =>{
    window.navigator.geolocation.getCurrentPosition(
        //the firstcall back is when gcp returns a  position
       (position) => console.log(position),
        (err) => console.log(err)
);

const [value, setValue] = React.useState('position')
    return(
      
        <div> Latitude: {value}</div>)
}; */


//
class App extends React.Component {
  state = {lat:null, errorMessage: ''}


componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
        //the firstcall back is when gcp returns a  position
       (position) =>this.setState({lat:position.coords.latitude}),
        (err) => this.setState({errorMessage: err.message})
        
);
}

renderContent(){
    if(this.state.errorMessage && !this.state.lat) {
        return <div> Error : {this.state.errorMessage} </div>
    }

    if(!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay  lat = {this.state.lat}/>
    }
    return <div><Spinner /></div>

};

    render(){
        return(
            <div className ="border red">
            {this.renderContent()}
            </div>   
        )
    
    };
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
)