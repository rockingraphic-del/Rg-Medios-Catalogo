import Image from 'next/image';

export default function ProductCard({ title, price, image, onAdd }) {
    return (
        <div className="glass" style={{
            borderRadius: '24px',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
        }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <div style={{ position: 'relative', height: '300px', width: '100%', background: '#1a1a1a' }}>
                {/* Placeholder for no image, or actual image */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.2)',
                    fontSize: '3rem',
                    background: 'radial-gradient(circle at center, #2a2a2a, #111)'
                }}>
                    RG
                </div>
            </div>

            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '600', letterSpacing: '-0.02em' }}>{title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>High Fidelity Audio</p>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--primary)' }}>${price}</span>
                    <button style={{
                        background: 'rgba(255,255,255,0.1)',
                        border: 'none',
                        color: 'white',
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                        zIndex: 10
                    }}
                        onClick={onAdd}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
