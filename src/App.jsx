import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navbar - Barra de navegación */}
      <nav className="navbar">
        <a href="#home" className="logo">Portfolio</a>
        
        <ul className="nav-menu">
          <li><a href="#about">about</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>

      <h1>Mi Portfolio</h1>
    </div>
  )
}

export default App