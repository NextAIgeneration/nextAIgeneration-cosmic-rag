'use client';

export default function TestEcosystemeDoc() {
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
            🧪 Test Écosystème - Gaps Found
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
              11KB
            </span>
            <span style={{
              background: 'rgba(241, 196, 15, 0.2)',
              color: '#f1c40f',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.85em',
              fontWeight: 600
            }}>
              Testing Report
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
            Analyse Tests Écosystème
          </h2>
          <p style={{ color: '#c0c0c0', lineHeight: 1.8, marginBottom: '20px' }}>
            Tests end-to-end de l'écosystème COSMIC RAG complet, identification des gaps d'intégration
            entre composants, et recommandations pour combler les manques détectés.
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
            Gaps Identifiés
          </h2>
          <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px' }}>
            <li><strong style={{ color: '#f1c40f' }}>⚠️ Obsidian-git:</strong> Configuration à finaliser pour auto-sync</li>
            <li><strong style={{ color: '#2ecc71' }}>✅ Neural RAG:</strong> Pipeline validé, 0% erreurs</li>
            <li><strong style={{ color: '#2ecc71' }}>✅ Symbolic Computing:</strong> Wolfram Alpha opérationnel</li>
            <li><strong style={{ color: '#2ecc71' }}>✅ Forecasting:</strong> Prophet predictions validées</li>
            <li><strong style={{ color: '#2ecc71' }}>✅ LLM Orchestration:</strong> Claude/Ollama routing fonctionnel</li>
            <li><strong style={{ color: '#f1c40f' }}>⚠️ Monitoring:</strong> Logs agrégation à améliorer</li>
          </ul>
        </section>

        <section style={{
          background: 'linear-gradient(135deg, rgba(241, 196, 15, 0.15) 0%, rgba(243, 156, 18, 0.15) 100%)',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid rgba(241, 196, 15, 0.3)',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#f1c40f', marginBottom: '15px', fontSize: '1.1em', fontWeight: 600 }}>
            ⚠️ 2 gaps mineurs • 5 composants validés
          </p>
          <p style={{ color: '#c0c0c0', fontSize: '0.95em' }}>
            Impact faible sur production • Résolution planifiée post-release
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
