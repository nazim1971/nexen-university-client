import { useRoutes } from "react-router"
import { routes } from "./routes/AppRoutes"
import { Suspense } from "react";


function App() {

  const route = useRoutes(routes);

  return (
    <Suspense fallback={<div>Loading page...</div>}>
   {route}
  </Suspense>
  )
}

export default App
