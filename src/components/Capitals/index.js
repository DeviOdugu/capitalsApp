import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCapital: countryAndCapitalsList[0].id}

  onChangeSelectedCapital = event => {
    this.setState({activeCapital: event.target.value})
  }

  render() {
    const {activeCapital} = this.state
    // console.log(activeCapital)

    const capitalAndCountry = countryAndCapitalsList.filter(
      eachCountry => eachCountry.id === activeCapital,
    )
    // console.log(capitalAndCountry)

    const {country} = capitalAndCountry[0]

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="a">
            <select className="select" onChange={this.onChangeSelectedCapital}>
              {countryAndCapitalsList.map(eachCapital => (
                <option key={eachCapital.id} value={eachCapital.id}>
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
