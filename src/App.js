import Header from "./components/Header";
import "./App.css";
import Questions from "./components/Question";
import InterviewAccord from "./components/InterviewAccord";
import data from "./helper/data"




function App() {
  
  return (
    <div className="App">
      <Header />
      <Questions data={data}/>
      {/* <InterviewAccord data={data} /> */}
    </div>
  );
}

export default App;
