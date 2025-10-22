// pages/index.js
// COSMIC RAG - Main Landing Page
// Copy this to your Next.js project
'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [metadata, setMetadata] = useState(null);
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load all data
    Promise.all([
      fetch('/data/metadata.json').then(r => r.json()),
      fetch('/data/projects.json').then(r => r.json()),
      fetch('/data/technologies.json').then(r => r.json())
    ]).then(([meta, proj, tech]) => {
      setMetadata(meta);
      setProjects(proj.projects || proj);
      setTechnologies(tech.technologies || tech);
      setLoading(false);
    }).catch(err => {
      console.error("Error loading data:", err);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="text-white text-2xl">Loading COSMIC Data...</div>
      </div>
    );
  }

  // Calculate stats
  const euProjects = projects.filter(p => p.type.includes('EU')).length;
  const activeProjects = projects.filter(p => p.status === 'active').length;
  const top5Tech = technologies.slice(0, 5);

  return (
    

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">

        {/* Hero Section */}
        <header className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            COSMIC RAG
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Cognitive Orchestration for Systematic Modeling and Intelligent Computing
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              100% Local AI
            </span>
            <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              Privacy-First
            </span>
            <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              ARM64 Optimized
            </span>
            <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              €0 Cloud Costs
            </span>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2">{metadata.success_rate}%</div>
              <div className="text-gray-300">Extraction Success</div>
              <div className="text-sm text-gray-400 mt-2">
                {metadata.files_processed} files • {metadata.model}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2">{metadata.total_projects}</div>
              <div className="text-gray-300">Total Projects</div>
              <div className="text-sm text-gray-400 mt-2">
                {euProjects} EU-eligible • {activeProjects} active
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2">{metadata.total_technologies}</div>
              <div className="text-gray-300">Technologies</div>
              <div className="text-sm text-gray-400 mt-2">
                Unique stack items identified
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-5xl font-bold mb-2">€0</div>
              <div className="text-gray-300">Cloud Costs</div>
              <div className="text-sm text-gray-400 mt-2">
                100% local AI processing
              </div>
            </div>

          </div>
        </section>

        {/* Featured Projects */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(p => p.type.includes('EU') || p.status === 'active')
              .slice(0, 6)
              .map(project => (
                <div
                  key={project.id}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition"
                >
                  <h3 className="text-xl font-bold mb-3">{project.name}</h3>

                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span className="px-3 py-1 bg-purple-500/30 rounded-full text-xs">
                      {project.type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      project.status === 'active' ? 'bg-green-500/30' :
                      project.status === 'planned' ? 'bg-blue-500/30' :
                      'bg-gray-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="text-sm text-gray-300 space-y-2">
                    <div><strong>Budget:</strong> {project.budget}</div>
                    <div><strong>Deadline:</strong> {project.deadline}</div>
                    <div className="text-xs text-gray-400 mt-4 truncate">
                      Source: {project.source}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="text-center mt-8">
            <a
              href="/projects"
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:shadow-lg transition"
            >
              View All {metadata.total_projects} Projects →
            </a>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Technology Stack</h2>

          <div className="flex justify-center gap-4 flex-wrap">
            {top5Tech.map(tech => (
              <div
                key={tech.id}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md rounded-2xl border border-white/20 hover:scale-105 transition"
              >
                <div className="text-lg font-bold">{tech.name}</div>
                <div className="text-sm text-gray-400">{tech.mentions} mentions</div>

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 rounded text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="/technologies"
              className="inline-block px-8 py-3 bg-white/10 backdrop-blur-md rounded-full font-semibold border border-white/20 hover:bg-white/15 transition"
            >
              Explore Full Stack ({metadata.total_technologies} technologies) →
            </a>
          </div>
        </section>

        {/* Key Features */}
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-4xl font-bold mb-12 text-center">Why COSMIC?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="text-center">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3">100% Local AI</h3>
              <p className="text-gray-300">
                9 Ollama models running on-device. Zero cloud dependency. Complete privacy.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold mb-3">Enterprise Security</h3>
              <p className="text-gray-300">
                1Password integration, audit trails, EU compliance. No data leaves your infrastructure.
              </p>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">ARM64 Optimized</h3>
              <p className="text-gray-300">
                Native Apple Silicon performance. OrbStack orchestration. Blazing fast inference.
              </p>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Dive into {metadata.total_projects} projects and {metadata.total_technologies} technologies
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="/analytics"
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:shadow-xl transition"
              >
                View Analytics Dashboard
              </a>
              <a
                href="/projects"
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full font-bold hover:bg-white/20 transition"
              >
                Browse Projects
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 text-center text-gray-400 border-t border-white/10">
          <p className="mb-2">
            Powered by <strong className="text-white">{metadata.model}</strong> •
            Last updated: {new Date(metadata.timestamp).toLocaleDateString()}
          </p>
          <p className="text-sm">
            FFT Cognitive Platform • COSMIC RAG • 2025
          </p>
        </footer>

      </div>
    </>
  );
}
