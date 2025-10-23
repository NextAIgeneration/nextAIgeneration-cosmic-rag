'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ComparaisonsCompetitives() {
  const tcoComparison = [
    {
      provider: 'FFT Cognitive Platform',
      setup: '€8,500',
      monthly: '€290',
      year1: '€11,980',
      year3: '€18,940',
      sovereignty: '100% EU',
      ai: 'Local (Ollama)',
      highlight: true
    },
    {
      provider: 'Siemens MindSphere',
      setup: '€15,000',
      monthly: '€2,500',
      year1: '€45,000',
      year3: '€105,000',
      sovereignty: 'Mixed',
      ai: 'Cloud (external)',
      highlight: false
    },
    {
      provider: 'Schneider EcoStruxure',
      setup: '€12,000',
      monthly: '€1,800',
      year1: '€33,600',
      year3: '€76,800',
      sovereignty: 'Mixed',
      ai: 'Cloud (external)',
      highlight: false
    }
  ];

  return (
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      background: 'linear-gradient(135deg, #2d2749 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#e0e0e0',
      minHeight: '100vh'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');

        .swiper {
          width: 100%;
          height: 100vh;
        }

        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px;
          overflow-y: auto;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: #E035A2 !important;
          background: rgba(224, 53, 162, 0.2);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
          width: 12px;
          height: 12px;
        }

        .swiper-pagination-bullet-active {
          background: #E035A2;
          box-shadow: 0 0 15px rgba(224, 53, 162, 0.6);
        }

        .swiper-pagination {
          bottom: 30px !important;
          left: 50% !important;
          transform: translateX(-50%);
          width: auto !important;
          display: flex;
          flex-direction: row;
          gap: 10px;
        }

        body { margin: 0; padding: 0; }
      `}</style>

      <Swiper
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        keyboard={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      >
        {/* Slide 1: Hero + TCO Table */}
        <SwiperSlide>
          <div style={{ width: '100%', maxWidth: '1200px' }}>
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
              🔬 Comparaisons Compétitives
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#BD94BB', lineHeight: 1.6, marginBottom: '40px' }}>
              Analyses TCO FFT vs Siemens/Schneider avec métriques quantifiées
            </p>

            <section style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '40px',
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 style={{
                color: '#E035A2',
                fontSize: '2em',
                marginBottom: '20px',
                borderBottom: '2px solid rgba(224, 53, 162, 0.3)',
                paddingBottom: '10px'
              }}>
                💰 Total Cost of Ownership (TCO)
              </h2>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95em' }}>
                  <thead>
                    <tr style={{
                      background: 'rgba(224, 53, 162, 0.1)',
                      borderBottom: '2px solid rgba(224, 53, 162, 0.3)'
                    }}>
                      <th style={{ padding: '15px', textAlign: 'left', color: '#E035A2', fontWeight: 600 }}>Provider</th>
                      <th style={{ padding: '15px', textAlign: 'right', color: '#E035A2', fontWeight: 600 }}>Setup</th>
                      <th style={{ padding: '15px', textAlign: 'right', color: '#E035A2', fontWeight: 600 }}>Monthly</th>
                      <th style={{ padding: '15px', textAlign: 'right', color: '#E035A2', fontWeight: 600 }}>Year 1 TCO</th>
                      <th style={{ padding: '15px', textAlign: 'right', color: '#E035A2', fontWeight: 600 }}>3-Year TCO</th>
                      <th style={{ padding: '15px', textAlign: 'center', color: '#E035A2', fontWeight: 600 }}>Sovereignty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tcoComparison.map((row, idx) => (
                      <tr key={idx} style={{
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                        background: row.highlight
                          ? 'rgba(224, 53, 162, 0.1)'
                          : (idx % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'transparent'),
                        fontWeight: row.highlight ? 600 : 400
                      }}>
                        <td style={{ padding: '15px', color: row.highlight ? '#E035A2' : '#fff' }}>
                          {row.provider}
                          {row.highlight && <span style={{
                            marginLeft: '10px',
                            background: 'rgba(46, 204, 113, 0.2)',
                            color: '#2ecc71',
                            padding: '3px 10px',
                            borderRadius: '12px',
                            fontSize: '0.75em'
                          }}>Recommended</span>}
                        </td>
                        <td style={{ padding: '15px', textAlign: 'right', color: row.highlight ? '#E035A2' : '#c0c0c0' }}>
                          {row.setup}
                        </td>
                        <td style={{ padding: '15px', textAlign: 'right', color: row.highlight ? '#E035A2' : '#c0c0c0' }}>
                          {row.monthly}
                        </td>
                        <td style={{ padding: '15px', textAlign: 'right', color: row.highlight ? '#E035A2' : '#fff', fontWeight: 600 }}>
                          {row.year1}
                        </td>
                        <td style={{ padding: '15px', textAlign: 'right', color: row.highlight ? '#E035A2' : '#fff', fontSize: '1.1em', fontWeight: 700 }}>
                          {row.year3}
                        </td>
                        <td style={{ padding: '15px', textAlign: 'center' }}>
                          <span style={{
                            background: row.sovereignty === '100% EU'
                              ? 'rgba(46, 204, 113, 0.2)'
                              : 'rgba(241, 196, 15, 0.2)',
                            color: row.sovereignty === '100% EU' ? '#2ecc71' : '#f1c40f',
                            padding: '5px 12px',
                            borderRadius: '12px',
                            fontSize: '0.85em',
                            fontWeight: 600
                          }}>
                            {row.sovereignty}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </SwiperSlide>

        {/* Slide 2: Cost Savings Analysis */}
        <SwiperSlide>
          <div style={{ width: '100%', maxWidth: '1200px' }}>
            <section style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '40px',
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 style={{
                color: '#E035A2',
                fontSize: '2em',
                marginBottom: '20px',
                borderBottom: '2px solid rgba(224, 53, 162, 0.3)',
                paddingBottom: '10px'
              }}>
                📊 Cost Savings Analysis
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '25px',
                marginTop: '30px'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(189, 148, 187, 0.15) 100%)',
                  padding: '30px',
                  borderRadius: '12px',
                  border: '2px solid rgba(224, 53, 162, 0.3)'
                }}>
                  <div style={{ fontSize: '0.9em', color: '#BD94BB', marginBottom: '10px' }}>FFT vs Siemens (Year 1)</div>
                  <div style={{ fontSize: '3em', fontWeight: 800, color: '#E035A2', marginBottom: '10px' }}>
                    -73%
                  </div>
                  <div style={{ fontSize: '1.1em', color: '#2ecc71' }}>
                    €33,020 saved
                  </div>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(189, 148, 187, 0.15) 100%)',
                  padding: '30px',
                  borderRadius: '12px',
                  border: '2px solid rgba(224, 53, 162, 0.3)'
                }}>
                  <div style={{ fontSize: '0.9em', color: '#BD94BB', marginBottom: '10px' }}>FFT vs Schneider (Year 1)</div>
                  <div style={{ fontSize: '3em', fontWeight: 800, color: '#E035A2', marginBottom: '10px' }}>
                    -64%
                  </div>
                  <div style={{ fontSize: '1.1em', color: '#2ecc71' }}>
                    €21,620 saved
                  </div>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(189, 148, 187, 0.15) 100%)',
                  padding: '30px',
                  borderRadius: '12px',
                  border: '2px solid rgba(224, 53, 162, 0.3)'
                }}>
                  <div style={{ fontSize: '0.9em', color: '#BD94BB', marginBottom: '10px' }}>FFT vs Siemens (3-Year)</div>
                  <div style={{ fontSize: '3em', fontWeight: 800, color: '#E035A2', marginBottom: '10px' }}>
                    -82%
                  </div>
                  <div style={{ fontSize: '1.1em', color: '#2ecc71' }}>
                    €86,060 saved
                  </div>
                </div>
              </div>
            </section>
          </div>
        </SwiperSlide>

        {/* Slide 3: Feature Comparison */}
        <SwiperSlide>
          <div style={{ width: '100%', maxWidth: '1200px' }}>
            <section style={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '40px',
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}>
              <h2 style={{
                color: '#E035A2',
                fontSize: '2em',
                marginBottom: '20px',
                borderBottom: '2px solid rgba(224, 53, 162, 0.3)',
                paddingBottom: '10px'
              }}>
                🎯 Feature Comparison
              </h2>

              <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
                {[
                  { feature: 'EU Data Sovereignty', fft: '✅ 100%', siemens: '⚠️ Mixed', schneider: '⚠️ Mixed' },
                  { feature: 'Local AI Inference', fft: '✅ Ollama', siemens: '❌ Cloud', schneider: '❌ Cloud' },
                  { feature: 'Zero Operational Cost', fft: '✅ $0.00', siemens: '❌ Variable', schneider: '❌ Variable' },
                  { feature: 'Neurosymbolic Stack', fft: '✅ Full', siemens: '⚠️ Partial', schneider: '⚠️ Partial' },
                  { feature: 'Open Source Core', fft: '✅ Yes', siemens: '❌ Proprietary', schneider: '❌ Proprietary' },
                  { feature: 'Custom Deployment', fft: '✅ K3s/Docker', siemens: '⚠️ Limited', schneider: '⚠️ Limited' }
                ].map((row, idx) => (
                  <div key={idx} style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    padding: '20px 25px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr 1fr',
                    gap: '20px',
                    alignItems: 'center'
                  }}>
                    <div style={{ color: '#fff', fontWeight: 600 }}>{row.feature}</div>
                    <div style={{ color: '#E035A2', fontWeight: 600 }}>{row.fft}</div>
                    <div style={{ color: '#c0c0c0' }}>{row.siemens}</div>
                    <div style={{ color: '#c0c0c0' }}>{row.schneider}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </SwiperSlide>

        {/* Slide 4: Strategic Advantages */}
        <SwiperSlide>
          <div style={{ width: '100%', maxWidth: '1200px' }}>
            <section style={{
              background: 'linear-gradient(135deg, rgba(224, 53, 162, 0.15) 0%, rgba(189, 148, 187, 0.15) 100%)',
              padding: '40px',
              borderRadius: '12px',
              border: '1px solid rgba(224, 53, 162, 0.3)'
            }}>
              <h3 style={{ color: '#E035A2', marginBottom: '20px', fontSize: '1.8em' }}>💡 Strategic Advantages FFT</h3>
              <div style={{ color: '#c0c0c0', lineHeight: 2, fontSize: '1.05em' }}>
                <p style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#E035A2' }}>1. Cost Efficiency:</strong> 73-82% lower TCO vs competitors over 3 years
                </p>
                <p style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#E035A2' }}>2. Data Sovereignty:</strong> 100% EU-based infrastructure (GDPR-native)
                </p>
                <p style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#E035A2' }}>3. AI Independence:</strong> Local Ollama inference = zero vendor lock-in
                </p>
                <p style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#E035A2' }}>4. Neurosymbolic Edge:</strong> Unique DuckDB + Wolfram Alpha + Prophet stack
                </p>
                <p>
                  <strong style={{ color: '#E035A2' }}>5. Scalability:</strong> K3s + Docker = flexible deployment (cloud/edge/hybrid)
                </p>
              </div>
            </section>
          </div>
        </SwiperSlide>

        {/* Slide 5: Visualisation 1 */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2 style={{
              color: '#E035A2',
              fontSize: '2.5em',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              📊 TCO Comparison: FFT vs Competitors
            </h2>
            <img
              src="/diagrams/chart-06-cost-comparison.png"
              alt="TCO Comparison FFT vs Competitors"
              style={{
                width: '100%',
                maxWidth: '900px',
                height: 'auto',
                borderRadius: '15px',
                border: '3px solid rgba(224, 53, 162, 0.3)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
              }}
            />
          </div>
        </SwiperSlide>

        {/* Slide 6: Visualisation 2 */}
        <SwiperSlide>
          <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2 style={{
              color: '#E035A2',
              fontSize: '2.5em',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              📊 Synergies & Cost Savings
            </h2>
            <img
              src="/diagrams/chart-07-synergies-savings.png"
              alt="Synergies and Cost Savings Analysis"
              style={{
                width: '100%',
                maxWidth: '900px',
                height: 'auto',
                borderRadius: '15px',
                border: '3px solid rgba(224, 53, 162, 0.3)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
              }}
            />
          </div>
        </SwiperSlide>

        {/* Slide 7: Visualisations 3 & 4 + Footer */}
        <SwiperSlide>
          <div style={{ width: '100%', maxWidth: '1200px' }}>
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{
                color: '#E035A2',
                fontSize: '2em',
                marginBottom: '30px',
                textAlign: 'center'
              }}>
                📊 Benefits & ROI
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <div>
                  <h3 style={{ color: '#BD94BB', marginBottom: '15px', fontSize: '1.2em', textAlign: 'center' }}>
                    Net Benefits Distribution
                  </h3>
                  <img
                    src="/diagrams/chart-03-net-benefits-pie.png"
                    alt="Net Benefits Distribution"
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
                  <h3 style={{ color: '#BD94BB', marginBottom: '15px', fontSize: '1.2em', textAlign: 'center' }}>
                    ROI Multiplier Effect
                  </h3>
                  <img
                    src="/diagrams/chart-01-roi-multiplier.png"
                    alt="ROI Multiplier Effect"
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
            </div>
            <footer style={{
              textAlign: 'center',
              padding: '20px',
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
