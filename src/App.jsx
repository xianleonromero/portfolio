import './App.css'

function App() {
  return (
    <div className="app">

      {/* Navbar - Barra de navegación */}
      <nav className="navbar">
        <a href="#home" className="logo">Inicio</a>
        
        <ul className="nav-menu">
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>

      {/* Hero - Sección principal */}
      <section id="home" className="hero">
        <div className="hero-content">
          <span className="hero-label">Hola, soy</span>
          <h1>Xián León Romero</h1>
          <p className="hero-subtitle">Desarrollador en formación</p>          
          <p className="hero-description">
            Especializado en backend con Java y Python. Explorando 
            desarrollo frontend con React para ampliar mi stack tecnológico.
          </p>
          <a href="#projects" className="hero-cta">Ver proyectos</a>
        </div>
      </section>

      {/* About*/}
      <section id="about" className="about">
        <h2 className="section-title">Sobre mí</h2>
        
        <div className="about-content">
        <p>
          Técnico Superior en Desarrollo de Aplicaciones Multiplataforma, actualmente cursando 
          DAW para complementar mi formación en desarrollo web. Cuento con conocimientos sólidos 
          en backend (Java, Python, PHP) y bases de datos, ahora enfocándome en el ecosistema 
          frontend moderno.
        </p>
        <p>
          Mi formación me permite abordar proyectos desde diferentes ángulos: aplicaciones móviles, 
          servicios backend y ahora interfaces web. Aprendo rápido y me adapto a nuevas tecnologías 
          según las necesidades del proyecto.
        </p>
        </div>
      </section>

      {/* Skills*/}
      <section id="skills" className="skills">
        <h2 className="section-title">Tecnologías</h2>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-tags">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">PHP</span>
              <span className="skill-tag">Python</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Bases de datos</h3>
            <div className="skill-tags">
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">PostgreSQL</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Herramientas</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2 className="section-title">Proyectos</h2>
        
        <div className="projects-grid">
          
          {/* Proyecto 1: Weather App */}
          <div className="project-card">
            <h3>Weather App</h3>
            <p className="project-description">
              Aplicación del clima que consume la API de OpenWeatherMap. 
              Permite buscar el tiempo actual de cualquier ciudad.
            </p>
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">API REST</span>
              <span className="tech-tag">CSS</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/xianleonromero/weather-app" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://weather-bm8twucav-xianleonromeros-projects.vercel.app" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </div>
          </div>

          {/* Proyecto 2: Todo App */}
          <div className="project-card">
            <h3>Todo App</h3>
            <p className="project-description">
              Gestor de tareas con filtros y persistencia de datos. 
              Permite crear, completar y eliminar tareas.
            </p>
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">localStorage</span>
              <span className="tech-tag">CSS</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/xianleonromero/todo-app" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://todo-n69r8bj3r-xianleonromeros-projects.vercel.app" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </div>
          </div>

          {/* Proyecto 3: Movie Database */}
          <div className="project-card">
            <h3>Movie Database</h3>
            <p className="project-description">
              Buscador de películas usando la API de OMDb. 
              Muestra pósters, títulos y detalles de películas.
            </p>
            <div className="project-tech">
              <span className="tech-tag">React</span>
              <span className="tech-tag">OMDb API</span>
              <span className="tech-tag">CSS Grid</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/xianleonromero/movie-database" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://movie-database-kyrgw6wgf-xianleonromeros-projects.vercel.app" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2 className="section-title">Contacto</h2>
        <p className="contact-text">
          Desarrollador Full Stack disponible para proyectos y colaboraciones.
        </p>
        <div className="contact-content">
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=leonromeroxian@gmail.com"
          className="contact-email"
          target="_blank"
          rel="noopener noreferrer"
        >
          leonromeroxian@gmail.com
        </a>
          
          <div className="social-links">
            <a href="https://github.com/xianleonromero" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/xián-león-romero-7a57b7352/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Diseñado y desarrollado por Xián León Romero</p>
      </footer>      




    </div>
  )
}

export default App