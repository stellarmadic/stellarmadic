import { BrowserRouter as Router, Routes, Route } from 'wouter';
import Home from './pages/Home';
import { ErrorBoundary } from './components/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}
