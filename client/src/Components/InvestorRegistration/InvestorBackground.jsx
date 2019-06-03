import React from 'react'

export class InvestorBackground extends React.Component {
  render () {
    const { validdata : {firstName='',lastName='',email = '',emailConfirm=''}, updatedata, reset } = this.props;
    return (
      <div>
        <div className='row'>
          <div className='six columns'>
            <label>Your email</label>
            <input
              className='u-full-width required'
              placeholder='test@mailbox.com'
              type='email'
              onChange={(event) => updatedata({ email: event.target.value })}
              value={email}
              autoFocus
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Confirm email</label>
            <input
              className='u-full-width'
              placeholder='Confirm email'
              type='email'
              onChange={(event) => updatedata({ emailConfirm: event.target.value })}
              value={emailConfirm}
            />
          </div>
          <label className="example-send-yourself-copy">
          <input type='checkbox'/>
         <span className="label-body">Send a copy to yourself</span>
          </label>
        </div>
      </div>
    )
  }
}
