'use client';

export default function DocsPage() {
  const docs = [
    { title: "Audit nextAIgeneration & COSMIC", file: "00-AUDIT-NEXTAIGENERATION-COSMIC.md", size: "26KB" },
    { title: "Session Complete 22 Oct 2025", file: "00-SESSION-COMPLETE-22-OCT-2025.md", size: "16KB" },
    { title: "Security Pre-Release Checklist", file: "00-SECURITY-PRE-RELEASE-CHECKLIST.md", size: "10KB" },
    { title: "MCP vs CLI Architecture", file: "00-MCP-VS-CLI-ARCHITECTURE.md", size: "15KB" },
    { title: "Ready for nextAIgeneration", file: "00-READY-FOR-NEXTAIGENERATION.md", size: "9KB" },
    { title: "Test Écosystème - Gaps Found", file: "00-TEST-ECOSYSTEME-GAPS-FOUND.md", size: "11KB" },
    { title: "Secrets Management Architecture", file: "00-SECRETS-MANAGEMENT-ARCHITECTURE.md", size: "17KB" },
    { title: "Packages Pushed GitLab", file: "00-PACKAGES-PUSHED-GITLAB.md", size: "7KB" },
    { title: "COSMIC Strategic Content", file: "COSMIC-STRATEGIC-CONTENT-VERCEL.md", size: "14KB" }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#2d2749',
      color: '#c7c9ff',
      fontFamily: "'Poppins', sans-serif",
      padding: '60px 20px'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
        body { margin: 0; padding: 0; }
        a { color: #E035A2; text-decoration: none; }
        a:hover { text-decoration: underline; }
      `}</style>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        <header style={{ marginBottom: '60px' }}>
          <a href="/" style={{ color: '#E035A2', fontSize: '1rem', marginBottom: '20px', display: 'inline-block' }}>
            ← Back to Home
          </a>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 600,
            color: '#fff',
            marginBottom: '15px'
          }}>
            Documentation
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#BD94BB', lineHeight: 1.6 }}>
            Complete technical documentation, session reports, and strategic analyses for COSMIC RAG Platform.
          </p>
        </header>

        <section>
          <div style={{ display: 'grid', gap: '20px' }}>
            {docs.map((doc, idx) => (
              <div key={idx} style={{
                background: '#221E35',
                padding: '25px 30px',
                borderRadius: '12px',
                border: '1px solid rgba(224, 53, 162, 0.2)',
                transition: 'border-color 0.2s, transform 0.2s'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  color: '#fff',
                  marginBottom: '10px',
                  fontWeight: 600
                }}>
                  {doc.title}
                </h3>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '15px'
                }}>
                  <code style={{
                    fontSize: '0.85rem',
                    color: '#BD94BB',
                    background: 'rgba(199, 201, 255, 0.1)',
                    padding: '5px 12px',
                    borderRadius: '6px'
                  }}>
                    {doc.file}
                  </code>
                  <span style={{
                    fontSize: '0.85rem',
                    color: '#E035A2',
                    background: 'rgba(224, 53, 162, 0.15)',
                    padding: '5px 15px',
                    borderRadius: '20px'
                  }}>
                    {doc.size}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '60px',
            padding: '30px',
            background: '#221E35',
            borderRadius: '12px',
            border: '1px solid rgba(224, 53, 162, 0.2)',
            textAlign: 'center'
          }}>
            <p style={{ color: '#BD94BB', marginBottom: '20px' }}>
              📦 <strong>Full documentation available on GitLab Mercure</strong>
            </p>
            <p style={{ fontSize: '0.9rem', color: '#BD94BB' }}>
              Branch: <code style={{ color: '#E035A2' }}>package-c</code> • Repository: <code style={{ color: '#E035A2' }}>cosmic-rag-validation</code>
            </p>
          </div>
        </section>

        <footer style={{
          marginTop: '80px',
          textAlign: 'center',
          color: '#BD94BB',
          paddingTop: '40px',
          borderTop: '1px solid rgba(224, 53, 162, 0.2)',
          fontSize: '0.9rem'
        }}>
          <p>FFT Cognitive Platform • COSMIC RAG • 2025</p>
        </footer>

      </div>
    </div>
  );
}
