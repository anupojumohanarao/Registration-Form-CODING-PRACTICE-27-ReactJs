// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameErrorMsg: false,
    lastNameErrorMsg: false,
    submitForm: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onValidFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  onValidLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.onValidFirstName()

    this.setState({firstNameErrorMsg: !isValidFirstName})
  }

  renderFirstNameField = () => {
    const {firstName, firstNameErrorMsg} = this.state
    const className = firstNameErrorMsg
      ? 'name-input-field error-field'
      : 'name-input-field'
    return (
      <>
        <div className="input-container">
          <label className="label-container" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            className={className}
            id="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstName}
          />
        </div>
      </>
    )
  }

  onBlurLastName = () => {
    const isValidLastName = this.onValidLastName()

    this.setState({lastNameErrorMsg: !isValidLastName})
  }

  renderLastNameField = () => {
    const {lastName, lastNameErrorMsg} = this.state
    const className = lastNameErrorMsg
      ? 'name-input-field error-field'
      : 'name-input-field'
    return (
      <>
        <div className="input-container">
          <label className="label-container" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            className={className}
            id="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastName}
          />
        </div>
      </>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.onValidFirstName()
    const isValidLastName = this.onValidLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({submitForm: true})
    } else {
      this.setState({
        firstNameErrorMsg: !isValidFirstName,
        lastNameErrorMsg: !isValidLastName,
        submitForm: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {firstNameErrorMsg, lastNameErrorMsg} = this.state

    return (
      <form className="main-form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {firstNameErrorMsg && <p className="error-message">Required</p>}
        {this.renderLastNameField()}
        {lastNameErrorMsg && <p className="error-message">Required</p>}
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      submitForm: !prevState.submitForm,
      firstName: '',
      lastName: '',
    }))
  }

  renderSubmissionSection = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p className="success-para">Submitted Successfully</p>
      <button
        className="another-submit-btn"
        onClick={this.onClickSubmitAnotherResponse}
        type="button"
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {submitForm} = this.state
    return (
      <div className="main-form-section">
        <h1 className="main-heading">Registration</h1>
        <div className="form-section">
          {submitForm
            ? this.renderSubmissionSection()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
