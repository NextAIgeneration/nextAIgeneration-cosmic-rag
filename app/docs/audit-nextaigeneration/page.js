'use client';

export default function AuditDoc() {
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
            📄 Audit nextAIgeneration & COSMIC
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
              26KB
            </span>
            <span style={{
              background: 'rgba(46, 204, 113, 0.2)',
              color: '#2ecc71',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.85em',
              fontWeight: 600
            }}>
              Audit Complet
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
            Résumé Exécutif
          </h2>
          <p style={{ color: '#c0c0c0', lineHeight: 1.8, marginBottom: '20px' }}>
            Audit technique complet de l'organisation nextAIgeneration et du projet COSMIC, incluant l'analyse de l'infrastructure,
            de la sécurité, des process de développement et des choix architecturaux.
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
            Points Clés
          </h2>
          <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px' }}>
            <li><strong style={{ color: '#E035A2' }}>Infrastructure:</strong> Analyse K3s, Docker, GitLab configuration</li>
            <li><strong style={{ color: '#E035A2' }}>Sécurité:</strong> SSH keys, secrets management, vault architecture</li>
            <li><strong style={{ color: '#E035A2' }}>AI/ML:</strong> Ollama local, Claude API integration, neurosymbolic approach</li>
            <li><strong style={{ color: '#E035A2' }}>Performance:</strong> Métriques de production validées (78ms, 0% errors)</li>
            <li><strong style={{ color: '#E035A2' }}>Recommandations:</strong> Optimisations identifiées et roadmap</li>
          </ul>
        </section>

        <section style={{
          background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(189, 148, 187, 0.15) 100%)',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid rgba(224, 53, 162, 0.3)',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#BD94BB', marginBottom: '15px', fontSize: '1.1em' }}>
            📦 Document complet disponible sur GitLab Mercure
          </p>
          <p style={{ color: '#c0c0c0', fontSize: '0.95em' }}>
            Repository: <code style={{ color: '#E035A2' }}>cosmic-rag-validation</code> •
            Branch: <code style={{ color: '#E035A2' }}>package-c</code>
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
