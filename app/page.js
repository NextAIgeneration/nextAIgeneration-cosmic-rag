'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [metadata, setMetadata] = useState(null);
  const [projects, setProjects] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      console.error('Error loading data:', err);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#2d2749',
        color: '#c7c9ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Poppins', sans-serif"
      }}>
        <div style={{ fontSize: '1.5rem' }}>Loading COSMIC Data...</div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#2d2749',
      color: '#c7c9ff',
      fontFamily: "'Poppins', sans-serif",
      padding: '60px 20px'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        body { margin: 0; padding: 0; }
        a { color: #E035A2; text-decoration: none; }
        a:hover { text-decoration: underline; }
      `}</style>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '20px',
            letterSpacing: '-0.02em'
          }}>
            COSMIC RAG
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#BD94BB',
            marginBottom: '40px',
            lineHeight: 1.6
          }}>
            EU Research Analytics Platform<br/>
            Cognitive extraction from 27 vault files with local AI
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginTop: '40px'
          }}>
            <div style={{
              background: '#221E35',
              padding: '30px 20px',
              borderRadius: '12px',
              border: '1px solid rgba(224, 53, 162, 0.2)'
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 600, color: '#E035A2' }}>
                {metadata.success_rate}%
              </div>
              <div style={{ fontSize: '0.9rem', color: '#BD94BB', marginTop: '10px' }}>
                Success Rate
              </div>
            </div>

            <div style={{
              background: '#221E35',
              padding: '30px 20px',
              borderRadius: '12px',
              border: '1px solid rgba(224, 53, 162, 0.2)'
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 600, color: '#E035A2' }}>
                {metadata.total_projects}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#BD94BB', marginTop: '10px' }}>
                EU Projects
              </div>
            </div>

            <div style={{
              background: '#221E35',
              padding: '30px 20px',
              borderRadius: '12px',
              border: '1px solid rgba(224, 53, 162, 0.2)'
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 600, color: '#E035A2' }}>
                {metadata.total_technologies}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#BD94BB', marginTop: '10px' }}>
                Technologies
              </div>
            </div>
          </div>
        </header>

        {/* Projects */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '40px',
            borderBottom: '2px solid #E035A2',
            paddingBottom: '15px'
          }}>
            Featured Projects
          </h2>

          {projects.map((project, idx) => (
            <div key={idx} style={{
              background: '#221E35',
              padding: '30px',
              borderRadius: '12px',
              marginBottom: '20px',
              border: '1px solid rgba(224, 53, 162, 0.15)',
              transition: 'border-color 0.2s'
            }}>
              <h3 style={{
                fontSize: '1.4rem',
                color: '#fff',
                marginBottom: '15px',
                fontWeight: 600
              }}>
                {project.name}
              </h3>
              <p style={{
                color: '#BD94BB',
                lineHeight: 1.7,
                marginBottom: '15px'
              }}>
                {project.description}
              </p>
              <div style={{
                display: 'flex',
                gap: '15px',
                flexWrap: 'wrap',
                fontSize: '0.85rem'
              }}>
                <span style={{
                  background: 'rgba(224, 53, 162, 0.15)',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  color: '#E035A2'
                }}>
                  {project.type}
                </span>
                <span style={{
                  background: 'rgba(199, 201, 255, 0.1)',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  color: '#c7c9ff'
                }}>
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* Technologies */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '40px',
            borderBottom: '2px solid #E035A2',
            paddingBottom: '15px'
          }}>
            Technology Stack
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '15px'
          }}>
            {technologies.map((tech, idx) => (
              <div key={idx} style={{
                background: '#221E35',
                padding: '20px',
                borderRadius: '8px',
                border: '1px solid rgba(224, 53, 162, 0.15)'
              }}>
                <div style={{
                  fontSize: '1.1rem',
                  color: '#fff',
                  marginBottom: '8px',
                  fontWeight: 500
                }}>
                  {tech.name}
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#BD94BB'
                }}>
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          color: '#BD94BB',
          paddingTop: '40px',
          borderTop: '1px solid rgba(224, 53, 162, 0.2)',
          fontSize: '0.9rem'
        }}>
          <p style={{ marginBottom: '10px' }}>
            100% Local AI • Privacy-First • EU-Sovereign • {metadata.model}
          </p>
          <p>
            FFT Cognitive Platform • COSMIC RAG • 2025
          </p>
        </footer>

      </div>
    </div>
  );
}
