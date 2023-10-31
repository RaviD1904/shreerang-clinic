import { Layout } from "antd";
import "./App.css";
import "./index.css";
import Dashboard from "./pages/dashboard";
import { useState } from "react";
import Login from "./pages/login";
const { Header } = Layout;

function App() {
  const [login, setLogin] = useState(false);
  return (
    <div>
      {!login ? (
        <div className="flex justify-center" style={{
          width:"100%",
          height:"100%",
          // border:"1px solid red",
          marginTop:"10%"
        }}>

          <Login  setLogin={setLogin}/>
        </div>
      ) : (
        <div>
          <Header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              className="text-white font-serif animate-marquee whitespace-nowra font-bold text-3xl"
              style={{
                width: "100%",
                color: "white",
              }}
            >
              Shreerang Ayurved Clinic And Panchkarm Center
            </div>
          </Header>
          <Dashboard />
        </div>
      )}
    </div>
  );
}

export default App;
