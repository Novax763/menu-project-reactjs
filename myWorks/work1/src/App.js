import "./App.css";
import {  createTheme, ThemeProvider } from "@mui/material";



const theme = createTheme({
  typography: {
    fontFamily: ["A"],
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      </ThemeProvider>
    </div>
  );
}

export default App;
