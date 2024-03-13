import logo from './logo.svg';
import './App.css';
import Markdown from "./Markdown";
import SATMathQeustions from "./SATMathQuestions";
function App() {
    const content = `
  Given a **formula** below:
  $$
  s = ut + \\frac{1}{2}at^{2}
  $$
  $$
  L = \\frac{1}{2} \\pi v^2 S C_L 
  $$
  $$
  \\int_0^1 x^2 dx
  $$
  Calculate the value of $s$ when $u = 10\\frac{m}{s}$ and $a = 2\\frac{m}{s^{2}}$ at $t = 1s$
  $$
  \\int_{a}^{b} f(x) \\, dx
  $$
  $$
  \\frac{1}{3}\\pi
  `;
  return (
    <div className="App">
      <header className="App-header">
            <b>Using Katex</b>
            <div className='formula-container'>
                <div className='formula-content'>
                    {/*<Markdown children={content} />*/}
                    <SATMathQeustions/>
                </div>
            </div>
      </header>
    </div>
  );
}

export default App;
