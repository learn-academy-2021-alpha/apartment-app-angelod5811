import React from "react"
import PropTypes from "prop-types"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from './pages/Home'
import ApartmentShow from './pages/ApartmentShow'
import AddApartments from './pages/AddApartments'
import mockApartments from './MockApartments'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: mockApartments
    }
  }



  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props


    return (
      <>
      <Header/>
        { logged_in &&
          <div>
            <a href={sign_out_route }>Sign Out</a>
          </div>
        }
        { !logged_in &&
          <div>
            <a href={ sign_in_route }>Sign In</a>
          </div>
        }
        <Router>
          <Switch>
            <Route exact path="/" render={ () => <Home apartments = {this.state.apartments}/> } />
        </Switch>
      </Router>

      </>
    )
  }
}
export default App
