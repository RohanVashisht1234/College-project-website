import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Wind, UtensilsCrossed, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Kite = ({ delay = 0, x = 0, color = "#FF512F" }) => (
    <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
        }}
        transition={{
            y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay },
            rotate: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: delay + 1 }
        }}
        className="floating-kite"
        style={{ right: `${10 + x}%`, zIndex: 0 }}
    >
        <div style={{
            width: '80px',
            height: '80px',
            background: color,
            transform: 'rotate(45deg)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            position: 'relative'
        }}>
            <div style={{
                position: 'absolute',
                bottom: '-40px',
                left: '40px',
                width: '2px',
                height: '100px',
                background: 'rgba(255,255,255,0.5)',
                transform: 'rotate(-45deg)',
                transformOrigin: 'top left'
            }} />
        </div>
    </motion.div>
);

function Home() {
    const navigate = useNavigate();

    return (
        <div className="app-container">
            {/* Background Decor */}
            <div className="bg-decor bg-decor-1" />
            <div className="bg-decor bg-decor-2" />

            {/* Floating Kites */}
            <Kite delay={0} x={5} color="#FF9933" />
            <Kite delay={2} x={25} color="#D32F2F" />
            <Kite delay={1} x={-10} color="#FFD700" />

            {/* Hero Section */}
            <header className="hero">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hero-icon-wrapper"
                >
                    <Sun size={80} className="hero-icon" />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="hero-title"
                >
                    Makar Sankranti
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="hero-subtitle"
                >
                    ମକର ସଂକ୍ରାନ୍ତି
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="glass-card info-badge"
                >
                    <div className="badge-item">
                        <MapPin size={20} className="icon-accent" />
                        <span>Odisha</span>
                    </div>
                    <div className="divider" />
                    <div className="badge-item">
                        <Calendar size={20} className="icon-accent" />
                        <span>January 14, 2026</span>
                    </div>
                </motion.div>
            </header>

            {/* Content Sections */}
            <main className="main-content">

                {/* Makar Chaula */}
                <section className="content-section">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-image-wrapper"
                    >
                        <div className="image-bg-accent orange-accent"></div>
                        <img
                            src="https://firsttimercook.com/wp-content/uploads/2017/01/Makara2Bchaula2B3.jpg"
                            alt="Rice offering"
                            className="section-image"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-text"
                    >
                        <div className="section-header">
                            <UtensilsCrossed className="icon-accent" size={32} />
                            <h2>Makar Chaula</h2>
                        </div>
                        <p>
                            In Odisha, the day begins with the preparation of <span className="highlight-orange">Makar Chaula</span> - a divine blend of newly harvested uncooked rice, banana, coconut, jaggery, sesame, rasagola, khai/liaa, and chhena puddings. It is offered to the gods and shared among family and friends as a symbol of friendship and sweet bonding.
                        </p>
                        <div className="quote-box">
                            <p>"This special offering signifies the prayer for a bountiful harvest and a sweet year ahead."</p>
                        </div>
                    </motion.div>
                </section>

                {/* Kite Flying */}
                <section className="content-section reverse">
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-image-wrapper"
                    >
                        <div className="image-bg-accent red-accent"></div>
                        <img
                            src="https://www.bunkarvalley.com/wp-content/uploads/2025/04/Odisha-Celebrates-Makar-Sankranti.jpg"
                            alt="Kites in sky"
                            className="section-image"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-text"
                    >
                        <div className="section-header">
                            <Wind className="icon-secondary" size={32} />
                            <h2>The Sky Comes Alive</h2>
                        </div>
                        <p>
                            The skies of Odisha, especially in Cuttack and Bhubaneswar, turn into a vibrant canvas of colors. <span className="highlight-red">Kite flying</span> is more than just a sport; it's a celebration of freedom and joy. The enthusiastic shouts of "Kai Po Che!" and friendly competitions mark the afternoon.
                        </p>
                        <button
                            className="cta-button"
                            onClick={() => navigate('/traditions')}
                        >
                            Explore Traditions
                        </button>
                    </motion.div>
                </section>

                {/* Konark & Sun God */}
                <section className="grid-section">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="center-content"
                    >
                        <h2 className="section-title">Homage to the Sun God</h2>
                        <p className="section-desc">
                            As the sun begins its northward journey (Uttarayan), thousands flock to the <span className="highlight-orange">Konark Sun Temple</span> to offer prayers. A holy dip in the Chandrabhaga river nearby is believed to cleanse the soul.
                        </p>
                        <div className="feature-grid">
                            {[
                                { title: "Surya Puja", desc: "Worship of the Sun God" },
                                { title: "Uttarayan", desc: "Sun's Northward Journey" },
                                { title: "Mela", desc: "Traditional Fairs" }
                            ].map((item, idx) => (
                                <div key={idx} className="glass-card feature-card">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

            </main>

            <footer className="footer">
                <p className="footer-title">Happy Makar Sankranti</p>
                <p className="footer-subtitle">Made with ❤️ Rohan Vashisht, Hitarth Patel, Harsh Mishra, Laxman Patel, Yash Khapre, Om Pandey</p>
            </footer>
        </div>
    );
}

export default Home;
