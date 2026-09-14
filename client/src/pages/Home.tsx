export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="hero-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            StellarMadic
          </h1>
          <p className="hero-intro text-lg sm:text-xl mb-8 leading-relaxed">
            Creative designer and developer crafting digital experiences
          </p>
          <a
            href="#work"
            className="inline-block px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:opacity-80 transition"
          >
            View Work
          </a>
        </div>
      </section>

      {/* Fit Section - Principles */}
      <section className="fit-section py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-4xl sm:text-5xl font-bold mb-16 text-center">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="principle-row p-6 border border-slate-200 dark:border-slate-700 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Principle {i}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Add your principles, values, or expertise here.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="work-section py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-4xl sm:text-5xl font-bold mb-16 text-center">
            Recent Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Project One', description: 'Add your project details' },
              { title: 'Project Two', description: 'Add your project details' },
            ].map((work) => (
              <div
                key={work.title}
                className="work-card p-8 border border-slate-200 dark:border-slate-700 rounded-lg hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{work.description}</p>
                <a href="#" className="text-blue-600 hover:underline">View →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-heading text-4xl sm:text-5xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-lg mb-8 text-slate-600 dark:text-slate-400">
            Let's collaborate on something amazing.
          </p>
          <a
            href="mailto:your-email@example.com"
            className="inline-block px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:opacity-80 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700">
        <p>© 2024 StellarMadic. All rights reserved.</p>
      </footer>
    </main>
  );
}
