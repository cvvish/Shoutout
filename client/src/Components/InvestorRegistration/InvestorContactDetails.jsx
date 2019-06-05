  import React from 'react'

export class InvestorContactDetails extends React.Component {
  render () {
    const { validdata : {firstName = '',lastName = '',workEmail = '',linkedInProfile = ''}, updatedata, reset } = this.props;
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
        <div className='row'>
          <div className='six columns'>
            <label>Work Email</label>
            <input
              className='u-full-width'
              placeholder='acb@work.com'
              type='text'
              onChange={(event) => updatedata({ workEmail: event.target.value})}
              value={workEmail}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>LinkedIn Profile</label>
            <input
              className='u-full-width'
              placeholder='https://www.linkedin.com/in/xyz-12345/'
              type='text'
              onChange={(event) => updatedata({ linkedInProfile: event.target.value})}
              value={linkedInProfile}
            />
          </div>
        </div>
      </div>
    )
  }
}
