import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import CalcProvider from "./context/CalcContext";

const btnValues = [
  ["C", "+/-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <CalcProvider>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Wrapper>
          <Screen />
          <ButtonBox>
            {btnValues.flat().map((btn, i) => (
              <Button
                value={btn}
                key={i}
              />
            ))}
          </ButtonBox>
        </Wrapper>
        <footer style={footerStyle}>
          <span>
            Created by <a href="https://github.com/tejasbhamare129" target="_blank" rel="noopener noreferrer" style={linkStyle}>Tejas</a>
          </span>
        </footer>
      </div>
    </CalcProvider>
  );
}

const footerStyle = {
  textAlign: 'center',
  marginTop: 'auto',
  padding: '1rem 0',
  backgroundColor: '#f6f8f9',
  color: '#888',
  fontSize: '1rem',
};

const linkStyle = {
  color: '#0077b6', // A shade of blue for the link
  textDecoration: 'none',
};

export default App;
