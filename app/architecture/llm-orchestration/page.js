'use client';

export default function LLMOrchestration() {
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

        <header style={{ marginBottom: '40px' }}>
          <a href="/" style={{ color: '#E035A2', fontSize: '1rem', marginBottom: '20px', display: 'inline-block', textDecoration: 'none' }}>
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
            🤖 LLM Orchestration Process
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#BD94BB', lineHeight: 1.6 }}>
            Claude/Ollama intelligent routing pour optimisation cost-aware
          </p>
        </header>

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
            Pipeline Orchestration
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
            <pre style={{ margin: 0 }}>{`┌────────────────────────────────┐
│  💬 User Query + Context      │
│  (from RAG/Symbolic/Forecast) │
└──────────────┬─────────────────┘
               │
               ▼
    ┌──────────────────────┐
    │  🔍 Complexity Score │
    │  • Token count       │
    │  • Query type        │
    │  • Domain expertise  │
    └──────────┬───────────┘
               │
        ┌──────▼──────┐
        │  Cost-aware │
        │   routing   │
        └──┬───────┬──┘
           │       │
    Simple │       │ Complex
      │    │       │    │
      ▼    ▼       ▼    ▼
┌─────────────┐  ┌──────────────┐
│ 🏠 Ollama   │  │ ☁️ Claude API │
│ • Free      │  │ • High qual  │
│ • Fast      │  │ • Reasoning  │
│ • llama3.1  │  │ • Sonnet 4.5 │
└─────┬───────┘  └──────┬───────┘
      │                 │
      └────────┬────────┘
               │
               ▼
    ┌──────────────────────┐
    │  ✅ Response Check   │
    │  • Quality score     │
    │  • Fallback logic    │
    └──────────┬───────────┘
               │
               ▼
    ┌──────────────────────┐
    │  📦 Final Answer     │──► User
    └──────────────────────┘`}</pre>
          </div>
        </section>

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
            Routing Logic
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
            marginTop: '30px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.15) 0%, rgba(39, 174, 96, 0.15) 100%)',
              padding: '25px',
              borderRadius: '12px',
              border: '2px solid rgba(46, 204, 113, 0.3)'
            }}>
              <h3 style={{ color: '#2ecc71', fontSize: '1.3em', marginBottom: '15px' }}>
                🏠 Ollama (Local)
              </h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 1.8, paddingLeft: '20px', fontSize: '0.95em' }}>
                <li>Simple queries</li>
                <li>Factual retrieval</li>
                <li>Document summarization</li>
                <li>Cost: $0.00</li>
                <li>Latency: ~200ms</li>
              </ul>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(189, 148, 187, 0.15) 100%)',
              padding: '25px',
              borderRadius: '12px',
              border: '2px solid rgba(224, 53, 162, 0.3)'
            }}>
              <h3 style={{ color: '#E035A2', fontSize: '1.3em', marginBottom: '15px' }}>
                ☁️ Claude API
              </h3>
              <ul style={{ color: '#c0c0c0', lineHeight: 1.8, paddingLeft: '20px', fontSize: '0.95em' }}>
                <li>Complex reasoning</li>
                <li>Multi-step analysis</li>
                <li>Creative synthesis</li>
                <li>Cost: ~$0.02/query</li>
                <li>Latency: ~800ms</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{
          background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(189, 148, 187, 0.15) 100%)',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid rgba(224, 53, 162, 0.3)',
          marginBottom: '40px'
        }}>
          <h3 style={{ color: '#E035A2', marginBottom: '20px', fontSize: '1.4em' }}>💡 Smart Routing Benefits</h3>
          <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1.05em' }}>
            <li><strong style={{ color: '#E035A2' }}>Cost Optimization:</strong> 80% queries handled by free Ollama</li>
            <li><strong style={{ color: '#E035A2' }}>Performance:</strong> Local-first = faster average response</li>
            <li><strong style={{ color: '#E035A2' }}>Quality Guarantee:</strong> Claude fallback for complex tasks</li>
            <li><strong style={{ color: '#E035A2' }}>Privacy:</strong> Sensitive queries stay local</li>
          </ul>
        </section>

        {/* Architecture Visualisations */}
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
            📊 Architecture Visualisations
          </h2>

          <div style={{ display: 'grid', gap: '30px', marginTop: '30px' }}>
            <div>
              <h3 style={{ color: '#BD94BB', marginBottom: '15px', fontSize: '1.2em' }}>
                Hardware Architecture
              </h3>
              <img
                src="/diagrams/05-hardware-architecture.png"
                alt="Hardware Architecture Diagram"
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
              <h3 style={{ color: '#BD94BB', marginBottom: '15px', fontSize: '1.2em' }}>
                Phase Migration: Virtual → Production
              </h3>
              <img
                src="/diagrams/07-phase-virtual-to-production.png"
                alt="Phase Migration Virtual to Production"
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
