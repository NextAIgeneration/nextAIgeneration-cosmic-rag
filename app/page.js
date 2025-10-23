'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate button position based on scroll (Sisyphe effect)
  // Initial: center (50vh), scroll down: moves up (0vh), scroll up: back to center
  const buttonTranslateY = Math.max(0, 50 - (scrollY / 10));

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: '#2d2749',
      color: '#c7c9ff',
      minHeight: '100vh',
      position: 'relative'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        body { margin: 0; padding: 0; overflow-x: hidden; }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .section-animate {
          animation: zoomIn 0.6s ease-out forwards;
        }
      `}</style>

      {/* Header */}
      <header style={{
        textAlign: 'center',
        padding: '40px 20px 20px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 800,
          color: '#fff',
          marginBottom: '15px',
          letterSpacing: '-0.02em'
        }}>
          COSMIC RAG
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#BD94BB',
          marginBottom: '10px'
        }}>
          EU Research Analytics Platform
        </p>
        <p style={{
          fontSize: '0.95rem',
          color: '#888',
          marginBottom: '0'
        }}>
          Cognitive extraction from 27 vault files with local AI
        </p>
      </header>

      {/* Floating Documentation Button (Sisyphe Effect) */}
      <div style={{
        position: 'fixed',
        top: `${buttonTranslateY}vh`,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        transition: 'top 0.3s ease-out',
        pointerEvents: 'auto'
      }}>
        <a
          href="/docs"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #E035A2 0%, #bd2d88 100%)',
            color: '#fff',
            padding: '30px 70px',
            borderRadius: '60px',
            fontSize: '1.8rem',
            fontWeight: 700,
            textDecoration: 'none',
            boxShadow: '0 20px 50px rgba(224, 53, 162, 0.5)',
            transition: 'all 0.3s ease',
            border: '3px solid rgba(255, 255, 255, 0.3)'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'scale(1.08)';
            e.target.style.boxShadow = '0 25px 60px rgba(224, 53, 162, 0.7)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 20px 50px rgba(224, 53, 162, 0.5)';
          }}
        >
          📚 View Documentation
        </a>
      </div>

      {/* Main Content - starts below to allow button space */}
      <div style={{ marginTop: '30vh', maxWidth: '900px', margin: '30vh auto 0', padding: '0 20px' }}>

        {/* Stats Cards */}
        <section className="section-animate" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '60px'
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '30px 20px',
            borderRadius: '12px',
            border: '1px solid rgba(224, 53, 162, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', fontWeight: 800, color: '#E035A2', marginBottom: '10px' }}>
              118
            </div>
            <div style={{ fontSize: '0.9rem', color: '#BD94BB' }}>
              Embed Requests
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '30px 20px',
            borderRadius: '12px',
            border: '1px solid rgba(224, 53, 162, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', fontWeight: 800, color: '#E035A2', marginBottom: '10px' }}>
              0%
            </div>
            <div style={{ fontSize: '0.9rem', color: '#BD94BB' }}>
              Error Rate
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '30px 20px',
            borderRadius: '12px',
            border: '1px solid rgba(224, 53, 162, 0.2)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', fontWeight: 800, color: '#E035A2', marginBottom: '10px' }}>
              78ms
            </div>
            <div style={{ fontSize: '0.9rem', color: '#BD94BB' }}>
              Avg Latency
            </div>
          </div>
        </section>

        {/* Featured Neurosymbolic Components */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '30px',
            borderBottom: '2px solid #E035A2',
            paddingBottom: '15px'
          }}>
            Neurosymbolic Features
          </h2>

          <div style={{ display: 'grid', gap: '20px' }}>
            {[
              {
                title: '🔍 Neural RAG',
                desc: 'Semantic search across 115+ chunks (6 documents, 170+ pages) via DuckDB vector embeddings',
                badge: 'AI-Core'
              },
              {
                title: '🧮 Symbolic Computing',
                desc: 'Precision calculations and factual validations via Wolfram Alpha API for guaranteed accuracy',
                badge: 'Symbolic'
              },
              {
                title: '📈 Time Series Forecasting',
                desc: 'Prophet-based predictions for trend analysis and future projections with historical data',
                badge: 'Predictive'
              },
              {
                title: '🤖 LLM Orchestration',
                desc: 'Intelligent Claude/Ollama routing based on complexity and cost for budget optimization',
                badge: 'Orchestration'
              },
              {
                title: '🔌 Ollama Bridge',
                desc: 'FastAPI sidecar service with retry logic and circuit breaker for maximum resilience',
                badge: 'Infrastructure'
              },
              {
                title: '📊 Production Monitoring',
                desc: 'Complete Prometheus + Grafana + Alertmanager stack for production observability',
                badge: 'Monitoring'
              }
            ].map((feature, idx) => (
              <div key={idx} className="section-animate" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '25px 30px',
                borderRadius: '12px',
                border: '1px solid rgba(224, 53, 162, 0.15)',
                animationDelay: `${idx * 0.1}s`
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  color: '#fff',
                  marginBottom: '12px',
                  fontWeight: 600
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: '#BD94BB',
                  lineHeight: 1.7,
                  marginBottom: '12px',
                  fontSize: '0.95rem'
                }}>
                  {feature.desc}
                </p>
                <span style={{
                  display: 'inline-block',
                  background: 'rgba(224, 53, 162, 0.15)',
                  padding: '5px 15px',
                  borderRadius: '20px',
                  color: '#E035A2',
                  fontSize: '0.8rem',
                  fontWeight: 600
                }}>
                  {feature.badge}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '30px',
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
            {[
              { name: 'K3s', category: 'container-orchestration' },
              { name: 'PostgreSQL', category: 'database' },
              { name: 'Prometheus', category: 'monitoring' },
              { name: 'Grafana', category: 'monitoring' },
              { name: 'GitHub', category: 'version-control' },
              { name: 'DuckDB', category: 'database' },
              { name: 'Ollama', category: 'AI-inference' },
              { name: 'Python', category: 'programming-language' },
              { name: 'Docker', category: 'containerization' },
              { name: 'FastAPI', category: 'web-framework' },
              { name: 'Vue.js', category: 'frontend-framework' },
              { name: 'GitLab', category: 'version-control' },
              { name: 'MinIO', category: 'object-storage' },
              { name: 'Qdrant', category: 'vector-database' },
              { name: 'Hugging Face', category: 'AI-models' }
            ].map((tech, idx) => (
              <div key={idx} className="section-animate" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '20px',
                borderRadius: '8px',
                border: '1px solid rgba(224, 53, 162, 0.15)',
                animationDelay: `${idx * 0.05}s`
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

        {/* Footer note about Documentation */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.03)',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid rgba(224, 53, 162, 0.2)',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <p style={{
            fontSize: '0.95rem',
            color: '#BD94BB',
            marginBottom: '15px'
          }}>
            Complete technical documentation, session reports, security checklists,
            <br />and strategic analyses available.
          </p>
          <p style={{
            fontSize: '0.85rem',
            color: '#888'
          }}>
            9+ documents • Audits • Architecture • Security • Reports
          </p>
        </section>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          color: '#666',
          padding: '40px 20px',
          borderTop: '1px solid rgba(224, 53, 162, 0.2)'
        }}>
          <p style={{ marginBottom: '10px', fontSize: '0.9rem' }}>
            100% Local AI • Privacy-First • EU-Sovereign • llama3.1:8b
          </p>
          <p style={{ fontSize: '0.85rem', color: '#BD94BB' }}>
            FFT Cognitive Platform • COSMIC RAG • 2025
          </p>
        </footer>

      </div>
    </div>
  );
}
