import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ChatWindow from './components/chat/ChatWindow';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';

import TeamView from './pages/TeamView';
import TeamDetails from './pages/TeamDetails';
import ProjectKanban from './pages/ProjectKanban';
import CalendarView from './pages/CalendarView';
import NotesPage from './pages/NotesPage';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import DashboardEmptyState from './pages/DashboardEmptyState';
import TeamSelect from './pages/TeamSelect';
import RequireTeam from './components/auth/RequireTeam';

// Firebase auth — the only auth system in this app.
import ForgotPassword from './pages/auth/ForgotPassword';
import VerifyEmail from './pages/auth/VerifyEmail';
import AcceptInvite from './pages/auth/AcceptInvite';
import RequireFirebaseAuth from './components/auth/RequireFirebaseAuth';

// Marketing / legal pages — bespoke ones (custom logic, e.g. Contact form,
// long legal text) live as their own files. Everything else flows through
// the content-registry-driven ContentPage so a non-developer can edit the
// site by touching pages/marketing/content.js.
import About from './pages/marketing/About';
import Contact from './pages/marketing/Contact';
import Privacy from './pages/marketing/Privacy';
import Terms from './pages/marketing/Terms';
import Cookies from './pages/marketing/Cookies';
import Services from './pages/marketing/Services';
import Pricing from './pages/marketing/Pricing';
import Portfolio from './pages/marketing/Portfolio';
import CaseStudies from './pages/marketing/CaseStudies';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Marketing / legal pages */}
          <Route path="/about"        element={<About />} />
          <Route path="/contact"      element={<Contact />} />
          <Route path="/privacy"      element={<Privacy />} />
          <Route path="/terms"        element={<Terms />} />
          <Route path="/cookies"      element={<Cookies />} />
          <Route path="/services"     element={<Services />} />
          <Route path="/pricing"      element={<Pricing />} />
          <Route path="/portfolio"    element={<Portfolio />} />
          <Route path="/case-studies" element={<CaseStudies />} />

          {/* Legacy marketing URLs now point visitors to the services site. */}
          <Route path="/overview"     element={<Navigate to="/services" replace />} />
          <Route path="/channels"     element={<Navigate to="/services" replace />} />
          <Route path="/messaging"    element={<Navigate to="/services" replace />} />
          <Route path="/file-sharing" element={<Navigate to="/services" replace />} />
          <Route path="/search"       element={<Navigate to="/services" replace />} />
          <Route path="/security"     element={<Navigate to="/services" replace />} />
          <Route path="/roadmap"      element={<Navigate to="/services" replace />} />
          <Route path="/changelog"    element={<Navigate to="/services" replace />} />
          <Route path="/use-cases/*"  element={<Navigate to="/services" replace />} />
          <Route path="/help"         element={<Navigate to="/contact" replace />} />
          <Route path="/getting-started" element={<Navigate to="/contact" replace />} />
          <Route path="/docs"         element={<Navigate to="/services" replace />} />
          <Route path="/guides"       element={<Navigate to="/services" replace />} />
          <Route path="/tutorials"    element={<Navigate to="/services" replace />} />
          <Route path="/blog"         element={<Navigate to="/services" replace />} />
          <Route path="/community"    element={<Navigate to="/contact" replace />} />
          <Route path="/careers"      element={<Navigate to="/contact" replace />} />
          <Route path="/press"        element={<Navigate to="/contact" replace />} />
          <Route path="/partners"     element={<Navigate to="/contact" replace />} />

          {/* Public auth entry points now route enquiries to the contact page. */}
          <Route path="/login" element={<Navigate to="/contact" replace />} />
          <Route path="/signup" element={<Navigate to="/contact" replace />} />
          <Route path="/register" element={<Navigate to="/contact" replace />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          {/* Magic-link invite landing — public, validated against the token */}
          <Route path="/accept-invite/:token" element={<AcceptInvite />} />

          <Route path="/teams/select" element={<TeamSelect />} />

          {/* Protected routes:
              1. RequireFirebaseAuth → must be signed in AND email-verified.
              2. RequireTeam         → must have a verified team context. */}
          <Route element={<RequireFirebaseAuth />}>
            <Route element={<RequireTeam />}>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<DashboardEmptyState />} />
                <Route path="channel/:id" element={<ChatWindow />} />
                <Route path="dm/:id" element={<ChatWindow isDM={true} />} />
                <Route path="team/:id" element={<TeamDetails />} />
                <Route path="notes" element={<NotesPage />} />
                <Route path="notes/:id" element={<NotesPage />} />
                <Route path="channels" element={<ChatWindow />} />
                <Route path="teams" element={<TeamView />} />
                <Route path="projects" element={<ProjectKanban />} />
                <Route path="calendar" element={<CalendarView />} />
                <Route path="analytics" element={<AnalyticsDashboard />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
