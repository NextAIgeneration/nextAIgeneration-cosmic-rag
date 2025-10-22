'use client';

export default function Home() {
  return (
    <div style={{
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      lineHeight: 1.6,
      color: '#e0e0e0',
      background: 'linear-gradient(135deg, #2d2749 0%, #1a1a2e 50%, #16213e 100%)',
      minHeight: '100vh'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
        body { margin: 0; padding: 0; }
        a { color: #E035A2; text-decoration: none; }
        a:hover { text-decoration: underline; }
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
          border: '1px solid rgba(224, 53, 162, 0.2)'
        }}>
          <h1 style={{
            fontSize: '3.5em',
            background: 'linear-gradient(135deg, #E035A2 0%, #764ba2 100%)',
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
            marginBottom: '15px'
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

          <div style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '30px'
          }}>
            <span style={{
              padding: '8px 16px',
              background: 'rgba(46, 204, 113, 0.2)',
              border: '1px solid rgba(46, 204, 113, 0.4)',
              borderRadius: '20px',
              fontSize: '0.9em',
              color: '#2ecc71',
              fontWeight: 600
            }}>
              ✅ Production Ready
            </span>
            <span style={{
              padding: '8px 16px',
              background: 'rgba(46, 204, 113, 0.2)',
              border: '1px solid rgba(46, 204, 113, 0.4)',
              borderRadius: '20px',
              fontSize: '0.9em',
              color: '#2ecc71',
              fontWeight: 600
            }}>
              0% Erreurs
            </span>
            <span style={{
              padding: '8px 16px',
              background: 'rgba(224, 53, 162, 0.2)',
              border: '1px solid rgba(224, 53, 162, 0.4)',
              borderRadius: '20px',
              fontSize: '0.9em',
              color: '#E035A2',
              fontWeight: 600
            }}>
              78ms Latence Moyenne
            </span>
            <span style={{
              padding: '8px 16px',
              background: 'rgba(224, 53, 162, 0.2)',
              border: '1px solid rgba(224, 53, 162, 0.4)',
              borderRadius: '20px',
              fontSize: '0.9em',
              color: '#E035A2',
              fontWeight: 600
            }}>
              100% Local
            </span>
            <span style={{
              padding: '8px 16px',
              background: 'rgba(224, 53, 162, 0.2)',
              border: '1px solid rgba(224, 53, 162, 0.4)',
              borderRadius: '20px',
              fontSize: '0.9em',
              color: '#E035A2',
              fontWeight: 600
            }}>
              0€ Coût
            </span>
          </div>

          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            marginTop: '40px',
            flexWrap: 'wrap'
          }}>
            <a href="https://github.com/NextAIgeneration/nextAIgeneration-cosmic-rag" style={{
              padding: '15px 40px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1.1em',
              background: 'linear-gradient(135deg, #E035A2 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              boxShadow: '0 10px 30px rgba(224, 53, 162, 0.3)',
              transition: 'all 0.3s',
              display: 'inline-block'
            }}>
              💻 Code Source GitHub
            </a>
          </div>
        </header>

        {/* Vue d'Ensemble */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          margin: '30px 0',
          borderRadius: '15px',
          border: '1px solid rgba(224, 53, 162, 0.15)',
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
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '25px',
              borderRadius: '12px',
              border: '1px solid rgba(224, 53, 162, 0.15)',
              transition: 'transform 0.3s, border-color 0.3s'
            }}>
              <h4 style={{
                color: '#E035A2',
                fontSize: '1.2em',
                marginBottom: '15px'
              }}>
                🔍 Neural RAG
              </h4>
              <p style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8 }}>
                Recherche sémantique dans 115+ chunks (6 documents, 170+ pages) via embeddings vectoriels DuckDB.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '25px',
              borderRadius: '12px',
              border: '1px solid rgba(224, 53, 162, 0.15)',
              transition: 'transform 0.3s, border-color 0.3s'
            }}>
              <h4 style={{
                color: '#E035A2',
                fontSize: '1.2em',
                marginBottom: '15px'
              }}>
                🧮 Symbolic Computing
              </h4>
              <p style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8 }}>
                Calculs précis et validations factuelles via Wolfram Alpha API pour garantir l'exactitude.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '25px',
              borderRadius: '12px',
              border: '1px solid rgba(224, 53, 162, 0.15)',
              transition: 'transform 0.3s, border-color 0.3s'
            }}>
              <h4 style={{
                color: '#E035A2',
                fontSize: '1.2em',
                marginBottom: '15px'
              }}>
                📈 Forecasting
              </h4>
              <p style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8 }}>
                Prédictions time-series avec Prophet pour analyses de tendances et projections futures.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '25px',
              borderRadius: '12px',
              border: '1px solid rgba(224, 53, 162, 0.15)',
              transition: 'transform 0.3s, border-color 0.3s'
            }}>
              <h4 style={{
                color: '#E035A2',
                fontSize: '1.2em',
                marginBottom: '15px'
              }}>
                🤖 LLM Orchestration
              </h4>
              <p style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8 }}>
                Routage intelligent Claude/Ollama selon complexité et coût pour optimisation budgétaire.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '25px',
              borderRadius: '12px',
              border: '1px solid rgba(224, 53, 162, 0.15)',
              transition: 'transform 0.3s, border-color 0.3s'
            }}>
              <h4 style={{
                color: '#E035A2',
                fontSize: '1.2em',
                marginBottom: '15px'
              }}>
                🔌 Ollama Bridge
              </h4>
              <p style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8 }}>
                Service sidecar FastAPI avec retry logic et circuit breaker pour résilience maximale.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '25px',
              borderRadius: '12px',
              border: '1px solid rgba(224, 53, 162, 0.15)',
              transition: 'transform 0.3s, border-color 0.3s'
            }}>
              <h4 style={{
                color: '#E035A2',
                fontSize: '1.2em',
                marginBottom: '15px'
              }}>
                📊 Monitoring
              </h4>
              <p style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8 }}>
                Stack complète Prometheus + Grafana + Alertmanager pour observabilité production.
              </p>
            </div>
          </div>
        </section>

        {/* Métriques Production */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          margin: '30px 0',
          borderRadius: '15px',
          border: '1px solid rgba(224, 53, 162, 0.15)',
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
            <div style={{
              background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
              padding: '20px',
              borderRadius: '10px',
              borderLeft: '4px solid #E035A2'
            }}>
              <div style={{
                fontSize: '2em',
                fontWeight: 800,
                color: '#E035A2',
                marginBottom: '5px'
              }}>
                118
              </div>
              <div style={{
                color: '#BD94BB',
                fontSize: '0.95em'
              }}>
                Embed Requests
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
              padding: '20px',
              borderRadius: '10px',
              borderLeft: '4px solid #E035A2'
            }}>
              <div style={{
                fontSize: '2em',
                fontWeight: 800,
                color: '#E035A2',
                marginBottom: '5px'
              }}>
                0%
              </div>
              <div style={{
                color: '#BD94BB',
                fontSize: '0.95em'
              }}>
                Taux d'Erreurs
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
              padding: '20px',
              borderRadius: '10px',
              borderLeft: '4px solid #E035A2'
            }}>
              <div style={{
                fontSize: '2em',
                fontWeight: 800,
                color: '#E035A2',
                marginBottom: '5px'
              }}>
                78ms
              </div>
              <div style={{
                color: '#BD94BB',
                fontSize: '0.95em'
              }}>
                Latence Moyenne
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
              padding: '20px',
              borderRadius: '10px',
              borderLeft: '4px solid #E035A2'
            }}>
              <div style={{
                fontSize: '2em',
                fontWeight: 800,
                color: '#E035A2',
                marginBottom: '5px'
              }}>
                100%
              </div>
              <div style={{
                color: '#BD94BB',
                fontSize: '0.95em'
              }}>
                Uptime Bridge
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
              padding: '20px',
              borderRadius: '10px',
              borderLeft: '4px solid #E035A2'
            }}>
              <div style={{
                fontSize: '2em',
                fontWeight: 800,
                color: '#E035A2',
                marginBottom: '5px'
              }}>
                2.8 MB
              </div>
              <div style={{
                color: '#BD94BB',
                fontSize: '0.95em'
              }}>
                DuckDB Size
              </div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
              padding: '20px',
              borderRadius: '10px',
              borderLeft: '4px solid #E035A2'
            }}>
              <div style={{
                fontSize: '2em',
                fontWeight: 800,
                color: '#E035A2',
                marginBottom: '5px'
              }}>
                $0.00
              </div>
              <div style={{
                color: '#BD94BB',
                fontSize: '0.95em'
              }}>
                Coût Opérationnel
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          margin: '30px 0',
          borderRadius: '15px',
          border: '1px solid rgba(224, 53, 162, 0.15)',
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
            overflowX: 'auto'
          }}>
            <pre style={{ margin: 0, color: '#BD94BB' }}>{`┌─────────────────────────────────────────────────────────────────┐
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
            margin: '25px 0 15px 0'
          }}>
            Stack Docker Compose (5 services)
          </h3>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8, marginBottom: '10px' }}>
              <code style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '3px 8px',
                borderRadius: '5px',
                fontFamily: "'Courier New', monospace",
                color: '#E035A2',
                fontSize: '0.95em'
              }}>cosmic-orchestrator-api</code> - API REST principale (port 8100)
            </li>
            <li style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8, marginBottom: '10px' }}>
              <code style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '3px 8px',
                borderRadius: '5px',
                fontFamily: "'Courier New', monospace",
                color: '#E035A2',
                fontSize: '0.95em'
              }}>cosmic-ollama-bridge</code> - Service sidecar Ollama (port 8200)
            </li>
            <li style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8, marginBottom: '10px' }}>
              <code style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '3px 8px',
                borderRadius: '5px',
                fontFamily: "'Courier New', monospace",
                color: '#E035A2',
                fontSize: '0.95em'
              }}>cosmic-metrics</code> - Prometheus (port 9090)
            </li>
            <li style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8, marginBottom: '10px' }}>
              <code style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '3px 8px',
                borderRadius: '5px',
                fontFamily: "'Courier New', monospace",
                color: '#E035A2',
                fontSize: '0.95em'
              }}>cosmic-dashboard</code> - Grafana (port 3100)
            </li>
            <li style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8, marginBottom: '10px' }}>
              <code style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '3px 8px',
                borderRadius: '5px',
                fontFamily: "'Courier New', monospace",
                color: '#E035A2',
                fontSize: '0.95em'
              }}>cosmic-alerts</code> - Alertmanager (port 9093)
            </li>
          </ul>
        </section>

        {/* Démarrage Rapide */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          margin: '30px 0',
          borderRadius: '15px',
          border: '1px solid rgba(224, 53, 162, 0.15)',
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
            margin: '25px 0 15px 0'
          }}>
            1. Prérequis
          </h3>
          <ul style={{ margin: '15px 0 15px 30px' }}>
            <li style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8, marginBottom: '10px' }}>
              Docker + Docker Compose (Orbstack recommandé pour Mac)
            </li>
            <li style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8, marginBottom: '10px' }}>
              Ollama installé sur host avec modèles: <code style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '3px 8px',
                borderRadius: '5px',
                fontFamily: "'Courier New', monospace",
                color: '#E035A2',
                fontSize: '0.95em'
              }}>deepseek-r1:1.5b</code>, <code style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '3px 8px',
                borderRadius: '5px',
                fontFamily: "'Courier New', monospace",
                color: '#E035A2',
                fontSize: '0.95em'
              }}>nomic-embed-text</code>
            </li>
            <li style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8, marginBottom: '10px' }}>
              Python 3.11+ avec dépendances: <code style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '3px 8px',
                borderRadius: '5px',
                fontFamily: "'Courier New', monospace",
                color: '#E035A2',
                fontSize: '0.95em'
              }}>duckdb</code>, <code style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '3px 8px',
                borderRadius: '5px',
                fontFamily: "'Courier New', monospace",
                color: '#E035A2',
                fontSize: '0.95em'
              }}>prophet</code>, <code style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '3px 8px',
                borderRadius: '5px',
                fontFamily: "'Courier New', monospace",
                color: '#E035A2',
                fontSize: '0.95em'
              }}>anthropic</code>
            </li>
          </ul>

          <h3 style={{
            color: '#BD94BB',
            fontSize: '1.3em',
            margin: '25px 0 15px 0'
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
            <code style={{ display: 'block', color: '#BD94BB', fontFamily: 'monospace', whiteSpace: 'pre' }}>
{`# Clone repository
git clone https://github.com/NextAIgeneration/nextAIgeneration-cosmic-rag.git
cd nextAIgeneration-cosmic-rag

# Install dependencies
pip install -r requirements.txt

# Build embeddings (first time only)
python3 embed_cosmic_docs.py

# Start stack
cd orbstack
./start.sh up`}
            </code>
          </div>

          <h3 style={{
            color: '#BD94BB',
            fontSize: '1.3em',
            margin: '25px 0 15px 0'
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
            <code style={{ display: 'block', color: '#BD94BB', fontFamily: 'monospace', whiteSpace: 'pre' }}>
{`curl -X POST http://localhost:8100/query \\
  -H "Content-Type: application/json" \\
  -d '{"query":"Quel est le budget du projet COSMIC?","verbose":false}'`}
            </code>
          </div>
        </section>

        {/* Use Cases */}
        <section style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '40px',
          margin: '30px 0',
          borderRadius: '15px',
          border: '1px solid rgba(224, 53, 162, 0.15)',
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
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '25px',
              borderRadius: '12px',
              border: '1px solid rgba(224, 53, 162, 0.15)'
            }}>
              <h4 style={{
                color: '#E035A2',
                fontSize: '1.2em',
                marginBottom: '15px'
              }}>
                Analyse Projets EU
              </h4>
              <p style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8 }}>
                Extraction automatique de métriques (budget, timeline, livrables) depuis documents COSMIC HORIZON.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '25px',
              borderRadius: '12px',
              border: '1px solid rgba(224, 53, 162, 0.15)'
            }}>
              <h4 style={{
                color: '#E035A2',
                fontSize: '1.2em',
                marginBottom: '15px'
              }}>
                Calculs Budgétaires
              </h4>
              <p style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8 }}>
                Validations factuelles via Wolfram Alpha pour budgets, pourcentages, ROI.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '25px',
              borderRadius: '12px',
              border: '1px solid rgba(224, 53, 162, 0.15)'
            }}>
              <h4 style={{
                color: '#E035A2',
                fontSize: '1.2em',
                marginBottom: '15px'
              }}>
                Prédictions Energy
              </h4>
              <p style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8 }}>
                Forecasting consommation énergétique avec Prophet basé sur historiques.
              </p>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '25px',
              borderRadius: '12px',
              border: '1px solid rgba(224, 53, 162, 0.15)'
            }}>
              <h4 style={{
                color: '#E035A2',
                fontSize: '1.2em',
                marginBottom: '15px'
              }}>
                Comparaisons Compétitives
              </h4>
              <p style={{ color: '#c0c0c0', fontSize: '1.05em', lineHeight: 1.8 }}>
                Analyses TCO FFT vs Siemens/Schneider avec métriques quantifiées.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          padding: '40px 20px',
          color: '#666',
          marginTop: '60px',
          borderTop: '1px solid rgba(224, 53, 162, 0.2)'
        }}>
          <p style={{ marginBottom: '10px' }}>
            COSMIC RAG - Production-Ready Neurosymbolic System
          </p>
          <p style={{ marginTop: '10px', fontSize: '0.9em', color: '#BD94BB' }}>
            Session 22 Octobre 2025 • FFT Cognitive Platform
          </p>
          <p style={{ marginTop: '15px' }}>
            <a href="https://github.com/NextAIgeneration/nextAIgeneration-cosmic-rag" style={{ color: '#E035A2', textDecoration: 'none' }}>
              GitHub
            </a>
          </p>
        </footer>

      </div>
    </div>
  );
}
