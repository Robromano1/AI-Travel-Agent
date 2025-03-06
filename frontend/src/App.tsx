// import './App.css'
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import Form from "./Components/Form";

function App() {
  return (
    <MantineProvider>
      <Form />
    </MantineProvider>
  );
}

export default App;
