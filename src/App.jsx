import { Suspense, lazy, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PATHS from "./constants/paths";
import "./App.css";
import PageLoading from "./components/PageLoanding";
import DemoRedux from "./pages/DemoRedux";
import NotFoundPage from "./pages/NotFoundPage";

// import MainLayout from "./layouts/MainLayout";
// import Homepage from "./pages/Homepage";
// import ContactPage from "./pages/ContactPage";
// import BlogPage from "./pages/BlogPage";
// import BlogdetailPage from "./pages/BlogdetailPage";
// import PrivacyPage from "./pages/PrivacyPage";
// import AboutPage from "./pages/AboutPage";
// import CoursesPage from "./pages/CoursesPage";
// import CourseOrderPage from "./pages/CourseOrderPage";
// import CourseDetailPage from "./pages/CourseDetailPage";
// import StudentProfilePage from "./pages/StudentProfilePage";
// import MyInfo from "./pages/StudentProfilePage/MyInfo";
// import MyCourse from "./pages/StudentProfilePage/MyCourse";
// import MyPayment from "./pages/StudentProfilePage/Mypayment";
// import PrivateRoute from "./components/PrivateRoute";

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const Homepage = lazy(() => import("./pages/Homepage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogdetailPage = lazy(() => import("./pages/BlogdetailPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const CourseOrderPage = lazy(() => import("./pages/CourseOrderPage"));
const CourseDetailPage = lazy(() => import("./pages/CourseDetailPage"));
const StudentProfilePage = lazy(() => import("./pages/StudentProfilePage"));
const MyInfo = lazy(() => import("./pages/StudentProfilePage/MyInfo"));
const MyCourse = lazy(() => import("./pages/StudentProfilePage/MyCourse"));
const MyPayment = lazy(() => import("./pages/StudentProfilePage/MyPayment"));
const PrivateRoute = lazy(() => import("./components/PrivateRoute"));

/////Parennt component
function App() {
  return (
    ////Children Component

    <Suspense fallback={<PageLoading />}>
      <BrowserRouter>
        {/* //PropChildren Page */}
        {/* <Homepage /> */}
        {/* <BlogPage/> */}
        {/* <BlogdetailPage/> */}
        {/* <PrivacyPage/> */}
        {/* <AboutPage/> */}
        {/* <CoursesPage/> */}
        {/* <CourseOrderPage/> */}
        {/* <CourseDetailPage/> */}
        <Routes>
          <Route path={PATHS.HOME} element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path={PATHS.COURSE.INDEX} element={<CoursesPage />}></Route>
            <Route path={PATHS.COURSE.DETAIL} element={<CourseDetailPage />} />
            <Route path={PATHS.BLOG.INDEX} element={<BlogPage />} />
            <Route path={PATHS.BLOG.DETAIL} element={<BlogdetailPage />} />
            <Route path={"/demo"} element={<DemoRedux/>}/>
            <Route element={<PrivateRoute redirectPath={PATHS.HOME} />}>
              <Route path={PATHS.COURSE.ORDER} element={<CourseOrderPage />} />
              <Route
                path={PATHS.PROFILE.INDEX}
                element={<StudentProfilePage />}
              >
                <Route index element={<MyInfo />} />
                <Route path={PATHS.PROFILE.MY_COURSE} element={<MyCourse />} />
                <Route
                  path={PATHS.PROFILE.MY_PAYMENT}
                  element={<MyPayment />}
                />
              </Route>
            </Route>
            <Route path={PATHS.CONTACT} element={<ContactPage />} />
            <Route path={PATHS.ABOUT} element={<AboutPage />} />
            <Route path={PATHS.PRIVACY} element={<PrivacyPage />} />
          </Route>
          <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>

        <ContactPage />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
