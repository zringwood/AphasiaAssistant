import './App.css';
import PromptDisplay from './components/PromptDisplay';
import Header from "./components/Header";
import InputDisplay from "./components/InputDisplay"
import PromptController from './components/PromptController';
function App() {
 

  return (
    <div style={{display:"flex", flexDirection:"column", height:"100vh"}}>
      <Header >
        <InputDisplay inputString="I'm gay"/>
      </Header>
    <PromptController>
      <PromptDisplay text="Hello World"/>
      <PromptDisplay text="Hello"/>
      <PromptDisplay text="World"/>
      <PromptDisplay text="Hello World"/>
      <PromptDisplay text="Hello"/>
      <PromptDisplay text="World"/>
      <PromptDisplay text="Hello World"/>
      <PromptDisplay text="Hello"/>
      <PromptDisplay text="World"/>
      <PromptDisplay text="Hello World"/>
      <PromptDisplay text="Hello"/>
      <PromptDisplay text="World"/>
    </PromptController>
    </div>
  );
}

export default App;
