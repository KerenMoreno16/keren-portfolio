import profilePhoto from '../assets/photoProfile.png'

export default function PortfolioLandingPage() {

  const certifications = [
    'Microsoft Azure AZ-900',
    'Microsoft Azure DP-900',
    'Microsoft Azure AI-900',
  ]

  const skills = [
    'Python',
    'SQL',
    'React',
    'Node.js',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Databricks',
    'Snowflake',
    'Apache Airflow',
    'AWS',
    'Azure',
    'Google Cloud',
    'IBM Cloud',
    'ETL/ELT Pipelines',
    'Data Migration',
    'Cron Jobs',
    'REST APIs',
    'Git/GitHub',
  ]

  const projects = [
    {
      title: 'Cloud Data Pipeline Platform',
      description:
        'Designed and orchestrated scalable ETL pipelines using Python, Airflow, cron jobs, and cloud services to automate data ingestion, transformation, and reporting workflows.',
      stack: 'Python • Airflow • Azure • Databricks • SQL',
    },
    {
      title: 'Analytics Dashboard Application',
      description:
        'Developed a responsive analytics dashboard focused on KPI visualization, business insights, and real-time reporting using React and modern frontend technologies.',
      stack: 'React • JavaScript • APIs • Charts',
    },
    {
      title: 'Full Stack Task Management App',
      description:
        'Built a full stack CRUD application with authentication, REST APIs, and database integration to manage tasks and workflow operations.',
      stack: 'React • Node.js • MongoDB • Express',
    },
  ]

  return (
    <div className="min-h-screen bg-[#07111f] text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 mb-8">
              Data Engineer • Cloud Specialist • Web Developer
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
              Keren Moreno
            </h1>

            <h2 className="text-2xl lg:text-3xl text-cyan-300 font-semibold mb-8">
              Data Engineer with 5+ Years of Experience & Web Developer
            </h2>

            <p className="text-lg text-slate-300 leading-8 max-w-2xl mb-10">
              Experienced Data Engineer specialized in cloud platforms, data migration, ETL/ELT pipelines, workflow automation, and analytics solutions. Strong background delivering scalable and reliable data architectures using modern cloud ecosystems and data engineering best practices. Additionally experienced in frontend and full stack web development with React, Node.js, and JavaScript.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                className="bg-cyan-400 text-black font-semibold px-7 py-4 rounded-2xl hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-white/20 px-7 py-4 rounded-2xl hover:bg-white/10 transition"
              >
                Contact Me
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-cyan-300 font-bold text-xl">5+</p>
                <p className="text-slate-300">Years in Data</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-cyan-300 font-bold text-xl">1.5</p>
                <p className="text-slate-300">Years as Dev</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-cyan-300 font-bold text-xl">4</p>
                <p className="text-slate-300">Cloud Platforms</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-cyan-300 font-bold text-xl">3</p>
                <p className="text-slate-300">Azure Certifications</p>
              </div>
            </div>
          </div>

          {/* PHOTO SECTION */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 rounded-full" />

              <div className="relative w-[340px] h-[420px] rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Keren Moreno"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </p>

            <h3 className="text-4xl font-bold mb-8">
              Professional Data & Cloud Engineering Expertise
            </h3>

            <div className="space-y-6 text-slate-300 leading-8 text-lg">
              <p>
                Experienced in designing and maintaining modern data solutions focused on scalability, automation, performance, and reliability across enterprise environments.
              </p>

              <p>
                Skilled in developing and orchestrating robust ETL/ELT workflows using Python, Apache Airflow, scheduled jobs, and cloud-native services to support business intelligence and analytics operations.
              </p>

              <p>
                Strong expertise in cloud computing platforms including IBM Cloud, AWS, Microsoft Azure, and Google Cloud, with hands-on experience supporting data migration initiatives, pipeline optimization, and distributed data processing.
              </p>

              <p>
                Background in analytics engineering and statistical analysis using Python, transforming raw datasets into actionable business insights through automation and visualization.
              </p>

              <p>
                Additionally experienced in web application development using React, Node.js, JavaScript, HTML, and CSS, building responsive and modern user experiences.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h4 className="text-2xl font-bold mb-6">Cloud & Data Platforms</h4>

              <div className="flex flex-wrap gap-3">
                {[
                  'IBM Cloud',
                  'AWS',
                  'Microsoft Azure',
                  'Google Cloud Platform',
                  'Databricks',
                  'Snowflake',
                ].map((item) => (
                  <span
                    key={item}
                    className="bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 px-4 py-2 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h4 className="text-2xl font-bold mb-6">Certifications</h4>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-4 border border-white/10 rounded-2xl p-4"
                  >
                    <div className="w-3 h-3 rounded-full bg-cyan-400" />
                    <p>{cert}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h4 className="text-2xl font-bold mb-6">Languages</h4>

              <div className="space-y-3 text-slate-300">
                <p>🇧🇷 Portuguese — Native</p>
                <p>🇺🇸 English — Fluent</p>
                <p>🇪🇸 Spanish — Basic</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-y border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-4">
              Technical Skills
            </p>

            <h3 className="text-4xl font-bold">
              Technologies & Tools
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white/5 border border-white/10 px-5 py-3 rounded-2xl hover:border-cyan-400/40 hover:bg-cyan-400/10 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-4">
            Portfolio
          </p>

          <h3 className="text-4xl font-bold mb-6">
            Featured Projects
          </h3>

          <p className="text-slate-300 text-lg max-w-3xl leading-8">
            A selection of projects focused on cloud engineering, data platforms, analytics, and full stack web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:border-cyan-400/30 transition duration-300"
            >
              <div className="h-48 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 mb-6 flex items-center justify-center text-center p-6">
                <h4 className="text-2xl font-bold">{project.title}</h4>
              </div>

              <p className="text-slate-300 leading-7 mb-6">
                {project.description}
              </p>

              <div className="text-cyan-300 text-sm mb-8">
                {project.stack}
              </div>

              <div className="flex gap-4">
                <button className="bg-cyan-400 text-black font-semibold px-5 py-3 rounded-xl hover:scale-105 transition">
                  Live Demo
                </button>

                <button className="border border-white/10 px-5 py-3 rounded-xl hover:bg-white/10 transition">
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-y border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-16">
            <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-4">
              Experience
            </p>

            <h3 className="text-4xl font-bold">
              Professional Background
            </h3>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-2xl font-bold">
                    Data Engineer
                  </h4>

                  <p className="text-cyan-300">
                    Cloud Data Engineering • Analytics • Automation
                  </p>
                </div>

                <span className="border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 px-4 py-2 rounded-full text-sm w-fit">
                  5+ Years Experience
                </span>
              </div>

              <ul className="space-y-4 text-slate-300 leading-8 list-disc list-inside">
                <li>
                  Developed scalable data pipelines and automated workflows using Python, Airflow, scheduled jobs, and cloud-native technologies.
                </li>

                <li>
                  Supported enterprise-level data migration initiatives focused on performance optimization, reliability, and data integrity.
                </li>

                <li>
                  Built analytical solutions and statistical models using Python for business reporting and operational insights.
                </li>

                <li>
                  Worked with modern cloud ecosystems including IBM Cloud, Azure, AWS, and Google Cloud Platform.
                </li>

                <li>
                  Collaborated with cross-functional teams to improve data accessibility, process automation, and decision-making capabilities.
                </li>

                <li>
                  Experienced working remotely in professional environments and contributing to international projects with multicultural collaboration and global communication exposure.
                </li>

              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-2xl font-bold">
                    Web Developer
                  </h4>

                  <p className="text-cyan-300">
                    Frontend & Full Stack Development
                  </p>
                </div>

                <span className="border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 px-4 py-2 rounded-full text-sm w-fit">
                  1.5 Years Experience
                </span>
              </div>

              <ul className="space-y-4 text-slate-300 leading-8 list-disc list-inside">
                <li>
                  Developed responsive and modern web applications using React, JavaScript, HTML, CSS, and Node.js.
                </li>

                <li>
                  Built reusable frontend components focused on usability, responsiveness, and maintainable architecture.
                </li>

                <li>
                  Integrated APIs and backend services to support dynamic and interactive user experiences.
                </li>

                <li>
                  Participated in collaborative development environments using Git and agile methodologies.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-white/10 rounded-[40px] p-10 lg:p-16 text-center">
          <p className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h3 className="text-4xl lg:text-5xl font-bold mb-8">
            Let’s Build Something Great Together
          </h3>

          <p className="text-slate-300 text-lg leading-8 max-w-3xl mx-auto mb-10">
            Open to international opportunities in Data Engineering, Cloud Engineering, Analytics, and Web Development.
          </p>

        <div className="flex flex-wrap justify-center gap-4">
        <a
            href="https://www.linkedin.com/in/keren-moreno/"
            target="_blank"
            className="bg-cyan-400 text-black font-semibold px-8 py-4 rounded-2xl hover:scale-105 transition"
        >
            LinkedIn
        </a>

        <a
            href="https://github.com/KerenMoreno16"
            target="_blank"
            className="border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition"
        >
            GitHub
        </a>

        <a
            href="mailto:kerenmoreno.sistemas@gmail.com"
            className="border border-white/10 px-8 py-4 rounded-2xl hover:bg-white/10 transition"
        >
            Email
        </a>
        </div>
        </div>
      </section>
    </div>
  )
}
