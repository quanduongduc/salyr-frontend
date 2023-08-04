import "./App.css";
import Layout from "./pages/layout/Layout";
import ToasterProvider from "./providers/ToasterProvider";
import UserProvider from "./providers/UserProvider";

export function App() {
  return (
    <>
      <ToasterProvider />
      <UserProvider>
        {/* <ModalProvider products={products} /> */}
        <Layout />
      </UserProvider>
    </>
  );
}

export default App;
