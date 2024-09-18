import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/root";
import HomePage from "./Pages/homePage";
import TutoringPage from "./Pages/tutoringPage";
import AfterSchoolPage from "./Pages/afterSchoolPage";
import RegistrationPage from "./Pages/registrationPage";
import ContactMePage from "./Pages/contactMe";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
            path: '/tutoring',
            element: <TutoringPage />
        },
        {
            path: '/afterschool',
            element: <AfterSchoolPage />
        },
        {
            path: '/afterschool/registration',
            element: <RegistrationPage />
        },
        {
            path: 'contact-me',
            element: <ContactMePage />
        }
      ]
    }
])

function App () {

    return (
        <RouterProvider router={router} />
    )
  }
  
  export default App;