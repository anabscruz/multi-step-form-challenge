import "./App.css";
import { CurrentStepInfo } from "./components/CurrentStepInfo";
import { PersonalInfoStep } from "./components/PersonalInfo";

function App() {
  return (
    <div className="container bg-white mx-auto p-3 rounded-2xl">
      <div className="grid grid-cols-3 gap-x-24">
        <div>
          <CurrentStepInfo />
        </div>
        <div className="col-span-2 pt-10 pr-24">
          <PersonalInfoStep />
        </div>
      </div>
    </div>
  );
}

export default App;
