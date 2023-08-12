import "./App.css";
import Layout from "./pages/layout/Layout";
import ModalProvider from "./providers/ModalProvider";
import ToasterProvider from "./providers/ToasterProvider";
import UserProvider from "./providers/UserProvider";

export function App() {
  return (
    <>
      <ToasterProvider />
      <UserProvider>
        <ModalProvider />
        {/* <ModalProvider products={products} /> */}
        <Layout />
      </UserProvider>
    </>
  );
}

export default App;
