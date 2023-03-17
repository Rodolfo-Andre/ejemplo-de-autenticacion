import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  UserProfilePage,
  MainPage,
  OnlyAuthenticatedPage,
  SignInPage,
  SignUpPage,
} from "./pages";
import { AuthObject } from "./contexts";
import { ForAnonymous, ForAuthenticated } from "./components";
import { HeaderLayout } from "./layout";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#24292f",
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 4,
          backgroundColor: "white",
        },
      },
    },
    MuiButton: {},
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        element: <ForAuthenticated />,
        children: [
          {
            path: "/only-authenticated",
            element: <OnlyAuthenticatedPage />,
          },
        ],
      },
    ],
  },
  {
    element: <ForAuthenticated />,
    children: [
      {
        path: "/my-account",
        element: <UserProfilePage />,
      },
    ],
  },
  {
    element: <ForAnonymous />,
    children: [
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthObject.AuthProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ThemeProvider>
    </AuthObject.AuthProvider>
  </React.StrictMode>
);
