import { createBrowserRouter } from "react-router";

function HomePage() {
  return <div style={{padding: '40px', textAlign: 'center'}}>
    <h1>퀸즈미라클 크리에이티브</h1>
    <p>곧 오픈합니다!</p>
  </div>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
