import "./assets/css/style.css";
import { ThemeProvider } from "./ThemeContext";
import { ErrorBoundary } from "react-error-boundary";
import AppRouter from "./components/AppRouter";
import ErrorPage from "./pages/ErrorPage"; // Добавь страницу ошибки

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <AppRouter />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
