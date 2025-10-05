import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navbar - Barra de navegación */}
      <nav className="navbar">
        <a href="#home" className="logo">Inicio</a>
        
        <ul className="nav-menu">
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
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
      {/* About - Nueva sección */}
      <section id="about" className="about">
        <h2 className="section-title">Sobre mí</h2>
        
        <div className="about-content">
          <p>
            Soy desarrollador con formación en Desarrollo de Aplicaciones Multiplataforma (DAM) 
            y Desarrollo de Aplicaciones Web (DAW). Me apasiona crear soluciones tecnológicas 
            que combinen funcionalidad y diseño.
          </p>
          <p>
            Mi experiencia abarca desde aplicaciones móviles nativas hasta aplicaciones web modernas, 
            siempre buscando las mejores prácticas y tecnologías actuales.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App