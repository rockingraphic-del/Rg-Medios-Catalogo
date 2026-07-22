export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid var(--card-border)',
            padding: '4rem 2rem',
            background: 'var(--background)',
            marginTop: 'auto'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '2rem'
            }}>
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                        RG<span style={{ color: 'var(--primary)' }}>medios</span>
                    </h2>
                    <p style={{ color: '#888', maxWidth: '300px' }}>
                        Bringing the future of audio-visual technology to professionals worldwide.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '3rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Shop</h4>
                        <a href="#" style={{ color: '#888' }}>Cameras</a>
                        <a href="#" style={{ color: '#888' }}>Audio</a>
                        <a href="#" style={{ color: '#888' }}>Lighting</a>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Company</h4>
                        <a href="#" style={{ color: '#888' }}>About</a>
                        <a href="#" style={{ color: '#888' }}>Contact</a>
                        <a href="#" style={{ color: '#888' }}>Privacy</a>
                    </div>
                </div>
            </div>

            <div className="container" style={{
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '1px solid #222',
                textAlign: 'center',
                color: '#666',
                fontSize: '0.875rem'
            }}>
                © {new Date().getFullYear()} Ecomerce RGmedios. All rights reserved.
            </div>
        </footer>
    );
}
