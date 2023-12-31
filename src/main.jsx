import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/assets/css/normalize.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import Layout from "./components/layout/Layout";

// Pages
import Index from "./pages/Index";

const router = createBrowserRouter([
    {
        path: "/", // url
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
