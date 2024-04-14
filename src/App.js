import './App.css';
import PromptDisplay from './components/PromptDisplay';
import PromptDisplayLayout from './components/PromptDisplayLayout';
import Header from "./components/Header";
import InputDisplay from "./components/InputDisplay"
function App() {
  return (
    <div style={{display:"flex", flexDirection:"column", height:"100vh"}}>
      <Header >
        <InputDisplay inputString="I'm gay"/>
      </Header>
    <PromptDisplayLayout>
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
    </PromptDisplayLayout>
    </div>
  );
}

export default App;
