  import React from 'react'

export class InvestorContactDetails extends React.Component {
  render () {
    const { validdata : {firstName = '',lastName = ''}, updatedata, reset } = this.props;
    return (
      <div>
        <div className='row'>
          <div className='six columns'>
            <label>First Name</label>
            <input
              className='u-full-width'
              placeholder='First Name'
              type='text'
              onChange={(event) => updatedata({ firstName: event.target.value})}
              value={firstName}
              autoFocus
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Last Name</label>
            <input
              className='u-full-width'
              placeholder='Last Name'
              type='text'
              onChange={(event) => updatedata({ lastName: event.target.value})}
              value={lastName}
            />
          </div>
        </div>
      </div>
    )
  }
}
