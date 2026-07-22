export default function Hero() {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            paddingTop: '60px' // For Navbar
        }}>
            <div style={{ position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
                    opacity: 0.2,
                    pointerEvents: 'none',
                    zIndex: -1
                }} />

                <h1 className="gradient-text" style={{
                    fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                    fontWeight: '800',
                    lineHeight: '1',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.03em'
                }}>
                    NEXUS
                    <span style={{ display: 'block', color: 'var(--foreground)', fontSize: '0.4em', fontWeight: '300', marginTop: '0.5rem', letterSpacing: '0.05em' }}>
                        AUDIO & VISUALS
                    </span>
                </h1>
            </div>

            <p style={{
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '500px',
                fontSize: '1.2rem',
                marginBottom: '3rem',
                lineHeight: '1.6'
            }}>
                Equipping the new wave of creators with state-of-the-art technology.
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <button style={{
                    background: 'var(--foreground)',
                    color: 'var(--background)',
                    padding: '1rem 2.5rem',
                    borderRadius: '99px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                }}>
                    Shop Now
                </button>
                <button className="glass" style={{
                    color: 'var(--foreground)',
                    padding: '1rem 2.5rem',
                    borderRadius: '99px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                }}>
                    View Showreel
                </button>
            </div>
        </section>
    );
}
