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

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #2d2749 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#e0e0e0',
      minHeight: '100vh'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        body { margin: 0; padding: 0; overflow-x: hidden; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>

        {/* Header */}
        <header style={{
          textAlign: 'center',
          padding: '60px 20px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '20px',
          marginBottom: '40px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h1 style={{
            fontSize: '3.5em',
            background: 'linear-gradient(135deg, #E035A2 0%, #bd2d88 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px',
            fontWeight: 800
          }}>
            🧠 COSMIC RAG
          </h1>
          <p style={{
            fontSize: '1.3em',
            color: '#BD94BB',
            marginBottom: '30px'
          }}>
            Système Neurosymbolique pour Retrieval Augmented Generation
          </p>
          <p style={{
            fontSize: '1em',
            color: '#888',
            marginBottom: '30px'
          }}>
            Combinant Neural Retrieval (DuckDB), Symbolic Computing (Wolfram Alpha), et Time Series Forecasting (Prophet)
          </p>

          {/* Badges uniformisés - TOUS MEME COULEUR */}
          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '30px'
          }}>
            {[
              '✅ Production Ready',
              '0% Erreurs',
              '78ms Latence Moyenne',
              '100% Local',
              '0€ Coût'
            ].map((badge, idx) => (
              <span
                key={idx}
                style={{
                  padding: '8px 16px',
                  background: 'rgba(224, 53, 162, 0.2)',
                  border: '1px solid rgba(224, 53, 162, 0.4)',
                  borderRadius: '20px',
                  fontSize: '0.9em',
                  color: '#E035A2',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(224, 53, 162, 0.3)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 5px 15px rgba(224, 53, 162, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'rgba(224, 53, 162, 0.2)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            marginTop: '40px',
            flexWrap: 'wrap'
          }}>
            <a
              href="/docs"
              style={{
                padding: '15px 40px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.1em',
                background: 'linear-gradient(135deg, #E035A2 0%, #bd2d88 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 10px 30px rgba(224, 53, 162, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 15px 40px rgba(224, 53, 162, 0.5)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 30px rgba(224, 53, 162, 0.3)';
              }}
            >
              📖 Documentation Complète
            </a>
            <a
              href="https://github.com/NextAIgeneration/nextAIgeneration-cosmic-rag"
              style={{
                padding: '15px 40px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.1em',
                background: 'transparent',
                color: '#E035A2',
                border: '2px solid #E035A2',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(224, 53, 162, 0.1)';
                e.target.style.transform = 'translateY(-3px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              💻 Code Source GitHub
            </a>
          </div>
        </header>

        {/* Vue d'Ensemble */}
        <section className="animate-on-scroll" style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          margin: '30px 0',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            color: '#E035A2',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(224, 53, 162, 0.3)',
            paddingBottom: '10px'
          }}>
            🎯 Vue d'Ensemble
          </h2>
          <p style={{
            color: '#c0c0c0',
            fontSize: '1.05em',
            lineHeight: 1.8,
            marginBottom: '30px'
          }}>
            COSMIC RAG est un système neurosymbolique de pointe qui combine trois paradigmes d'IA pour fournir des réponses
            contextuelles, précises et vérifiables aux requêtes complexes sur le projet COSMIC HORIZON.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            marginTop: '30px'
          }}>
            {[
              {
                icon: '🔍',
                title: 'Neural RAG',
                desc: 'Recherche sémantique dans 115+ chunks (6 documents, 170+ pages) via embeddings vectoriels DuckDB.'
              },
              {
                icon: '🧮',
                title: 'Symbolic Computing',
                desc: 'Calculs précis et validations factuelles via Wolfram Alpha API pour garantir l\'exactitude.'
              },
              {
                icon: '📈',
                title: 'Forecasting',
                desc: 'Prédictions time-series avec Prophet pour analyses de tendances et projections futures.'
              },
              {
                icon: '🤖',
                title: 'LLM Orchestration',
                desc: 'Routage intelligent Claude/Ollama selon complexité et coût pour optimisation budgétaire.'
              },
              {
                icon: '🔌',
                title: 'Ollama Bridge',
                desc: 'Service sidecar FastAPI avec retry logic et circuit breaker pour résilience maximale.'
              },
              {
                icon: '📊',
                title: 'Monitoring',
                desc: 'Stack complète Prometheus + Grafana + Alertmanager pour observabilité production.'
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'transform 0.3s, border-color 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(224, 53, 162, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <h4 style={{
                  color: '#E035A2',
                  fontSize: '1.2em',
                  marginBottom: '15px'
                }}>
                  {feature.icon} {feature.title}
                </h4>
                <p style={{
                  color: '#c0c0c0',
                  fontSize: '1em',
                  lineHeight: 1.6
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Métriques Production */}
        <section className="animate-on-scroll" style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          margin: '30px 0',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            color: '#E035A2',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(224, 53, 162, 0.3)',
            paddingBottom: '10px'
          }}>
            📈 Métriques Production Validées
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {[
              { value: '118', label: 'Embed Requests' },
              { value: '0%', label: 'Taux d\'Erreurs' },
              { value: '78ms', label: 'Latence Moyenne' },
              { value: '100%', label: 'Uptime Bridge' },
              { value: '2.8 MB', label: 'DuckDB Size' },
              { value: '$0.00', label: 'Coût Opérationnel' }
            ].map((metric, idx) => (
              <div
                key={idx}
                style={{
                  background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(189, 148, 187, 0.15) 100%)',
                  padding: '20px',
                  borderRadius: '10px',
                  borderLeft: '4px solid #E035A2',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div style={{
                  fontSize: '2em',
                  fontWeight: 800,
                  color: '#E035A2',
                  marginBottom: '5px'
                }}>
                  {metric.value}
                </div>
                <div style={{
                  color: '#BD94BB',
                  fontSize: '0.95em'
                }}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section className="animate-on-scroll" style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          margin: '30px 0',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            color: '#E035A2',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(224, 53, 162, 0.3)',
            paddingBottom: '10px'
          }}>
            🏗️ Architecture
          </h2>

          <div style={{
            background: 'rgba(0, 0, 0, 0.2)',
            padding: '30px',
            borderRadius: '12px',
            margin: '30px 0',
            fontFamily: 'monospace',
            color: '#BD94BB',
            lineHeight: 1.8,
            overflowX: 'auto',
            fontSize: '0.9em'
          }}>
            <pre style={{ margin: 0 }}>{`┌─────────────────────────────────────────────────────────────────┐
│                     COSMIC Orchestrator                        │
│  Classification automatique: neural/symbolic/hybrid/forecasting│
└────────────┬────────────────────────────────────┬───────────────┘
             │                                    │
    ┌────────▼────────┐                  ┌────────▼────────┐
    │  Neural RAG     │                  │  Symbolic +     │
    │                 │                  │  Forecasting    │
    │  • DuckDB       │                  │                 │
    │  • nomic-embed  │                  │  • Wolfram API  │
    │  • Cosine sim   │                  │  • Prophet      │
    └────────┬────────┘                  └────────┬────────┘
             │                                    │
    ┌────────▼────────────────────────────────────▼────────┐
    │              LLM Orchestrator                        │
    │  Routage intelligent Claude/Ollama (cost-aware)      │
    └────────┬─────────────────────────────────────────────┘
             │
    ┌────────▼────────┐
    │  Ollama Bridge  │
    │                 │
    │  • FastAPI      │
    │  • Retry logic  │
    │  • Circuit break│
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │  Ollama Host    │
    │  (Mac Studio)   │
    │                 │
    │  deepseek-r1    │
    │  nomic-embed    │
    └─────────────────┘`}</pre>
          </div>

          <h3 style={{
            color: '#BD94BB',
            fontSize: '1.3em',
            marginTop: '25px',
            marginBottom: '15px'
          }}>
            Stack Docker Compose (5 services)
          </h3>
          <ul style={{
            margin: '15px 0 15px 30px',
            color: '#c0c0c0',
            fontSize: '1.05em',
            lineHeight: 1.8
          }}>
            <li><code style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '3px 8px',
              borderRadius: '5px',
              color: '#E035A2'
            }}>cosmic-orchestrator-api</code> - API REST principale (port 8100)</li>
            <li><code style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '3px 8px',
              borderRadius: '5px',
              color: '#E035A2'
            }}>cosmic-ollama-bridge</code> - Service sidecar Ollama (port 8200)</li>
            <li><code style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '3px 8px',
              borderRadius: '5px',
              color: '#E035A2'
            }}>cosmic-metrics</code> - Prometheus (port 9090)</li>
            <li><code style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '3px 8px',
              borderRadius: '5px',
              color: '#E035A2'
            }}>cosmic-dashboard</code> - Grafana (port 3100)</li>
            <li><code style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '3px 8px',
              borderRadius: '5px',
              color: '#E035A2'
            }}>cosmic-alerts</code> - Alertmanager (port 9093)</li>
          </ul>
        </section>

        {/* Démarrage Rapide */}
        <section className="animate-on-scroll" style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          margin: '30px 0',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            color: '#E035A2',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(224, 53, 162, 0.3)',
            paddingBottom: '10px'
          }}>
            🚀 Démarrage Rapide
          </h2>

          <h3 style={{
            color: '#BD94BB',
            fontSize: '1.3em',
            marginTop: '25px',
            marginBottom: '15px'
          }}>
            1. Prérequis
          </h3>
          <ul style={{
            margin: '15px 0 15px 30px',
            color: '#c0c0c0',
            fontSize: '1.05em',
            lineHeight: 1.8
          }}>
            <li>Docker + Docker Compose (Orbstack recommandé pour Mac)</li>
            <li>Ollama installé sur host avec modèles: <code style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '3px 8px',
              borderRadius: '5px',
              color: '#E035A2'
            }}>deepseek-r1:1.5b</code>, <code style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '3px 8px',
              borderRadius: '5px',
              color: '#E035A2'
            }}>nomic-embed-text</code></li>
            <li>Python 3.11+ avec dépendances: <code style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '3px 8px',
              borderRadius: '5px',
              color: '#E035A2'
            }}>duckdb</code>, <code style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '3px 8px',
              borderRadius: '5px',
              color: '#E035A2'
            }}>prophet</code>, <code style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '3px 8px',
              borderRadius: '5px',
              color: '#E035A2'
            }}>anthropic</code></li>
          </ul>

          <h3 style={{
            color: '#BD94BB',
            fontSize: '1.3em',
            marginTop: '25px',
            marginBottom: '15px'
          }}>
            2. Installation
          </h3>
          <div style={{
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '20px',
            borderRadius: '8px',
            margin: '15px 0',
            overflowX: 'auto'
          }}>
            <code style={{
              display: 'block',
              color: '#BD94BB',
              fontFamily: 'monospace',
              fontSize: '0.95em',
              lineHeight: 1.8
            }}>
              # Clone repository<br />
              git clone https://github.com/NextAIgeneration/nextAIgeneration-cosmic-rag.git<br />
              cd nextAIgeneration-cosmic-rag<br /><br />

              # Install dependencies<br />
              pip install -r requirements.txt<br /><br />

              # Build embeddings (first time only)<br />
              python3 embed_cosmic_docs.py<br /><br />

              # Start stack<br />
              cd orbstack<br />
              ./start.sh up
            </code>
          </div>

          <h3 style={{
            color: '#BD94BB',
            fontSize: '1.3em',
            marginTop: '25px',
            marginBottom: '15px'
          }}>
            3. Test API
          </h3>
          <div style={{
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '20px',
            borderRadius: '8px',
            margin: '15px 0',
            overflowX: 'auto'
          }}>
            <code style={{
              display: 'block',
              color: '#BD94BB',
              fontFamily: 'monospace',
              fontSize: '0.95em',
              lineHeight: 1.8
            }}>
              curl -X POST http://localhost:8100/query \<br />
              &nbsp;&nbsp;-H "Content-Type: application/json" \<br />
              &nbsp;&nbsp;-d '&#123;"query":"Quel est le budget du projet COSMIC?","verbose":false&#125;'
            </code>
          </div>
        </section>

        {/* Use Cases */}
        <section className="animate-on-scroll" style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          margin: '30px 0',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)'
        }}>
          <h2 style={{
            color: '#E035A2',
            fontSize: '2em',
            marginBottom: '20px',
            borderBottom: '2px solid rgba(224, 53, 162, 0.3)',
            paddingBottom: '10px'
          }}>
            🎯 Use Cases
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '25px',
            marginTop: '30px'
          }}>
            {[
              {
                title: 'Analyse Projets EU',
                desc: 'Extraction automatique de métriques (budget, timeline, livrables) depuis documents COSMIC HORIZON.'
              },
              {
                title: 'Calculs Budgétaires',
                desc: 'Validations factuelles via Wolfram Alpha pour budgets, pourcentages, ROI.'
              },
              {
                title: 'Prédictions Energy',
                desc: 'Forecasting consommation énergétique avec Prophet basé sur historiques.'
              },
              {
                title: 'Comparaisons Compétitives',
                desc: 'Analyses TCO FFT vs Siemens/Schneider avec métriques quantifiées.'
              }
            ].map((useCase, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'transform 0.3s, border-color 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.borderColor = 'rgba(224, 53, 162, 0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <h4 style={{
                  color: '#E035A2',
                  fontSize: '1.2em',
                  marginBottom: '15px'
                }}>
                  {useCase.title}
                </h4>
                <p style={{
                  color: '#c0c0c0',
                  fontSize: '1em',
                  lineHeight: 1.6
                }}>
                  {useCase.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '40px 20px',
          color: '#666',
          marginTop: '60px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <p style={{ marginBottom: '10px', fontSize: '1em', color: '#BD94BB' }}>
            100% Local AI • Privacy-First • EU-Sovereign
          </p>
          <p style={{ fontSize: '0.9em', color: '#888', marginTop: '10px' }}>
            FFT Cognitive Platform • COSMIC RAG • 2025
          </p>
          <p style={{ marginTop: '15px' }}>
            <a href="https://github.com/NextAIgeneration/nextAIgeneration-cosmic-rag" style={{ color: '#E035A2', textDecoration: 'none', marginRight: '20px' }}>GitHub</a>
            <a href="/docs" style={{ color: '#E035A2', textDecoration: 'none' }}>Documentation</a>
          </p>
        </footer>

      </div>
    </div>
  );
}
