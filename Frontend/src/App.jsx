import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./index.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScrollToTop from "./components/ScrollToTop";
import { AchievementNotifier } from "./components/AchievementToast";
import { useTheme } from "./hooks/useTheme";

const LandingPageWithLoader = lazy(() =>
  import("./pages/LandingPageWithLoader")
);
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const StudentDashboard = lazy(() => import("./pages/StudentDashboard"));
const MentorReviewsPage = lazy(() => import("./pages/MentorReviewsPage"));
const HelpPage = lazy(() => import("./pages/HelpPage"));
const MentorDashboard = lazy(() => import("./pages/MentorDashboard"));
const ExplorePage = lazy(() => import("./pages/ExplorePage"));
const JournalPage = lazy(() => import("./pages/JournalPage"));
const ChatPage = lazy(() => import("./pages/ChatPage"));
const SessionsPage = lazy(() => import("./pages/SessionsPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const MentorMenteesPage = lazy(() =>
  import("./pages/MentorMenteesPage")
);
const MentorTasksPage = lazy(() =>
  import("./pages/MentorTasksPage")
);
const MentorMessagesPage = lazy(() =>
  import("./pages/MentorMessagesPage")
);
const MentorGetMenteesPage = lazy(() =>
  import("./pages/MentorGetMenteesPage")
);
const MentorProfilePage = lazy(() =>
  import("./pages/MentorProfilePage")
);
const MentorProfileSetup = lazy(() =>
  import("./pages/MentorProfileSetup")
);
const MentorDetailPage = lazy(() =>
  import("./pages/MentorDetailPage")
);
const BookSession = lazy(() => import("./pages/BookSession"));
const MeetingRoomZego = lazy(() =>
  import("./pages/MeetingRoomZego")
);
const ProfileCompletionPage = lazy(() =>
  import("./pages/ProfileCompletionPage")
);
const StudentTaskPage = lazy(() =>
  import("./pages/StudentTaskPage")
);
const StudentForumPage = lazy(() =>
  import("./pages/StudentForumPage")
);
const MentorJournalPage = lazy(() =>
  import("./pages/MentorJournalPage")
);
const QuestionDetailPage = lazy(() =>
  import("./pages/QuestionDetailPage")
);
const SubmissionsPage = lazy(() =>
  import("./pages/SubmissionsPage")
);
const ConnectedStudents = lazy(() =>
  import("./pages/ConnectedStudents")
);
const StudentConnectedMentors = lazy(() =>
  import("./pages/StudentConnectedMentors")
);
const SolutionsPage = lazy(() =>
  import("./pages/SolutionsPage")
);
const ContactUsPage = lazy(() =>
  import("./pages/ContactUsPage")
);
const TermsOfService = lazy(() =>
  import("./pages/TermsOfService")
);
const AchievementGalleryPage = lazy(() =>
  import("./pages/AchievementGalleryPage")
);

const NotFoundPage = lazy(() =>
  import("./assets/NotFoundPage")
);
const KarmaTest = lazy(() =>
  import("./components/KarmaTest")
);
const ForumPage = lazy(() =>
  import("./components/Forum/ForumPage").then((module) => ({
    default: module.ForumPage,
  }))
);

function App() {
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />

      <AchievementNotifier />

      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            Loading...
          </div>
        }
      >
        <Routes location={location} key={location.key}>
          {/* Root */}
          <Route path="/" element={<LandingPageWithLoader />} />

          {/* Public */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />

          {/* Student */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/explore" element={<ExplorePage />} />
          <Route path="/student/journal" element={<JournalPage />} />
          <Route path="/student/chat" element={<ChatPage />} />
          <Route path="/student/sessions" element={<SessionsPage />} />
          <Route path="/student/profile" element={<ProfilePage />} />
          <Route path="/student/forum" element={<StudentForumPage />} />
          <Route
            path="/student/forum/question/:questionId"
            element={<QuestionDetailPage />}
          />
          <Route path="/student/submissions" element={<SubmissionsPage />} />
          <Route
            path="/complete-profile"
            element={<ProfileCompletionPage />}
          />
          <Route path="/mentor-profile" element={<MentorDetailPage />} />
          <Route path="/booking" element={<BookSession />} />
          <Route path="/student/tasks" element={<StudentTaskPage />} />
          <Route
            path="/student/mentors"
            element={<StudentConnectedMentors />}
          />

          {/* Meeting */}
          <Route
            path="/student/meeting/:roomId/:sessionId"
            element={<MeetingRoomZego />}
          />
          <Route
            path="/mentor/meeting/:roomId/:sessionId"
            element={<MeetingRoomZego />}
          />
          <Route path="/meeting" element={<MeetingRoomZego />} />

          {/* Mentor */}
          <Route path="/mentor/dashboard" element={<MentorDashboard />} />
          <Route path="/mentor/mentees" element={<MentorMenteesPage />} />
          <Route path="/mentor/tasks" element={<MentorTasksPage />} />
          <Route path="/mentor/messages" element={<MentorMessagesPage />} />
          <Route
            path="/mentor/get-mentees"
            element={<MentorGetMenteesPage />}
          />
          <Route path="/mentor/reviews" element={<MentorReviewsPage />} />
          <Route path="/mentor/profile" element={<MentorProfilePage />} />
          <Route
            path="/mentor/profile-setup"
            element={<MentorProfileSetup />}
          />
          <Route path="/mentor/forum" element={<ForumPage />} />
          <Route
            path="/mentor/forum/question/:questionId"
            element={<QuestionDetailPage />}
          />
          <Route path="/mentor/journal" element={<MentorJournalPage />} />
          <Route
            path="/mentor/students"
            element={<ConnectedStudents />}
          />

          {/* Misc */}
          <Route path="/karma-test" element={<KarmaTest />} />
          <Route
            path="/achievements"
            element={<AchievementGalleryPage />}
          />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <ScrollToTop />
    </>
  );
}

export default App;
