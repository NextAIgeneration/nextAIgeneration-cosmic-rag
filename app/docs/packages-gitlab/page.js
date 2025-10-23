'use client';

export default function PackagesGitLabDoc() {
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
            📦 Packages Pushed GitLab
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
              7KB
            </span>
            <span style={{
              background: 'rgba(230, 126, 34, 0.2)',
              color: '#e67e22',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.85em',
              fontWeight: 600
            }}>
              Deployment Log
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
            Packages Déployés
          </h2>
          <p style={{ color: '#c0c0c0', lineHeight: 1.8, marginBottom: '20px' }}>
            Log détaillé de tous les packages et artéfacts pushés vers GitLab Mercure vault,
            incluant Package A (RAG Core), Package B (Symbolic), et Package C (Documentation).
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
            Packages Inventory
          </h2>
          <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px' }}>
            <li><strong style={{ color: '#E035A2' }}>Package A:</strong> Neural RAG pipeline (11 commits)</li>
            <li><strong style={{ color: '#E035A2' }}>Package B:</strong> Symbolic Computing + Forecasting (8 commits)</li>
            <li><strong style={{ color: '#E035A2' }}>Package C:</strong> Documentation complète (14 commits)</li>
            <li><strong style={{ color: '#E035A2' }}>Assets:</strong> Diagrammes D2, charts Python</li>
            <li><strong style={{ color: '#E035A2' }}>Config:</strong> Docker Compose, K3s manifests</li>
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
            Timeline GitLab
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
            <p>📅 <strong style={{ color: '#E035A2' }}>21 Oct 2025:</strong> Initial SSH setup + Package A</p>
            <p>📅 <strong style={{ color: '#E035A2' }}>22 Oct 2025:</strong> Package B + C pushed (11 commits)</p>
            <p>📅 <strong style={{ color: '#E035A2' }}>Total:</strong> 33 commits • 3 branches • 0 conflicts</p>
          </div>
        </section>

        <section style={{
          background: 'linear-gradient(135deg, rgba(46, 204, 113, 0.15) 0%, rgba(39, 174, 96, 0.15) 100%)',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid rgba(46, 204, 113, 0.3)',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#2ecc71', marginBottom: '15px', fontSize: '1.1em', fontWeight: 600 }}>
            ✅ Tous les packages synchronisés avec succès
          </p>
          <p style={{ color: '#c0c0c0', fontSize: '0.95em' }}>
            Repository: cosmic-rag-validation • Status: Up-to-date
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
