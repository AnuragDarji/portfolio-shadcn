import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./component/ScrollToTop";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function App() {
   useEffect(() => {
    const handleCopy = () => {
      toast.success("Text copied!", {
        style: {
          background: "var(--toast-bg)",
          color: "var(--toast-text)",
        },
      });
    };

    document.addEventListener("copy", handleCopy);
    return () => document.removeEventListener("copy", handleCopy);
  }, []);


  return (
    <Router>
       <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "var(--toast-bg)",
            color: "var(--toast-text)",
          },
        }}
      />
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
