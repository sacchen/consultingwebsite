import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b fixed w-full bg-white z-10">
        <nav className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-medium text-gray-900">Samuel Chen</div>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('who')} className="text-gray-900 hover:text-blue-600">Who I Help</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-900 hover:text-blue-600">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-900 hover:text-blue-600">Pricing</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-900 hover:text-blue-600">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-900 hover:text-blue-600">Contact</button>
            </div>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="md:hidden pt-4 pb-3 border-t mt-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('who')} className="text-gray-900 hover:text-blue-600 py-2">Who I Help</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-900 hover:text-blue-600 py-2">Services</button>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-900 hover:text-blue-600 py-2">Pricing</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-900 hover:text-blue-600 py-2">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-900 hover:text-blue-600 py-2">Contact</button>
              </div>
            </div>
          )}
        </nav>
      </header>
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-12">
        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Intelligent Support Without The Overhead</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl">
            I provide research, documentation, and representation services for professionals who need reliable support without committing to full-time staff or expensive consulting firms.
          </p>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="w-full sm:w-auto inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Schedule Free Consultation
          </button>
        </div>

        {/* Who I Help */}
        <section id="who" className="mb-16 pt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">Who I Help</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Technical Teams</h3>
              <p className="text-gray-700">Need someone to handle documentation and meeting notes while you focus on building? I'll attend your meetings, take detailed notes, and keep your docs organized.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Business & Founders</h3>
              <p className="text-gray-700">Looking for research support and professional representation? I'll help with market research, meeting attendance, and creating clear documentation to move your projects forward.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Policy & Research</h3>
              <p className="text-gray-700">Need help analyzing complex information? I'll review documents, create summary briefs, and handle stakeholder communications to support your work.</p>
            </div>
          </div>
        </section>
        {/* Value Props */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">What Makes Me Different</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 h-12 w-12 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Math & Analysis</h3>
                <p className="text-gray-700">Math major at Berkeley City College. I bring structured thinking to every task.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 h-12 w-12 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Tech & Policy Experience</h3>
                <p className="text-gray-700">From City Council work to software development, I bridge communication gaps.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 h-12 w-12 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Clear Communication</h3>
                <p className="text-gray-700">Experience representing organizations professionally in meetings and writing.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services */}
        <section id="services" className="mb-16 pt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">How I Help</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Research & Analysis</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Research specific topics or decisions</li>
                <li>• Create clear, actionable summaries</li>
                <li>• Present key findings and tradeoffs</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Meeting Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Attend meetings as your representative</li>
                <li>• Ask questions on your behalf</li>
                <li>• Provide clear meeting takeaways</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Documentation</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Create technical documentation</li>
                <li>• Edit and refine content for clarity</li>
                <li>• Maintain consistent, accessible records</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Communication</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Draft professional emails</li>
                <li>• Prepare stakeholder updates</li>
                <li>• Handle routine correspondence</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example Projects */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">Past Projects</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Policy Analysis</h3>
              <p className="text-gray-700">At Berkeley City Council, I sent letters of support to over 100 state legislators and represented the office at community events.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Technical Documentation</h3>
              <p className="text-gray-700">For Unhinge.dating, I handled documentation for new features and managed merging branches.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Project Management</h3>
              <p className="text-gray-700">I've managed a two-month AI safety research hub, organizing dinners and technical workshops.</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mb-16 pt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900">Simple Pricing</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Hourly</h3>
              <p className="text-gray-700 mb-4">For specific tasks</p>
              <p className="text-2xl font-bold mb-4 text-gray-900">$50/hour</p>
              <ul className="space-y-2 text-gray-700">
                <li>• 4-hour minimum</li>
                <li>• Perfect for meetings</li>
                <li>• Flexible scheduling</li>
                <li>• Pay as you go</li>
              </ul>
            </div>
            <div className="border p-6 rounded-lg bg-blue-50">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Monthly</h3>
              <p className="text-gray-700 mb-4">Best for regular needs</p>
              <p className="text-2xl font-bold mb-4 text-gray-900">$900/month</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Up to 20 hours</li>
                <li>• Priority scheduling</li>
                <li>• Regular updates</li>
                <li>• Consistent support</li>
              </ul>
            </div>
            <div className="border p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Project</h3>
              <p className="text-gray-700 mb-4">For defined scope</p>
              <p className="text-2xl font-bold mb-4 text-gray-900">From $500</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Clear deliverables</li>
                <li>• Fixed timeline</li>
                <li>• Set milestones</li>
                <li>• Known investment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mb-16 pt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">About Me</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              I'm studying math at Berkeley City College, focusing on machine learning applications.
              Currently I'm exploring convex optimization, scientific institutions, and compute markets.
              I aim to blend machine learning, policy, and operations to make the world better.
            </p>
            <p>
              I've worn many hats - from helping draft legislation at Berkeley City Council to building features for dating apps.
              My journey has taken me from managing AI research hubs and running technical bootcamps to representing organizations at community meetings.
              I enjoy being the bridge between technical teams and stakeholders, turning complex ideas into clear action items.
              Whether I'm analyzing policy, documenting systems, or coordinating projects, I bring both careful analysis and clear communication to every challenge.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Get Started</h2>
          <p className="text-gray-700 mb-6">
            Let's talk about how I can help:
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-blue-600 font-bold text-xl mb-2">1</div>
              <h3 className="font-semibold mb-2 text-gray-900">Free Consultation</h3>
              <p className="text-gray-700">Brief chat to understand your needs</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-blue-600 font-bold text-xl mb-2">2</div>
              <h3 className="font-semibold mb-2 text-gray-900">Simple Plan</h3>
              <p className="text-gray-700">Clear proposal based on your needs</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-blue-600 font-bold text-xl mb-2">3</div>
              <h3 className="font-semibold mb-2 text-gray-900">Start Small</h3>
              <p className="text-gray-700">Begin with a single task to ensure fit</p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:schenconsult@gmail.com"
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  firstinitial lastname consult at gmail dot com
                </a>
              </p>

              <p className="text-gray-700">
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/samuel-c-72936623b/"
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Profile
                </a>
              </p>

              <div className="pt-4 mt-4 border-t border-gray-100">
                <p className="text-gray-900 font-medium mb-4">Schedule a Quick Chat</p>
                <button
                  onClick={() => window.open("https://calendly.com/schentalk/30min", "_blank")}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 
                           transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Schedule 30-min Call
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center text-gray-600">
          © {new Date().getFullYear()} Samuel Chen. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default HomePage;