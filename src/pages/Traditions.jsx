import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Brush, Music, Landmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TraditionCard = ({ title, desc, img, icon: Icon, color, delay }) => (
    <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay, duration: 0.6 }}
        viewport={{ once: true }}
        className="glass-card tradition-card group"
    >
        <div className="card-image-wrapper">
            <div className="image-overlay" style={{ backgroundColor: color }} />
            <img
                src={img}
                alt={title}
                className="card-image"
            />
        </div>
        <div className="card-content">
            <div className="card-header">
                <div className="card-icon" style={{ backgroundColor: `${color}20`, color: color }}>
                    <Icon size={24} color={color} />
                </div>
                <h3 className="card-title">{title}</h3>
            </div>
            <p className="card-desc">
                {desc}
            </p>
        </div>
    </motion.div>
);

function Traditions() {
    const navigate = useNavigate();

    return (
        <div className="traditions-page">
            {/* Background Decor */}
            <div className="traditions-bg-gradient" />

            <div className="traditions-container">
                <button
                    onClick={() => navigate('/')}
                    className="back-button"
                >
                    <ArrowLeft size={20} /> Back to Celebration
                </button>

                <header className="traditions-header">
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="main-title"
                    >
                        Soul of Odisha
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="main-subtitle"
                    >
                        Beyond the harvest, explore the timeless arts and spiritual depth that define this ancient land.
                    </motion.p>
                </header>

                <div className="traditions-grid">
                    <TraditionCard
                        title="Odissi Dance"
                        desc="One of the eight classical dance forms of India, Odissi is known for its lyrical movements, sculpturesque poses (Tribhangi), and deep spiritual connection to Lord Jagannath."
                        img="https://i.ytimg.com/vi/gtvmaf26jus/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gOSgkMA8=&rs=AOn4CLDi_9_o7dIP0YljOlb1-6WNtlwLzg"
                        icon={Music}
                        color="#D32F2F"
                        delay={0.1}
                    />

                    <TraditionCard
                        title="Pattachitra"
                        desc="Meaning 'cloth-painting', this traditional art form dates back to 5 BC. Intricate details, mythological narratives, and natural colors characterize these stunning scroll paintings."
                        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCFxRf1oczF3fCmhR85bU0U7xQWfi6hn6xUQ&s"
                        icon={Brush}
                        color="#FF9933"
                        delay={0.3}
                    />

                    <TraditionCard
                        title="Jagannath Culture"
                        desc="The heartbeat of Odisha. The unique philosophy of Lord Jagannath embraces equality, assimilation, and a syncretic worldview that transcends caste and creed."
                        img="https://1.bp.blogspot.com/-amDiHCmbDB0/XDRYhm0MgJI/AAAAAAAAEBg/NAKB78Dn6-g2bGAO5wO6iz1On-WurPUgwCLcBGAs/s1600/11899797313_076d81d36c.jpg"
                        icon={Landmark}
                        color="#DD2476"
                        delay={0.5}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="glass-card footer-quote"
                >
                    <h3 className="quote-title">Utkala: The Land of Excellence in Art</h3>
                    <p className="quote-text">
                        "Odisha is not just a state; it is a celebration of art, culture, and nature. From the stone carvings of Konark to the sand art on Puri beach, creativity flows in every grain of sand."
                    </p>
                </motion.div>

            </div>
        </div>
    );
}

export default Traditions;
