import './App.css'
import './index.css'
import Home from './pages/Home.jsx'
import SideBar from './components/SideBar.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <SideBar />
      <div className="flex-1 flex flex-col overflow-y-auto ml-64">
        {/* We add ml-64 to match the expanded sidebar width to prevent overlap */}
        {/* Note: In a fully dynamic version we'd use contextual state to pass the width */}
        <Navbar />
        <div className="p-6">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;