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
      {/* Hero - Sección principal */}
      <section id="home" className="hero">
        <div className="hero-content">
          <span className="hero-label">Hola, soy</span>
          <h1>Xián León Romero</h1>
          <p className="hero-subtitle">Full Stack Developer</p>
          <p className="hero-description">
            Desarrollo aplicaciones web y móviles con React, Java y más tecnologías modernas
          </p>
          <a href="#projects" className="hero-cta">Ver proyectos</a>
        </div>
      </section>
    </div>
  )
}

export default App