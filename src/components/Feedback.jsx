import  { Component } from "react"
import { Statistics } from "./statistics/Statistics"
import css from './Feedback.module.css'

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
     
      staticChangeGood=(e)=>{
       
        this.setState(({good})=>{
          return {good: good+1}
        })
       
      }
      staticChangeNeutral=(e)=>{
        
        this.setState(({neutral})=>{
          return {neutral:neutral+1}
        })
        
      }
      staticCangeBad=(e)=>{
        
        this.setState(({bad})=>{
          return {bad:bad+1}
        })
       
      }
      countTotalFeedback(num1,num2,num3){
        return num1+num2+num3
      }
      countPositiveFeedbackPercentage(num1,num2,num3){
        let numbTot=num1+num2+num3
        let total=  num1*100/ numbTot
        if(numbTot===0){
          return 0
        }
        return Math.round(total)
      }
  
    render() {
const{good,neutral,bad}=this.state

      return (
        <> <div className={css.containerButton}>
          <button type="button" className={css.button1}  onClick={this.staticChangeGood}>Good</button>
          <button type="button" className={css.button2}  onClick={this.staticChangeNeutral}>Neutral</button>
          <button type="button" className={css.button3}  onClick={this.staticCangeBad} >Bad</button>
          </div>
          <h2 className={css.titlestatic}>Statistics</h2>
          <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback(good,neutral,bad)} positivePercentage={this.countPositiveFeedbackPercentage(good,neutral,bad)}/>
        </>
      );
    }
  }