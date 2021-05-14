import React from 'react';
import {connect} from 'react-redux';

const HomePage = ({name}) =>{
        return (
            <div>
                <h1>Welcome to my React-Redux App {name}</h1>                       
            </div>
          )
    } 
const mapStateToProps = (state) =>({
    name: state.loginReducer.userName
})

export default connect(mapStateToProps)(HomePage);
