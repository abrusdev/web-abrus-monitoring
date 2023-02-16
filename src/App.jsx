import HomePage from "./pages/home/HomePage";
import AppContext from "./context/AppContext";

function App() {

  const colors = {
    primaryColor: "#181D28",
    secondaryColor: "#CBE7EF",
    whiteColor: "#FDFFFF",
    blackColor: "#212121"
  }

  return (
    <AppContext.Provider value={{
      colors,
      budget: 225000
    }}>
      <HomePage />
    </AppContext.Provider>
  )
}

export default App;