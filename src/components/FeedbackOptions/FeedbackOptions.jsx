export const FeedbackOptions = ({good, neutral, bad}) => {
     return (
        <div>

        <button type="button" onClick={good}>
          Good
        </button>
        <button type="button" onClick={neutral}>
          Neural
        </button>
        <button type="button" onClick={bad}>
          Bad
        </button>
      </div>
    );
}

// export class FeedbackOptions extends React.Component {
//     state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     };
// //     handleGood = () => {
// //         this.setState(prevState => ({
// //             good: prevState.good + 1
// //         }))
// //     }
// //   handleNeural = () => {
// //       this.setState(prevState => ({
// //         neutral: prevState.neutral + 1
// //       }))
// //   }

// //   handleBad = () => {
// //       this.setState(prevState => ({
// //         bad: prevState.bad + 1
// //     }))
// //   }


//   }
// }


