import ErrorBoundary from "@components/ErrorBoundary";
import { loaderUsers } from "@loader";
import App from "@pages/App";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        loader: loaderUsers,
        id: 'users',
        errorElement: <ErrorBoundary />
    },
])