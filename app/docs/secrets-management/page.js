'use client';

export default function SecretsManagementDoc() {
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
            🔐 Secrets Management Architecture
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
              17KB
            </span>
            <span style={{
              background: 'rgba(155, 89, 182, 0.2)',
              color: '#9b59b6',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.85em',
              fontWeight: 600
            }}>
              Security Architecture
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
            Architecture Globale
          </h2>
          <p style={{ color: '#c0c0c0', lineHeight: 1.8, marginBottom: '20px' }}>
            Stratégie complète de gestion des secrets pour COSMIC RAG, intégrant 1Password,
            variables d'environnement Vercel, et SSH keys GitLab dans une architecture zero-trust.
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
            Composants Clés
          </h2>
          <ul style={{ color: '#c0c0c0', lineHeight: 2, paddingLeft: '25px' }}>
            <li><strong style={{ color: '#E035A2' }}>1Password:</strong> Vault central pour API keys (Claude, Wolfram)</li>
            <li><strong style={{ color: '#E035A2' }}>Vercel Env:</strong> Variables isolées par environnement (prod/preview)</li>
            <li><strong style={{ color: '#E035A2' }}>SSH Keys:</strong> Ed25519 keys pour GitLab authentication</li>
            <li><strong style={{ color: '#E035A2' }}>Git-crypt:</strong> Chiffrement repository-level pour données sensibles</li>
            <li><strong style={{ color: '#E035A2' }}>Rotation:</strong> Policy 90-day pour secrets critiques</li>
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
            Flow de Sécurité
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
            <pre style={{ margin: 0 }}>{`┌──────────────────┐
│  Developer       │
│  Local Machine   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  1Password CLI   │
│  op item get     │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Environment     │
│  Variables       │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Vercel Build    │
│  Encrypted Env   │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Production      │──► Zero secrets in code
└──────────────────┘`}</pre>
          </div>
        </section>

        <section style={{
          background: 'linear-gradient(135deg, rgba(155, 89, 182, 0.15) 0%, rgba(142, 68, 173, 0.15) 100%)',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid rgba(155, 89, 182, 0.3)',
          marginBottom: '40px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#9b59b6', marginBottom: '15px', fontSize: '1.1em', fontWeight: 600 }}>
            🔐 100% Zero-Trust Architecture
          </p>
          <p style={{ color: '#c0c0c0', fontSize: '0.95em' }}>
            Aucun secret hardcodé • Rotation automatique • Audit trail complet
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
