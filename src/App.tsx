import MainLayout from "./components/layouts/MainLayout"
import ProtectedRoute from "./components/layouts/ProtectedRoute"

function App() {

  return (
    <>
      <ProtectedRoute role={undefined}>
        <MainLayout />
      </ProtectedRoute>
    </>
  )
}

export default App
