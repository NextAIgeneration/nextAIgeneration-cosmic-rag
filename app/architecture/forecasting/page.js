'use client';

export default function Forecasting() {
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
            📈 Time Series Forecasting Process
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#BD94BB', lineHeight: 1.6 }}>
            Prophet pour prédictions energy consumption et trend analysis
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
            Pipeline Prophet
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
│  📊 Historical Data (12mo+)   │
│  Energy consumption timeseries│
└──────────────┬─────────────────┘
               │
               ▼
    ┌──────────────────────┐
    │  🔍 Data Preparation │
    │  • Cleaning          │
    │  • Interpolation     │
    │  • Outlier detection │
    └──────────┬───────────┘
               │
               ▼
    ┌──────────────────────┐
    │  🤖 Prophet Model    │
    │  • Trend detection   │
    │  • Seasonality       │
    │  • Holiday effects   │
    └──────────┬───────────┘
               │
               ▼
    ┌──────────────────────┐
    │  📈 Forecast Gen     │
    │  • 6-month horizon   │
    │  • Confidence bands  │
    │  • Uncertainty ±5%   │
    └──────────┬───────────┘
               │
               ▼
    ┌──────────────────────┐
    │  ✅ Validation       │──► Predictions
    │  • Accuracy check    │
    │  • Drift detection   │
    └──────────────────────┘`}</pre>
          </div>
        </section>

        <section style={{
          background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(189, 148, 187, 0.15) 100%)',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid rgba(224, 53, 162, 0.3)',
          marginBottom: '40px'
        }}>
          <h3 style={{ color: '#E035A2', marginBottom: '20px', fontSize: '1.4em' }}>💡 Key Features</h3>
          <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px', fontSize: '1.05em' }}>
            <li><strong style={{ color: '#E035A2' }}>Automatic Seasonality:</strong> Détection journalière, hebdomadaire, annuelle</li>
            <li><strong style={{ color: '#E035A2' }}>Trend Analysis:</strong> Croissance +20.8% over 6 months</li>
            <li><strong style={{ color: '#E035A2' }}>Confidence Intervals:</strong> 95% → 78% declining with horizon</li>
            <li><strong style={{ color: '#E035A2' }}>Robustness:</strong> Handles missing data and outliers gracefully</li>
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
                Deployment Timeline
              </h3>
              <img
                src="/diagrams/04-timeline.png"
                alt="Deployment Timeline"
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
                Value Evolution Forecast
              </h3>
              <img
                src="/diagrams/chart-02-value-evolution.png"
                alt="Value Evolution Forecast"
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
                Environmental Impact Analysis
              </h3>
              <img
                src="/diagrams/chart-04-environmental-impact.png"
                alt="Environmental Impact Analysis"
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
