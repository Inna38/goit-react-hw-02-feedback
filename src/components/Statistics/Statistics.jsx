import React from "react";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";


export class Statistics extends React.Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0,
    };

handleGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1
        }))
    }
  handleNeural = () => {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1
      }))
  }

  handleBad = () => {
      this.setState(prevState => ({
        bad: prevState.bad + 1
    }))
    }
    
    render() {
     return(
         <div>
              <span>{this.state.good}</span>
            <span>{this.state.neutral}</span>
            <span>{this.state.bad}</span> 
             <h2>Statistics</h2>
             {/* <p>
               Good:   {this.state.good}
             </p>
             <p>
                Neuteral: {this.state.neutral}
             </p>
             <p>
                Bad:  {this.state.bad}
             </p> */}
            
             <FeedbackOptions good={this.handleGood}  neutral={ this.handleNeural }  bad={this.handleBad} />
            
        </div>
    )
    }
}

