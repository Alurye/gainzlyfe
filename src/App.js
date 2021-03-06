import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HabitTracker from './components/HabitTracker'
import GoalTracker from './components/GoalTracker'
import Qod from './components/Qod'
import WorkoutLog from './components/WorkoutLog'
import HeartRate from './components/HeartRate'
import Steps from './components/Steps'
import Sleep from './components/Sleep'
import CalorieCounter from './components/CalorieCounter'
import Sidenav from './components/Sidenav'




class App extends Component {

  state = {
  isOpen: false,
  brandedSearch:[],
  calories: [],
  foodNames: [],
  calCount: 0
}

handleSideNav = (e) => {
  this.setState({isOpen: !this.state.isOpen})
}

handleSearch = (e) => {
  e.preventDefault();
  this.setState({
    query: e.target.value
  })

}

handleAddButton = (e,food, cal) =>{
  e.preventDefault();
    console.log(e, cal)
    let cals = [... this.state.calories, cal]
    let foods = [... this.state.foodNames, food]

    this.setState({
        calories: cals,
        foodNames: foods
    }, () => {
          let calCount = 0;
          this.state.calories.forEach((cal) => {
              return calCount += cal;
      });

      this.setState({
          calCount: calCount
      });
    });
}




  render() {

    return (
      <div>
        <nav className="light-blue lighten-1" role="navigation">
          <div className="nav-wrapper container"><a id="logo-container" href="#" className="brand-logo">GAINZ</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=22CSSF&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800
">Log in to FitBit</a></li>
              <li><a  onClick={(e)=> this.handleSideNav(e)} className="toggle" href="#">My Foods</a></li>
            </ul>
          </div>
        </nav>
        
          <Sidenav foodNames={this.state.foodNames} calCount={this.state.calCount} showCals={this.state.calories} isOpen={this.state.isOpen} />
        <div className="section no-pad-bot" id="index-banner">
          <div className="container" >
            <br></br><br></br>
            <h1 className="header center orange-text" id='title'>DO YOU EVEN LIFT (state) BRUH?!</h1>
            <div className="row center">
              <Qod />

            </div>

            <br></br><br></br>

          </div>
        </div>


        <div className="container" >
          <div className="section">
            <div className="row" id='row'>
              <Sleep />

              <Steps />

              <HeartRate />
            </div>

          <div className="row" id='bottom-row'>
              <HabitTracker />

              <GoalTracker />

            <CalorieCounter handleAddButton={this.handleAddButton} />

          </div>

          </div>
          <br></br><br></br>
        </div>

        <footer className="page-footer orange">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Company Bio</h5>
                <p className="grey-text text-lighten-4">We are a team of brogrammers. #JAFEELZ </p>


              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Settings</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                </ul>
              </div>
              <div className="col l3 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li><a className="white-text" href="#!">Link 1</a></li>
                  <li><a className="white-text" href="#!">Link 2</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            </div>
          </div>
        </footer>
</div>



    );
  }
}

export default App;
