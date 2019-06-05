import React from 'react'

export class InvestmentOpportunities extends React.Component {
  render () {
    const { validdata : {firstName='',lastName='',email = '',emailConfirm='',domainInterested=''}, updatedata, reset } = this.props;
    return (
      <div>
        <div class="six columns">
          <label for="exampleRecipientInput">Domain Interested</label>
             <select class="u-full-width" 
              id="domainInterested" 
              value={domainInterested}
              onChange={(event) => updatedata({ domainInterested: event.target.value})}>
                <option value="Option 1">option 1</option>
                <option value="Option 2">option 2</option>
                <option value="Option 3">option 3</option>
             </select>
         </div>
      </div>
    )
  }
}
