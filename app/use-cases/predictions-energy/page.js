'use client';

export default function PredictionsEnergy() {
  const forecastData = [
    { month: 'Jan 2026', actual: 145, predicted: 142, confidence: '95%' },
    { month: 'Feb 2026', actual: null, predicted: 148, confidence: '92%' },
    { month: 'Mar 2026', actual: null, predicted: 155, confidence: '89%' },
    { month: 'Apr 2026', actual: null, predicted: 162, confidence: '85%' },
    { month: 'May 2026', actual: null, predicted: 168, confidence: '82%' },
    { month: 'Jun 2026', actual: null, predicted: 175, confidence: '78%' }
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
            ⚡ Prédictions Energy
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#BD94BB', lineHeight: 1.6 }}>
            Forecasting consommation énergétique avec Prophet basé sur historiques
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
            📈 Pipeline Prophet Forecasting
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
            <pre style={{ margin: 0 }}>{`┌────────────────────────────────────────┐
│   📊 Historical Data (12+ months)     │
│   Energy consumption timeseries       │
└──────────────┬─────────────────────────┘
               │
               ▼
     ┌─────────────────────┐
     │  🤖 Prophet Model   │
     │  • Trend detection  │
     │  • Seasonality      │
     │  • Holiday effects  │
     └──────────┬──────────┘
                │
                ▼
     ┌─────────────────────┐
     │  📈 Forecast Output │
     │  • 6-month ahead    │
     │  • Confidence bands │
     │  • Uncertainty      │
     └─────────────────────┘`}</pre>
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
            📊 Prévisions 6 Mois
          </h2>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95em' }}>
              <thead>
                <tr style={{
                  background: 'rgba(224, 53, 162, 0.1)',
                  borderBottom: '2px solid rgba(224, 53, 162, 0.3)'
                }}>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#E035A2', fontWeight: 600 }}>Période</th>
                  <th style={{ padding: '15px', textAlign: 'right', color: '#E035A2', fontWeight: 600 }}>Réel (kWh)</th>
                  <th style={{ padding: '15px', textAlign: 'right', color: '#E035A2', fontWeight: 600 }}>Prédit (kWh)</th>
                  <th style={{ padding: '15px', textAlign: 'center', color: '#E035A2', fontWeight: 600 }}>Confiance</th>
                  <th style={{ padding: '15px', textAlign: 'center', color: '#E035A2', fontWeight: 600 }}>Statut</th>
                </tr>
              </thead>
              <tbody>
                {forecastData.map((row, idx) => (
                  <tr key={idx} style={{
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'transparent'
                  }}>
                    <td style={{ padding: '15px', color: '#fff' }}>{row.month}</td>
                    <td style={{ padding: '15px', textAlign: 'right', color: '#c0c0c0' }}>
                      {row.actual || '-'}
                    </td>
                    <td style={{ padding: '15px', textAlign: 'right', color: '#E035A2', fontWeight: 600 }}>
                      {row.predicted}
                    </td>
                    <td style={{ padding: '15px', textAlign: 'center', color: '#BD94BB' }}>{row.confidence}</td>
                    <td style={{ padding: '15px', textAlign: 'center' }}>
                      <span style={{
                        background: row.actual ? 'rgba(46, 204, 113, 0.2)' : 'rgba(241, 196, 15, 0.2)',
                        color: row.actual ? '#2ecc71' : '#f1c40f',
                        padding: '5px 12px',
                        borderRadius: '12px',
                        fontSize: '0.85em',
                        fontWeight: 600
                      }}>
                        {row.actual ? 'Validé' : 'Forecast'}
                      </span>
                    </td>
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
            <h3 style={{ color: '#E035A2', marginBottom: '15px' }}>📈 Trend Analysis</h3>
            <ul style={{ color: '#c0c0c0', lineHeight: 1.8, paddingLeft: '20px' }}>
              <li><strong>Croissance:</strong> +20.8% over 6 months (145 → 175 kWh)</li>
              <li><strong>Avg Monthly Increase:</strong> +6 kWh (+4.1%)</li>
              <li><strong>Peak Confidence:</strong> Jan 2026 (95%) due to historical data</li>
              <li><strong>Declining Confidence:</strong> Jun 2026 (78%) - longer horizon</li>
            </ul>
          </div>
        </section>

        <section style={{
          background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(189, 148, 187, 0.15) 100%)',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid rgba(224, 53, 162, 0.3)',
          marginBottom: '40px'
        }}>
          <h3 style={{ color: '#E035A2', marginBottom: '20px', fontSize: '1.4em' }}>💡 Insights & Recommendations</h3>
          <div style={{ color: '#c0c0c0', lineHeight: 2, fontSize: '1.05em' }}>
            <p style={{ marginBottom: '15px' }}>
              <strong style={{ color: '#E035A2' }}>1. Infrastructure Scaling:</strong> Predicted +20.8% increase suggests need for hardware expansion (aligns with €8,500 budget allocation)
            </p>
            <p style={{ marginBottom: '15px' }}>
              <strong style={{ color: '#E035A2' }}>2. Cost Planning:</strong> Budget for +30 kWh/month energy consumption
            </p>
            <p style={{ marginBottom: '15px' }}>
              <strong style={{ color: '#E035A2' }}>3. Optimization Target:</strong> Deploy energy-efficient GPUs in Q1 2026 to counteract trend
            </p>
            <p>
              <strong style={{ color: '#E035A2' }}>4. Monitoring:</strong> Track actual vs predicted monthly to refine Prophet model
            </p>
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
