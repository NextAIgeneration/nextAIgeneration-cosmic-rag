'use client';

export default function StrategicContentDoc() {
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

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ marginBottom: '40px' }}>
          <a href="/docs" style={{ color: '#E035A2', fontSize: '1rem', marginBottom: '20px', display: 'inline-block', textDecoration: 'none' }}>
            ← Retour à Documentation
          </a>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '15px'
          }}>
            🎯 COSMIC Strategic Content
          </h1>
          <div style={{
            display: 'flex',
            gap: '15px',
            marginTop: '20px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              background: 'rgba(224, 53, 162, 0.2)',
              color: '#E035A2',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.85em',
              fontWeight: 600
            }}>
              14KB
            </span>
            <span style={{
              background: 'rgba(52, 152, 219, 0.2)',
              color: '#3498db',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.85em',
              fontWeight: 600
            }}>
              Strategic Vision
            </span>
          </div>
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
            fontSize: '1.8em',
            marginBottom: '20px'
          }}>
            Vision Stratégique
          </h2>
          <p style={{ color: '#c0c0c0', lineHeight: 1.8, marginBottom: '20px' }}>
            Document de positionnement stratégique pour COSMIC RAG Platform sur Vercel,
            définissant la vision, les objectifs commerciaux, et le roadmap vers nextAIgeneration.
          </p>
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
            fontSize: '1.8em',
            marginBottom: '20px'
          }}>
            Objectifs Clés
          </h2>
          <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px' }}>
            <li><strong style={{ color: '#E035A2' }}>Démonstration Technologique:</strong> Showcase neurosymbolic capabilities</li>
            <li><strong style={{ color: '#E035A2' }}>Acquisition Clients:</strong> Target EU projects & energy sector</li>
            <li><strong style={{ color: '#E035A2' }}>Différentiation:</strong> 85% cost reduction vs competitors</li>
            <li><strong style={{ color: '#E035A2' }}>Performance:</strong> 78ms latency, 0% errors comme USP</li>
            <li><strong style={{ color: '#E035A2' }}>Scalability:</strong> Ready for nextAIgeneration ecosystem</li>
          </ul>
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
            fontSize: '1.8em',
            marginBottom: '20px'
          }}>
            Roadmap Commercial
          </h2>
          <div style={{
            background: 'rgba(0, 0, 0, 0.2)',
            padding: '20px',
            borderRadius: '12px',
            fontFamily: 'monospace',
            color: '#BD94BB',
            lineHeight: 2,
            fontSize: '0.9em'
          }}>
            <p>📅 <strong style={{ color: '#E035A2' }}>Phase 1 (Oct 2025):</strong> Production deployment Vercel</p>
            <p>📅 <strong style={{ color: '#E035A2' }}>Phase 2 (Nov 2025):</strong> Integration nextAIgeneration</p>
            <p>📅 <strong style={{ color: '#E035A2' }}>Phase 3 (Dec 2025):</strong> First commercial pilots</p>
            <p>📅 <strong style={{ color: '#E035A2' }}>Phase 4 (Q1 2026):</strong> Scale to 10+ clients</p>
          </div>
        </section>

        <section style={{
          background: 'linear-gradient(135deg, rgba(52, 152, 219, 0.15) 0%, rgba(41, 128, 185, 0.15) 100%)',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid rgba(52, 152, 219, 0.3)',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#3498db', marginBottom: '15px', fontSize: '1.4em', fontWeight: 700 }}>
            🎯 Mission: Démocratiser l'IA Cognitive
          </p>
          <p style={{ color: '#c0c0c0', fontSize: '0.95em' }}>
            Performance enterprise • Prix accessible • 100% transparent
          </p>
        </section>

        <footer style={{
          textAlign: 'center',
          padding: '40px 20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#888'
        }}>
          <p style={{ marginBottom: '10px' }}>
            <a href="/docs" style={{ color: '#E035A2', textDecoration: 'none', marginRight: '20px' }}>Documentation</a>
            <a href="/" style={{ color: '#E035A2', textDecoration: 'none' }}>Accueil</a>
          </p>
          <p style={{ fontSize: '0.9em', color: '#BD94BB' }}>
            FFT Cognitive Platform • COSMIC RAG • 2025
          </p>
        </footer>
      </div>
    </div>
  );
}
