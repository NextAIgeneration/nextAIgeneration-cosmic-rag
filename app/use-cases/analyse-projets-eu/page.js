'use client';

import { useState } from 'react';

export default function AnalyseProjetsEU() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 66,
      name: "Projet Inspiration - Vision Existentielle",
      type: "EU Research",
      budget: "N/A",
      deadline: "TBD",
      status: "active",
      description: "European research initiative exploring existential questions through AI and cognitive sciences",
      metrics: {
        scope: "EU-wide",
        duration: "Long-term",
        impact: "High philosophical impact",
        tech: ["AI", "Cognitive Sciences", "Philosophy"]
      }
    },
    {
      id: 79,
      name: "Équations du Millénaire : Navier-Stokes",
      type: "EU Research",
      budget: "$1M",
      deadline: "TBD",
      status: "planned",
      description: "Millennium Prize Problem - Navier-Stokes equations mathematical research",
      metrics: {
        scope: "International",
        duration: "Multi-year",
        impact: "Breakthrough mathematics",
        tech: ["Pure Mathematics", "Fluid Dynamics", "Symbolic Computing"]
      }
    },
    {
      id: 24,
      name: "K3s Infrastructure",
      type: "EU Infrastructure",
      budget: "€180-400",
      deadline: "Octobre - Décembre 2025",
      status: "active",
      description: "Lightweight Kubernetes infrastructure for EU-sovereign cloud deployment",
      metrics: {
        scope: "EU deployment",
        duration: "3 months",
        impact: "Production infrastructure",
        tech: ["K3s", "Kubernetes", "Docker", "GitLab"]
      }
    },
    {
      id: 18,
      name: "Hardware Expansion",
      type: "EU Infrastructure",
      budget: "€8500",
      deadline: "Janvier - Mars 2026",
      status: "planned",
      description: "R&D hardware infrastructure expansion for cognitive computing platform",
      metrics: {
        scope: "Lab infrastructure",
        duration: "Q1 2026",
        impact: "Compute capacity +300%",
        tech: ["GPU Clusters", "High-Performance Computing", "Storage"]
      }
    }
  ];

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #2d2749 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#e0e0e0',
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        body { margin: 0; padding: 0; }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <header style={{ marginBottom: '40px' }}>
          <a href="/" style={{
            color: '#E035A2',
            fontSize: '1rem',
            marginBottom: '20px',
            display: 'inline-block',
            textDecoration: 'none'
          }}>
            ← Retour à l'accueil
          </a>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '15px',
            background: 'linear-gradient(135deg, #E035A2 0%, #bd2d88 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            📊 Analyse Projets EU
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#BD94BB',
            lineHeight: 1.6
          }}>
            Extraction automatique de métriques (budget, timeline, livrables) depuis documents COSMIC HORIZON
          </p>
        </header>

        {/* Architecture Diagram */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#E035A2',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(224, 53, 162, 0.3)',
            paddingBottom: '10px'
          }}>
            Pipeline d'Extraction
          </h2>

          <div style={{
            background: 'rgba(0, 0, 0, 0.2)',
            padding: '30px',
            borderRadius: '12px',
            fontFamily: 'monospace',
            color: '#BD94BB',
            lineHeight: 1.8,
            overflowX: 'auto',
            fontSize: '0.9em'
          }}>
            <pre style={{ margin: 0 }}>{`┌─────────────────────────────────────────────────────────┐
│              📄 Documents COSMIC HORIZON               │
│   (6 documents, 170+ pages, markdown + PDF + docs)   │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
        ┌────────────────────────┐
        │  🔍 Neural RAG         │
        │  • DuckDB embeddings   │
        │  • nomic-embed-text    │
        │  • 115+ chunks         │
        │  • Cosine similarity   │
        └────────┬───────────────┘
                 │
                 ▼
        ┌────────────────────────┐
        │  🤖 LLM Orchestrator   │
        │  • Claude API          │
        │  • Ollama (local)      │
        │  • Cost-aware routing  │
        └────────┬───────────────┘
                 │
                 ▼
        ┌────────────────────────┐
        │  📊 Métriques Extraites│
        │                        │
        │  • Budget (€/$)        │
        │  • Timeline            │
        │  • Status              │
        │  • Technologies        │
        │  • Livrables           │
        └────────────────────────┘`}</pre>
          </div>
        </section>

        {/* Projects Grid */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#E035A2',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(224, 53, 162, 0.3)',
            paddingBottom: '10px'
          }}>
            4 Projets EU Analysés
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
            marginTop: '30px'
          }}>
            {projects.map((project) => (
              <div
                key={project.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '2px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedProject(project.id === selectedProject ? null : project.id)}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(224, 53, 162, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(224, 53, 162, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    background: 'rgba(224, 53, 162, 0.2)',
                    color: '#E035A2',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8em',
                    fontWeight: 600
                  }}>
                    ID #{project.id}
                  </div>
                  <div style={{
                    background: project.status === 'active'
                      ? 'rgba(46, 204, 113, 0.2)'
                      : 'rgba(241, 196, 15, 0.2)',
                    color: project.status === 'active' ? '#2ecc71' : '#f1c40f',
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '0.8em',
                    fontWeight: 600
                  }}>
                    {project.status}
                  </div>
                </div>

                <h3 style={{
                  color: '#fff',
                  fontSize: '1.2em',
                  marginBottom: '12px',
                  fontWeight: 600
                }}>
                  {project.name}
                </h3>

                <p style={{
                  color: '#c0c0c0',
                  fontSize: '0.95em',
                  lineHeight: 1.6,
                  marginBottom: '15px'
                }}>
                  {project.description}
                </p>

                <div style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingTop: '15px',
                  marginTop: '15px'
                }}>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ color: '#BD94BB', fontSize: '0.9em' }}>Budget: </span>
                    <span style={{ color: '#E035A2', fontWeight: 600 }}>{project.budget}</span>
                  </div>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ color: '#BD94BB', fontSize: '0.9em' }}>Deadline: </span>
                    <span style={{ color: '#fff' }}>{project.deadline}</span>
                  </div>
                  <div>
                    <span style={{ color: '#BD94BB', fontSize: '0.9em' }}>Type: </span>
                    <span style={{ color: '#fff' }}>{project.type}</span>
                  </div>
                </div>

                {selectedProject === project.id && (
                  <div style={{
                    marginTop: '20px',
                    padding: '20px',
                    background: 'rgba(224, 53, 162, 0.1)',
                    borderRadius: '8px',
                    border: '1px solid rgba(224, 53, 162, 0.3)'
                  }}>
                    <h4 style={{ color: '#E035A2', marginBottom: '12px' }}>📈 Métriques Détaillées</h4>
                    <div style={{ fontSize: '0.9em' }}>
                      <div style={{ marginBottom: '6px' }}>
                        <strong style={{ color: '#BD94BB' }}>Scope:</strong> {project.metrics.scope}
                      </div>
                      <div style={{ marginBottom: '6px' }}>
                        <strong style={{ color: '#BD94BB' }}>Duration:</strong> {project.metrics.duration}
                      </div>
                      <div style={{ marginBottom: '6px' }}>
                        <strong style={{ color: '#BD94BB' }}>Impact:</strong> {project.metrics.impact}
                      </div>
                      <div>
                        <strong style={{ color: '#BD94BB' }}>Tech Stack:</strong>
                        <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
                          {project.metrics.tech.map((tech, idx) => (
                            <span key={idx} style={{
                              background: 'rgba(224, 53, 162, 0.2)',
                              color: '#E035A2',
                              padding: '4px 10px',
                              borderRadius: '12px',
                              fontSize: '0.85em'
                            }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Statistics Table */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#E035A2',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(224, 53, 162, 0.3)',
            paddingBottom: '10px'
          }}>
            📊 Tableau Récapitulatif
          </h2>

          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '0.95em'
            }}>
              <thead>
                <tr style={{
                  background: 'rgba(224, 53, 162, 0.1)',
                  borderBottom: '2px solid rgba(224, 53, 162, 0.3)'
                }}>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#E035A2', fontWeight: 600 }}>ID</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#E035A2', fontWeight: 600 }}>Projet</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#E035A2', fontWeight: 600 }}>Type</th>
                  <th style={{ padding: '15px', textAlign: 'right', color: '#E035A2', fontWeight: 600 }}>Budget</th>
                  <th style={{ padding: '15px', textAlign: 'center', color: '#E035A2', fontWeight: 600 }}>Status</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#E035A2', fontWeight: 600 }}>Deadline</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, idx) => (
                  <tr key={project.id} style={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'transparent'
                  }}>
                    <td style={{ padding: '15px', color: '#E035A2', fontWeight: 600 }}>#{project.id}</td>
                    <td style={{ padding: '15px', color: '#fff' }}>{project.name}</td>
                    <td style={{ padding: '15px', color: '#BD94BB' }}>{project.type}</td>
                    <td style={{ padding: '15px', textAlign: 'right', color: '#E035A2', fontWeight: 600 }}>{project.budget}</td>
                    <td style={{ padding: '15px', textAlign: 'center' }}>
                      <span style={{
                        background: project.status === 'active'
                          ? 'rgba(46, 204, 113, 0.2)'
                          : 'rgba(241, 196, 15, 0.2)',
                        color: project.status === 'active' ? '#2ecc71' : '#f1c40f',
                        padding: '5px 12px',
                        borderRadius: '12px',
                        fontSize: '0.85em',
                        fontWeight: 600
                      }}>
                        {project.status}
                      </span>
                    </td>
                    <td style={{ padding: '15px', color: '#c0c0c0' }}>{project.deadline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{
            marginTop: '30px',
            padding: '20px',
            background: 'rgba(224, 53, 162, 0.08)',
            borderRadius: '8px',
            border: '1px solid rgba(224, 53, 162, 0.2)'
          }}>
            <h3 style={{ color: '#E035A2', marginBottom: '15px', fontSize: '1.2em' }}>💡 Insights</h3>
            <ul style={{ color: '#c0c0c0', lineHeight: 1.8, paddingLeft: '20px' }}>
              <li><strong>Budget Total:</strong> €8,680 - €9,500 (hors projets TBD)</li>
              <li><strong>Projets Actifs:</strong> 2/4 (50%)</li>
              <li><strong>Timeline:</strong> Oct 2025 - Mar 2026</li>
              <li><strong>Focus:</strong> Infrastructure EU-souveraine + Recherche fondamentale</li>
            </ul>
          </div>
        </section>

        {/* Visualisations */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: '40px'
        }}>
          <h2 style={{
            color: '#E035A2',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(224, 53, 162, 0.3)',
            paddingBottom: '10px'
          }}>
            📊 Visualisations
          </h2>

          <div style={{ display: 'grid', gap: '30px', marginTop: '30px' }}>
            <div>
              <h3 style={{ color: '#BD94BB', marginBottom: '15px', fontSize: '1.2em' }}>Timeline Budget & Revenue</h3>
              <img
                src="/diagrams/chart-08-timeline-budget-revenue.png"
                alt="Timeline Budget & Revenue"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  border: '2px solid rgba(224, 53, 162, 0.2)',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
                }}
              />
            </div>

            <div>
              <h3 style={{ color: '#BD94BB', marginBottom: '15px', fontSize: '1.2em' }}>Grants Application Scores</h3>
              <img
                src="/diagrams/chart-09-grants-scores.png"
                alt="Grants Application Scores"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  border: '2px solid rgba(224, 53, 162, 0.2)',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
                }}
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '40px 20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#888'
        }}>
          <p style={{ marginBottom: '10px' }}>
            <a href="/" style={{ color: '#E035A2', textDecoration: 'none', marginRight: '20px' }}>Accueil</a>
            <a href="/docs" style={{ color: '#E035A2', textDecoration: 'none' }}>Documentation</a>
          </p>
          <p style={{ fontSize: '0.9em', color: '#BD94BB' }}>
            FFT Cognitive Platform • COSMIC RAG • 2025
          </p>
        </footer>

      </div>
    </div>
  );
}
