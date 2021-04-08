import React from "react"
import { NavLink } from 'react-router-dom'


class Home extends React.Component {
  render() {
    return(
      <>
      <div>Click links below to display apartment info</div>
      <ul>{this.props.apartments.map(apt => {
        return (
          <li key={apt.id}>
            <div>
              <NavLink to={`/apartmentshow/${apt.id}`}> {apt.street}</NavLink>
            </div>
          </li>
        )
      })}
      </ul>
      </>
    )
  }
}

export default Home
