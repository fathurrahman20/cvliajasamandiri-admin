import { ThemeProvider } from "@/components/theme-provider";
import "./index.css";
import Routers from "./routes/router";
import { AuthProvider } from "./context/auth-context";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Toaster />
          <Routers />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
