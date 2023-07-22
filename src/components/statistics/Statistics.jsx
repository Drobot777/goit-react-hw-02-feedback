import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import { Notification } from "components/Notification";
import { Component } from "react";

export class Statistics extends Component {
    constructor(props){
        super(props);
    };
renders=()=>{
    if(this.props.total===0){
        return <Notification message="There is no feedback"/>
    }else{
        return <>
        <p className={css.titlegood}>Good:  {this.props.good}</p>
         <p className={css.titleneutral}>Neutral:  {this.props.neutral}</p>
         <p className={css.titlebag}>Bad:  {this.props.bad}</p>
         <p className={css.titletotal}>Total:  {this.props.total}</p>
         <p className={css.titlepositiv}>Positiv feedback:  {this.props.positivePercentage}%</p>
         </>
         
    }
}
render(){
    
return(<>
  {this.renders()}
    
  </>
  )
} 
}

Statistics.ropTypes={
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired
 }
