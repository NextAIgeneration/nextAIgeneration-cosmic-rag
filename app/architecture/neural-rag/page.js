'use client';

export default function NeuralRAG() {
  const processSteps = [
    {
      step: 1,
      title: 'Document Ingestion',
      desc: 'Chargement des 6 documents COSMIC (170+ pages)',
      details: ['Markdown parsing', 'PDF extraction', 'Text chunking (512 tokens)', 'Metadata preservation']
    },
    {
      step: 2,
      title: 'Embedding Generation',
      desc: 'Transformation en vecteurs avec nomic-embed-text',
      details: ['768-dimensional vectors', 'Batch processing (32 chunks/batch)', 'Local Ollama inference', '~78ms avg latency']
    },
    {
      step: 3,
      title: 'DuckDB Storage',
      desc: 'Indexation dans DuckDB vector database',
      details: ['115+ chunks indexed', '2.8 MB database size', 'In-memory for speed', 'Disk persistence']
    },
    {
      step: 4,
      title: 'Semantic Search',
      desc: 'Recherche par similarité cosinus',
      details: ['Query embedding', 'Cosine similarity calculation', 'Top-K retrieval (k=5)', 'Context assembly']
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
            🔍 Neural RAG Process
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#BD94BB', lineHeight: 1.6 }}>
            DuckDB embeddings + semantic search pour retrieval augmenté
          </p>
        </header>

        {/* Process Flow Diagram */}
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
            Pipeline Neural RAG
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
            <pre style={{ margin: 0 }}>{`┌──────────────────────────────────────┐
│    📄 COSMIC Documents (6 files)    │
│         170+ pages, mixed formats   │
└──────────────┬───────────────────────┘
               │
               ▼
    ┌──────────────────────┐
    │  ✂️ Text Chunking    │
    │  • 512 tokens/chunk  │
    │  • Overlap: 50 tok   │
    │  • 115+ chunks total │
    └──────────┬───────────┘
               │
               ▼
    ┌──────────────────────┐
    │  🧠 nomic-embed-text │
    │  • Ollama local      │
    │  • 768-dim vectors   │
    │  • Batch: 32 chunks  │
    └──────────┬───────────┘
               │
               ▼
    ┌──────────────────────┐
    │  💾 DuckDB Storage   │
    │  • Vector index      │
    │  • 2.8 MB size       │
    │  • In-memory         │
    └──────────┬───────────┘
               │
    ┌──────────▼───────────┐
    │  🔍 Query Processing │◄─── User Query
    └──────────┬───────────┘
               │
               ▼
    ┌──────────────────────┐
    │  📐 Cosine Similarity│
    │  • Top-K: 5 chunks   │
    │  • Threshold: 0.7    │
    └──────────┬───────────┘
               │
               ▼
    ┌──────────────────────┐
    │  📦 Context Assembly │
    │  • Merge chunks      │
    │  • Add metadata      │
    └──────────┬───────────┘
               │
               ▼
    ┌──────────────────────┐
    │  🤖 LLM Augmentation │──► Answer
    └──────────────────────┘`}</pre>
          </div>
        </section>

        {/* Process Steps */}
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
            4 Étapes du Process
          </h2>

          <div style={{ display: 'grid', gap: '25px', marginTop: '30px' }}>
            {processSteps.map((process) => (
              <div key={process.step} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '30px',
                borderRadius: '12px',
                border: '2px solid rgba(255, 255, 255, 0.08)',
                transition: 'all 0.3s ease'
              }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(224, 53, 162, 0.6)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(224, 53, 162, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #E035A2 0%, #bd2d88 100%)',
                    color: '#fff',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5em',
                    fontWeight: 800
                  }}>
                    {process.step}
                  </div>
                  <div>
                    <h3 style={{ color: '#E035A2', fontSize: '1.4em', marginBottom: '5px' }}>
                      {process.title}
                    </h3>
                    <p style={{ color: '#BD94BB', fontSize: '1em', margin: 0 }}>
                      {process.desc}
                    </p>
                  </div>
                </div>
                <ul style={{ color: '#c0c0c0', lineHeight: 1.8, paddingLeft: '70px', margin: 0 }}>
                  {process.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Specs */}
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
            Spécifications Techniques
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '30px'
          }}>
            {[
              { label: 'Documents', value: '6 files', sublabel: '170+ pages' },
              { label: 'Chunks', value: '115+', sublabel: '512 tokens each' },
              { label: 'Vector Dimension', value: '768', sublabel: 'nomic-embed-text' },
              { label: 'Database Size', value: '2.8 MB', sublabel: 'DuckDB' },
              { label: 'Avg Latency', value: '78ms', sublabel: 'embedding generation' },
              { label: 'Top-K Retrieval', value: '5', sublabel: 'most relevant chunks' }
            ].map((spec, idx) => (
              <div key={idx} style={{
                background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(189, 148, 187, 0.15) 100%)',
                padding: '25px',
                borderRadius: '10px',
                borderLeft: '4px solid #E035A2'
              }}>
                <div style={{ fontSize: '0.9em', color: '#BD94BB', marginBottom: '8px' }}>
                  {spec.label}
                </div>
                <div style={{ fontSize: '2.5em', fontWeight: 800, color: '#E035A2', marginBottom: '5px' }}>
                  {spec.value}
                </div>
                <div style={{ fontSize: '0.85em', color: '#c0c0c0' }}>
                  {spec.sublabel}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Benefits */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(189, 148, 187, 0.15) 100%)',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid rgba(224, 53, 162, 0.3)',
          marginBottom: '40px'
        }}>
          <h3 style={{ color: '#E035A2', marginBottom: '20px', fontSize: '1.4em' }}>💡 Avantages Clés</h3>
          <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1.05em' }}>
            <li><strong style={{ color: '#E035A2' }}>100% Local:</strong> Ollama inference = zero cloud dependency</li>
            <li><strong style={{ color: '#E035A2' }}>Fast Search:</strong> 78ms average latency for semantic retrieval</li>
            <li><strong style={{ color: '#E035A2' }}>Compact:</strong> 2.8 MB total footprint for 170+ pages</li>
            <li><strong style={{ color: '#E035A2' }}>Precision:</strong> Cosine similarity threshold 0.7 filters noise</li>
            <li><strong style={{ color: '#E035A2' }}>Scalable:</strong> DuckDB handles millions of vectors efficiently</li>
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
                Platform Overview
              </h3>
              <img
                src="/diagrams/01-platform-overview.png"
                alt="Platform Overview Architecture"
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
                User Journey Flow
              </h3>
              <img
                src="/diagrams/02-user-journey.png"
                alt="User Journey Flow"
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
