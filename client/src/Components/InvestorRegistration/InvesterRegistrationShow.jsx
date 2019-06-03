import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom';
import { registrationsteps } from './InvestorRegistrationSteps'
import Multistep from './multistep'
import { InvestorContactDetails } from './InvestorContactDetails'
import { InvestorBackground } from './InvestorBackground'

import { steps } from './InvestorRegistrationSteps'
class InvesterRegistrationShow extends Component {
  constructor(props){
    super(props);
    this.state={
      data: {},
    }
    this.setData= this.setData.bind(this);
    this.resetData = this.resetData.bind(this);
  }
  getSteps(){
    const { data } = this.state;
    return [
      { name: 'InvestorContactDetails', component: <InvestorContactDetails validdata={data} updatedata={this.setData} reset={this.resetData}/> },
      { name: 'InvestorBackground', component: <InvestorBackground validdata={data} updatedata={this.setData} reset={this.resetData}/> },
    ]
  }

  setData(newdata){
    const {data} = this.state;
    this.setState({ data: { ...data,...newdata}});
  }

  resetData(){
    this.setState({ data: {} });
  }
  
  render(){
    const { data} = this.state;
     return(
     <div className='container'>
         <div>
           <Multistep initialStep={1} steps={this.getSteps()} validdata={data}/>
         </div>
       </div>
     );
  }
}
export default withRouter(InvesterRegistrationShow);
