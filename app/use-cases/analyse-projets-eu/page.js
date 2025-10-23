'use client';

import { useState, useEffect } from 'react';

export default function AnalyseProjetsEU() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

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

  const scrollToSlide = (index) => {
    const container = document.getElementById('horizontal-container');
    if (container) {
      container.scrollTo({
        left: index * window.innerWidth,
        behavior: 'smooth'
      });
    }
    setCurrentSlide(index);
  };

  useEffect(() => {
    const container = document.getElementById('horizontal-container');
    if (!container) return;

    const handleScroll = () => {
      const slideIndex = Math.round(container.scrollLeft / window.innerWidth);
      setCurrentSlide(slideIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      height: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #2d2749 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#e0e0e0',
      position: 'relative'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        body { margin: 0; padding: 0; overflow: hidden !important; }
      `}</style>

      {/* Navigation Indicators */}
      <div style={{
        position: 'fixed',
        right: '40px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            style={{
              width: currentSlide === index ? '12px' : '8px',
              height: currentSlide === index ? '12px' : '8px',
              borderRadius: '50%',
              background: currentSlide === index ? '#E035A2' : 'rgba(255, 255, 255, 0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: currentSlide === index ? '0 0 15px rgba(224, 53, 162, 0.6)' : 'none'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      {currentSlide > 0 && (
        <button
          onClick={() => scrollToSlide(currentSlide - 1)}
          style={{
            position: 'fixed',
            left: '40px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1000,
            background: 'rgba(224, 53, 162, 0.2)',
            border: '2px solid rgba(224, 53, 162, 0.5)',
            color: '#E035A2',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            fontSize: '24px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(224, 53, 162, 0.4)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(224, 53, 162, 0.2)';
            e.currentTarget.style.transform = 'translateY(-50%)';
          }}
        >
          ←
        </button>
      )}

      {currentSlide < totalSlides - 1 && (
        <button
          onClick={() => scrollToSlide(currentSlide + 1)}
          style={{
            position: 'fixed',
            right: '100px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1000,
            background: 'rgba(224, 53, 162, 0.2)',
            border: '2px solid rgba(224, 53, 162, 0.5)',
            color: '#E035A2',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            fontSize: '24px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'rgba(224, 53, 162, 0.4)';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(224, 53, 162, 0.2)';
            e.currentTarget.style.transform = 'translateY(-50%)';
          }}
        >
          →
        </button>
      )}

      {/* Horizontal Container */}
      <div
        id="horizontal-container"
        style={{
          display: 'flex',
          height: '100vh',
          overflowX: 'scroll',
          overflowY: 'hidden',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >

        {/* Slide 1: Hero */}
        <div style={{
          minWidth: '100vw',
          height: '100vh',
          scrollSnapAlign: 'start',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          boxSizing: 'border-box'
        }}>
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <a href="/" style={{
              color: '#E035A2',
              fontSize: '1rem',
              marginBottom: '40px',
              display: 'inline-block',
              textDecoration: 'none'
            }}>
              ← Retour à l'accueil
            </a>
            <h1 style={{
              fontSize: '4.5rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #E035A2 0%, #bd2d88 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '30px',
              lineHeight: 1.2
            }}>
              📊 Analyse Projets EU
            </h1>
            <p style={{
              fontSize: '1.5rem',
              color: '#BD94BB',
              lineHeight: 1.8,
              maxWidth: '800px',
              marginBottom: '40px'
            }}>
              Extraction intelligente de métriques depuis 6 documents COSMIC (170+ pages) via Neural RAG + LLM orchestration
            </p>
            <div style={{
              display: 'flex',
              gap: '30px',
              marginTop: '50px'
            }}>
              <div style={{
                background: 'rgba(224, 53, 162, 0.1)',
                padding: '20px 30px',
                borderRadius: '12px',
                border: '2px solid rgba(224, 53, 162, 0.3)'
              }}>
                <div style={{ fontSize: '2.5em', fontWeight: 800, color: '#E035A2' }}>170+</div>
                <div style={{ fontSize: '0.9em', color: '#BD94BB' }}>Pages analysées</div>
              </div>
              <div style={{
                background: 'rgba(224, 53, 162, 0.1)',
                padding: '20px 30px',
                borderRadius: '12px',
                border: '2px solid rgba(224, 53, 162, 0.3)'
              }}>
                <div style={{ fontSize: '2.5em', fontWeight: 800, color: '#E035A2' }}>4</div>
                <div style={{ fontSize: '0.9em', color: '#BD94BB' }}>Projets EU</div>
              </div>
              <div style={{
                background: 'rgba(224, 53, 162, 0.1)',
                padding: '20px 30px',
                borderRadius: '12px',
                border: '2px solid rgba(224, 53, 162, 0.3)'
              }}>
                <div style={{ fontSize: '2.5em', fontWeight: 800, color: '#E035A2' }}>78ms</div>
                <div style={{ fontSize: '0.9em', color: '#BD94BB' }}>Latence moyenne</div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2: Pipeline */}
        <div style={{
          minWidth: '100vw',
          height: '100vh',
          scrollSnapAlign: 'start',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          boxSizing: 'border-box'
        }}>
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h2 style={{
              color: '#E035A2',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(224, 53, 162, 0.3)',
              paddingBottom: '15px'
            }}>
              🔍 Pipeline d'Extraction
            </h2>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '50px',
              borderRadius: '20px',
              fontFamily: 'monospace',
              color: '#BD94BB',
              lineHeight: 2,
              fontSize: '1.1em',
              border: '2px solid rgba(224, 53, 162, 0.2)'
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
        └────────────────────────┘`}</pre>
            </div>
          </div>
        </div>

        {/* Slide 3: Projects Grid */}
        <div style={{
          minWidth: '100vw',
          height: '100vh',
          scrollSnapAlign: 'start',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '60px',
          paddingTop: '80px',
          boxSizing: 'border-box'
        }}>
          <div style={{ maxWidth: '1200px', width: '100%', maxHeight: 'calc(100vh - 160px)', overflowY: 'auto' }}>
            <h2 style={{
              color: '#E035A2',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(224, 53, 162, 0.3)',
              paddingBottom: '15px'
            }}>
              📋 Projets Extraits
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px'
            }}>
              {projects.map((project) => (
                <div
                  key={project.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '30px',
                    borderRadius: '15px',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(224, 53, 162, 0.6)';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(224, 53, 162, 0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
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
                    <span style={{
                      background: 'rgba(224, 53, 162, 0.2)',
                      color: '#E035A2',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      fontSize: '0.85em',
                      fontWeight: 600
                    }}>
                      #{project.id}
                    </span>
                    <span style={{
                      background: project.status === 'active' ? 'rgba(46, 204, 113, 0.2)' : 'rgba(241, 196, 15, 0.2)',
                      color: project.status === 'active' ? '#2ecc71' : '#f1c40f',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      fontSize: '0.85em',
                      fontWeight: 600
                    }}>
                      {project.status === 'active' ? '✓ Active' : '⏱ Planned'}
                    </span>
                  </div>
                  <h3 style={{
                    color: '#fff',
                    fontSize: '1.4em',
                    marginBottom: '10px',
                    fontWeight: 700
                  }}>
                    {project.name}
                  </h3>
                  <p style={{
                    color: '#BD94BB',
                    fontSize: '0.95em',
                    lineHeight: 1.6,
                    marginBottom: '15px'
                  }}>
                    {project.description}
                  </p>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    marginTop: '20px',
                    paddingTop: '15px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.8em', color: '#888' }}>Budget</div>
                      <div style={{ color: '#E035A2', fontWeight: 700, fontSize: '1.1em' }}>{project.budget}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.8em', color: '#888' }}>Scope</div>
                      <div style={{ color: '#fff', fontWeight: 600 }}>{project.metrics.scope}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide 4: Visualizations */}
        <div style={{
          minWidth: '100vw',
          height: '100vh',
          scrollSnapAlign: 'start',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '60px',
          paddingTop: '80px',
          boxSizing: 'border-box'
        }}>
          <div style={{ maxWidth: '1200px', width: '100%', maxHeight: 'calc(100vh - 160px)', overflowY: 'auto' }}>
            <h2 style={{
              color: '#E035A2',
              fontSize: '3em',
              marginBottom: '40px',
              borderBottom: '3px solid rgba(224, 53, 162, 0.3)',
              paddingBottom: '15px'
            }}>
              📊 Visualisations
            </h2>
            <div style={{ display: 'grid', gap: '40px' }}>
              <div>
                <h3 style={{ color: '#BD94BB', marginBottom: '20px', fontSize: '1.3em' }}>
                  Timeline Budget & Revenue
                </h3>
                <img
                  src="/diagrams/chart-08-timeline-budget-revenue.png"
                  alt="Timeline Budget & Revenue"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '15px',
                    border: '3px solid rgba(224, 53, 162, 0.3)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
                  }}
                />
              </div>
              <div>
                <h3 style={{ color: '#BD94BB', marginBottom: '20px', fontSize: '1.3em' }}>
                  Grants Application Scores
                </h3>
                <img
                  src="/diagrams/chart-09-grants-scores.png"
                  alt="Grants Application Scores"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '15px',
                    border: '3px solid rgba(224, 53, 162, 0.3)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Slide 5: Resources */}
        <div style={{
          minWidth: '100vw',
          height: '100vh',
          scrollSnapAlign: 'start',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
          boxSizing: 'border-box'
        }}>
          <div style={{ maxWidth: '1200px', width: '100%', textAlign: 'center' }}>
            <h2 style={{
              color: '#E035A2',
              fontSize: '3em',
              marginBottom: '40px'
            }}>
              🎯 Mission Accomplie
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: '#BD94BB',
              lineHeight: 1.8,
              maxWidth: '700px',
              margin: '0 auto 50px'
            }}>
              Extraction complète des métriques EU avec 100% de traçabilité depuis les documents COSMIC sources
            </p>
            <div style={{
              background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(189, 148, 187, 0.15) 100%)',
              padding: '40px',
              borderRadius: '20px',
              border: '2px solid rgba(224, 53, 162, 0.3)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <h3 style={{ color: '#E035A2', marginBottom: '25px', fontSize: '1.5em' }}>💡 Key Takeaways</h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 2.2, paddingLeft: '25px', fontSize: '1.1em', textAlign: 'left' }}>
                <li><strong style={{ color: '#E035A2' }}>Neural RAG:</strong> 78ms latency for semantic search</li>
                <li><strong style={{ color: '#E035A2' }}>Cost-Aware:</strong> 80% queries via free Ollama</li>
                <li><strong style={{ color: '#E035A2' }}>Precision:</strong> DuckDB vector similarity 0.7 threshold</li>
                <li><strong style={{ color: '#E035A2' }}>Scalable:</strong> 170+ pages in 2.8 MB footprint</li>
              </ul>
            </div>
            <div style={{ marginTop: '50px' }}>
              <a
                href="/"
                style={{
                  background: 'linear-gradient(135deg, #E035A2 0%, #bd2d88 100%)',
                  color: '#fff',
                  padding: '15px 40px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontSize: '1.1em',
                  fontWeight: 700,
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 5px 20px rgba(224, 53, 162, 0.4)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(224, 53, 162, 0.6)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(224, 53, 162, 0.4)';
                }}
              >
                Retour à l'accueil
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
