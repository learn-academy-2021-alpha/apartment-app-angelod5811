import React from "react"

class ApartmentShow extends React.Component {
  render() {
    console.log(this.props.apt);
    return(
      <>
      <h3>This is the apartment Show page</h3>
      <div>
        Street: {this.props.apt.street}
      </div>
      <div>
        City: {this.props.apt.city}
      </div>
      <div>
        State: {this.props.apt.state}
      </div>
      <div>
        Manager: {this.props.apt.manager}
      </div>
      <div>
        Email: {this.props.apt.email}
      </div>
      <div>
        Price per month: {this.props.apt.price}
      </div>
      <div>
        # of bedrooms: {this.props.apt.bedrooms}
      </div>
      <div>
        # of bathrooms: {this.props.apt.bathrooms}
      </div>
      <div>
        Pets allowed: {this.props.apt.pets}
      </div>
      </>
    )
  }
}

export default ApartmentShow
