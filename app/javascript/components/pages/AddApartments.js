import React from "react"
import { Form, FormGroup, Label, Input } from 'reactstrap'

class AddApartments extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        street:"",
        city:"",
        state:"",
        manager:"",
        email:"",
        price:"",
        bedrooms:"",
        bathrooms:"",
        pets:""
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }



  handleSubmit = () => {
    this.props.addApartments(this.state.form)
    this.setState({ submitted: true })
  }

  render() {
    return(
      <>
      <h3>This is add apartments page</h3>
      <Form>
          <FormGroup>
            <Label for="street">Apartment street</Label>
            <Input
              type="text"
              name="street"
              value={ this.state.form.street }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">Apartment City</Label>
            <Input
              type="text"
              name="city"
              value={ this.state.form.city }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="state">Apartment state</Label>
            <Input
              type="text"
              name="state"
              value={ this.state.form.state }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="manager">Apartment Manager</Label>
            <Input
              type="text"
              name="manager"
              value={ this.state.form.manager }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input
              type="text"
              name="email"
              value={ this.state.form.email }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Apartment Price</Label>
            <Input
              type="text"
              name="price"
              value={ this.state.form.price }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="bedrooms"># of bedrooms</Label>
            <Input
              type="integer"
              name="bedrooms"
              value={ this.state.form.bedrooms }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="bathrooms"># of bathrooms</Label>
            <Input
              type="text"
              name="bathrooms"
              value={ this.state.form.bathrooms }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup>
            <Label for="pets">Do you have pets?</Label>
            <Input
              type="text"
              name="pets"
              value={ this.state.form.pets }
              onChange={ this.handleChange }
            />
          </FormGroup>
        </Form>
      </>
    )
  }
}

export default AddApartments
