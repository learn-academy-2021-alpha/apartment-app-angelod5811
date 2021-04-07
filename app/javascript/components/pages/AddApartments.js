import React from "react"

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
    form[e.target.street] = e.target.value
    this.setState({ form: form })
  }



  handleSubmit = () => {
    this.props.AddApartments(this.state.form)
    this.setState({ submitted: true })
  }

  render() {
    return(
      <>
      <h3>This is add apartments page</h3>
      <Form>
          <FormGroup>
            <Label for="name">Apartment Name</Label>
            <Input
              type="text"
              name="name"
              value={ this.state.form.street }
              onChange={ this.handleChange }
            />
          </FormGroup>
        </Form>
      </>
    )
  }
}

export default AddApartments
