import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Statistics } from '../Statistics/Statistics'

export const Section = ({title}) => {
    return (
        <>
            <h1>{title}</h1>
            <FeedbackOptions
                // options={ }
                // onLeaveFeedback={}
            />
            <Statistics
                //  good={ this.state.good}
                // neutral={ }
                // bad={ }
                // total={ }
                // positivePercentage={ }                       
            />
        </>
   )    
}

