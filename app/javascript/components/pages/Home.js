import React from "react"

class Home extends React.Component {
  render() {
    return(
      <ul>{this.props.apartments.map(apt => {
        return (
          <li key={apt.id}>
            <div>
            {apt.street}
            </div>
          </li>
        )
      })}
      </ul>
    )
  }
}

export default Home
