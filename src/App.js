import { Fragment, useState } from "react";
import "./App.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

// Main Component for the project
function App() {
  // using the useState() hook to create a state variable to update the
  // state of the step the useState takes 1 as initial value and return
  // an array with the state and a function to update the state which is
  // the step value in our case
  const [step, setStep] = useState(1);

  // using the useState() hook to create a state variable to update the state
  // of the isOpen state variable to show or hide the steps container the
  // useState takes true as initial value and return an array with the state
  // and a function to update the state which is the isOpen value in our case
  const [isOpen, setIsOpen] = useState(true);

  // the method below is to handle the callback when the user clicks the
  // previous button
  const handlePreviousBtnCallback = () => {
    if (step > 1) {
      // using the setStep() method to update the value of current step
      // setStep(step - 1);

      // the code below is to use the setStep() callback and passing anonymous
      // function as input having the current value as input to update the
      // value of step based on the current value of step variable
      //
      // NOTE:
      // The below code is more correct and preffered way when we need to depend
      // on the previous/current state
      setStep((currentStep) => currentStep - 1);
    }
  };

  // the method below is to handle the callback when the user clicks the
  // next button
  const handleNextBtnCallback = () => {
    if (step < 3) {
      // using the setStep() method to update the value of current step
      setStep(step + 1);
    }
  };

  // the code below is to create a component to show the steps UI
  const stepsContainerComponent = (
    <div className="steps">
      <div className="numbers">
        {/** using the className below to add css class to style the below component 
    
        the code below is to dynamically style the div tag below based on the 
        value of step
        */}
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
        {/** The code below is to display the messages based on the step */}
        Step: {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        {/** using the style prop to add the style for the button below 
    
        using the onClick prop to register an event listener /handler to the 
        button below

        passing the handlePreviousBtnCallback as value to the onClick prop
        to register the callback to handle the click on Previous button
        */}
        <button
          style={{ backgroundColor: "#7950F2", color: "#FFF" }}
          onClick={handlePreviousBtnCallback}
        >
          Previous
        </button>
        {/** using the style prop to add the style for the button below
    
        using the onClick prop to register an event listener / handler to the 
        button below

        passing the handleNextBtnCallback as value to the onClick prop
        to register the callback to handle the click on Next button
        */}
        <button
          style={{ backgroundColor: "#7950F2", color: "#FFF" }}
          onClick={handleNextBtnCallback}
        >
          Next
        </button>
      </div>
    </div>
  );

  return (
    <Fragment>
      {/** The code below is to create the close button to hide or show the
        steps container
        
        using the className prop to style the button component below

        passing anonymous method as input to the onClick prop to
        register the callback to handle the click on the close button

        passing setIsOpen(!isOpen) as input to the anonymous callback to set
        the state of isOpen to the opposite of its current state
        */}
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && stepsContainerComponent}
    </Fragment>
  );
}

export default App;
