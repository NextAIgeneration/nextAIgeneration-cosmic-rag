'use client';

export default function MonitoringStack() {
  const processSteps = [
    {
      step: 1,
      title: 'Metrics Collection',
      desc: 'Prometheus scrape endpoints toutes les 15s',
      details: ['API response times', 'Ollama bridge health', 'DuckDB query latency', 'Embedding generation metrics']
    },
    {
      step: 2,
      title: 'Data Storage',
      desc: 'Time-series database avec rétention configurable',
      details: ['15-day retention policy', 'Automatic downsampling', 'Disk-based persistence', 'Query-optimized indexes']
    },
    {
      step: 3,
      title: 'Visualization',
      desc: 'Dashboards Grafana en temps réel',
      details: ['System health overview', 'Query performance tracking', 'Error rate monitoring', 'Cost analysis (Claude vs Ollama)']
    },
    {
      step: 4,
      title: 'Alerting',
      desc: 'Alertmanager pour notifications proactives',
      details: ['API latency > 500ms threshold', 'Error rate > 1% alert', 'Ollama downtime detection', 'Email/Slack integration']
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
            📊 Monitoring Stack
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#BD94BB', lineHeight: 1.6 }}>
            Observabilité production avec Prometheus + Grafana + Alertmanager
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
            Architecture Monitoring
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
            <pre style={{ margin: 0 }}>{`┌───────────────────────────────────────────┐
│   COSMIC Services (Instrumented)         │
│   ────────────────────────────────        │
│   • Orchestrator API (8100)              │
│   • Ollama Bridge (8200)                 │
│   • /metrics endpoints                   │
└──────────────┬────────────────────────────┘
               │
               │ Scrape every 15s
               │ (pull-based collection)
               ▼
    ┌──────────────────────┐
    │  📊 Prometheus       │
    │  Time-series DB      │
    │  Port 9090           │
    │                      │
    │  • Metrics storage   │
    │  • Query engine      │
    │  • Alert rules       │
    └──────────┬───────────┘
               │
        ┌──────┴────────┐
        │               │
        ▼               ▼
┌──────────────┐  ┌──────────────┐
│  📈 Grafana  │  │  🔔 Alert-   │
│  Dashboard   │  │  manager     │
│  Port 3100   │  │  Port 9093   │
│              │  │              │
│  Visualize   │  │  Notify      │
│  metrics     │  │  on issues   │
└──────────────┘  └──────┬───────┘
                         │
                         ▼
                  Email/Slack/PagerDuty

┌─────────────────────────────────┐
│  Key Metrics Tracked            │
│  ──────────────────             │
│  • API latency (p50/p95/p99)    │
│  • Error rate percentage        │
│  • Embedding generation time    │
│  • DuckDB query performance     │
│  • Ollama bridge uptime         │
│  • Cost tracking (Claude usage) │
└─────────────────────────────────┘`}</pre>
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
            4 Piliers Observabilité
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
            Métriques Production Actuelles
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '30px'
          }}>
            {[
              { label: 'API Uptime', value: '100%', sublabel: 'no downtime' },
              { label: 'Avg Latency', value: '78ms', sublabel: 'p50 response time' },
              { label: 'Error Rate', value: '0%', sublabel: '118/118 success' },
              { label: 'Bridge Health', value: '100%', sublabel: 'Ollama stable' },
              { label: 'Scrape Interval', value: '15s', sublabel: 'Prometheus' },
              { label: 'Retention', value: '15d', sublabel: 'time-series data' }
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

        {/* Dashboards Preview */}
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
            Dashboards Disponibles
          </h2>

          <div style={{ display: 'grid', gap: '25px', marginTop: '30px' }}>
            {[
              {
                title: '📊 System Overview',
                desc: 'Vue d\'ensemble santé globale',
                metrics: ['Total requests/s', 'P95 latency trends', 'Error rate timeline', 'Service health status']
              },
              {
                title: '🔍 Query Performance',
                desc: 'Analyse détaillée performance requêtes',
                metrics: ['Neural vs Symbolic vs Hybrid breakdown', 'DuckDB query times', 'Embedding generation latency', 'Context size distribution']
              },
              {
                title: '💰 Cost Tracking',
                desc: 'Monitoring coûts Claude vs Ollama',
                metrics: ['API tokens consumed', 'Estimated monthly cost', 'Ollama local savings', 'Cost per query type']
              },
              {
                title: '🔌 Infrastructure',
                desc: 'Métriques infrastructure Docker',
                metrics: ['Container CPU/memory usage', 'Network I/O rates', 'Disk space utilization', 'Ollama bridge uptime']
              }
            ].map((dashboard, idx) => (
              <div key={idx} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '25px',
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
                <h3 style={{ color: '#E035A2', fontSize: '1.3em', marginBottom: '10px' }}>
                  {dashboard.title}
                </h3>
                <p style={{ color: '#BD94BB', fontSize: '1em', marginBottom: '15px' }}>
                  {dashboard.desc}
                </p>
                <ul style={{ color: '#c0c0c0', lineHeight: 1.8, paddingLeft: '20px', margin: 0 }}>
                  {dashboard.metrics.map((metric, metricIdx) => (
                    <li key={metricIdx}>{metric}</li>
                  ))}
                </ul>
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
            <li><strong style={{ color: '#E035A2' }}>Visibilité:</strong> Métriques temps réel sur toute la stack</li>
            <li><strong style={{ color: '#E035A2' }}>Proactivité:</strong> Alertes avant que l'utilisateur détecte problème</li>
            <li><strong style={{ color: '#E035A2' }}>Debugging:</strong> Historique 15j pour root cause analysis</li>
            <li><strong style={{ color: '#E035A2' }}>Optimisation:</strong> Identifier goulots performance</li>
            <li><strong style={{ color: '#E035A2' }}>Cost Control:</strong> Tracking précis coûts Claude vs Ollama</li>
          </ul>
        </section>

        {/* Access Info */}
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
            Accès aux Services
          </h2>

          <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
            {[
              { service: 'Prometheus', url: 'http://localhost:9090', desc: 'Métriques brutes + Query explorer' },
              { service: 'Grafana', url: 'http://localhost:3100', desc: 'Dashboards visuels (admin/admin)' },
              { service: 'Alertmanager', url: 'http://localhost:9093', desc: 'Configuration alertes' }
            ].map((access, idx) => (
              <div key={idx} style={{
                background: 'rgba(224, 53, 162, 0.08)',
                padding: '20px',
                borderRadius: '10px',
                border: '1px solid rgba(224, 53, 162, 0.2)'
              }}>
                <div style={{ color: '#E035A2', fontWeight: 600, fontSize: '1.1em', marginBottom: '8px' }}>
                  {access.service}
                </div>
                <div style={{ color: '#c0c0c0', marginBottom: '8px', fontFamily: 'monospace', fontSize: '0.95em' }}>
                  {access.url}
                </div>
                <div style={{ color: '#BD94BB', fontSize: '0.95em' }}>
                  {access.desc}
                </div>
              </div>
            ))}
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
