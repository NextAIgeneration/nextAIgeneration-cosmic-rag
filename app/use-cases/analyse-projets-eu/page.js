'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function AnalyseProjetsEU() {
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
      height: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #2d2749 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#e0e0e0'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');

        .swiper {
          width: 100%;
          height: 100vh;
        }

        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #E035A2 !important;
          background: rgba(224, 53, 162, 0.2);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
          width: 12px;
          height: 12px;
        }

        .swiper-pagination-bullet-active {
          background: #E035A2;
          box-shadow: 0 0 15px rgba(224, 53, 162, 0.6);
        }

        .swiper-pagination {
          right: 40px !important;
          left: auto !important;
          width: auto !important;
          top: 50% !important;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
      `}</style>

      <Swiper
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {/* Slide 1: Hero */}
        <SwiperSlide>
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
        </SwiperSlide>

        {/* Slide 2: Pipeline */}
        <SwiperSlide>
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
        </SwiperSlide>

        {/* Slide 3: Projects */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%', maxHeight: '80vh', overflowY: 'auto' }}>
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
                    backdropFilter: 'blur(10px)'
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
        </SwiperSlide>

        {/* Slide 4: Visualizations */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%', maxHeight: '80vh', overflowY: 'auto' }}>
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
        </SwiperSlide>

        {/* Slide 5: Mission Accomplie */}
        <SwiperSlide>
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
                  boxShadow: '0 5px 20px rgba(224, 53, 162, 0.4)'
                }}
              >
                Retour à l'accueil
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
