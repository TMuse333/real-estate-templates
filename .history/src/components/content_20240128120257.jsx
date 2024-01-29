import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TextFormat from "./textFormat";
import '../styles/content.css'; // Import your CSS file

const Content = ({ title, image, description, rev, link, linkText, hasTitle, id, hasAnimation, hasTilt }) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const [tiltAngle, setTiltAngle] = useState(30);
    const contentRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            // ... (your existing code)
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [id]);

    const animations = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    };

    const textAnimations = {
        hidden: {
            opacity: 0,
            x: rev ? -50 : 50
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
                delay: 0.6
            },
            x: 0
        }
    };

    const styles = {
        contentContainer: {
            width: '100vw',
            position: 'relative',
            padding: '3px 0',
            background: 'radial-gradient(circle at center, #0099cd, #3073a0)',
        },
        company: {
            transform: 'perspective(1000px) rotateX(20deg)',
        },
        content1: {
            margin: '5rem 0',
            background: 'radial-gradient(circle at center, rgba(0, 153, 205, 0.7), rgba(48, 115, 160, 0.7))',
        },
        content2: {
            background: 'radial-gradient(circle at center, rgba(0, 153, 205, 0.7), rgba(48, 115, 160, 0.7))',
        },
        imageTextBox: {
            display: 'flex',
            flexDirection: rev ? 'column-reverse' : 'column',
            marginTop: '2rem',
        },
        descriptionText: {
            fontFamily: "'Palatino Sans', 'Palatino Sans Informal', 'Palatino Sans Text', 'Palatino Sans W1G', 'Palatino Sans W01', sans-serif",
            color: '#ffffff',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            fontWeight: 400,
            fontSize: '1rem',
            padding: '1rem 1rem 0 1rem',
        },
        contentImage: {
            objectFit: 'cover',
            width: '90vw',
            height: '60vw',
            maxWidth: '760px',
            maxHeight: '400px',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        descriptionBox: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            whiteSpace: 'pre-line',
            marginLeft: rev ? '0' : '3rem',
            marginTop: '1rem',
        },
        descriptionBoxButton: {
            marginTop: '2rem',
        },
        buttonHover: {
            backgroundColor: '#00bfff',
            color: '#FFF',
        },
    };

    const handleResponsiveStyles = () => {
        const width = window.innerWidth;

        if (width >= 655 && width < 865) {
            styles.imageTextBox.flexDirection = 'column';
            styles.contentImage.width = '48vw';
            styles.contentImage.height = '65vw';
            styles.contentImage.maxHeight = '567px';
            styles.contentImage.maxWidth = '668px';
            styles.descriptionBox.marginTop = '-2rem';
            styles.descriptionBox.width = '40vw';
            styles.descriptionText.fontSize = '1.2rem';
            styles.titleText.fontSize = '2.5rem';
        } else if (width >= 865) {
            styles.imageTextBox = {
                ...styles.imageTextBox,
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'grid',
                width: '90vw',
                maxWidht: '1200px',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
                marginBottom: '2rem',
            };
            styles.imageBox.width = 'auto';
            styles.contentImage.width = '48vw';
            styles.contentImage.height = '65vw';
            styles.contentImage.maxHeight = '567px';
            styles.contentImage.maxWidth = '668px';
            styles.contentImage.marginLeft = 'auto';
            styles.descriptionBox.marginTop = '-2rem';
            styles.descriptionBox.display = 'flex';
            styles.descriptionBox.marginLeft = '0';
            styles.descriptionBox.paddingBottom = '3rem';
            styles.descriptionBox.width = '40vw';
            styles.titleText.fontSize = '2.5rem';
        }
    };

    // Call the responsive styles function on component mount and window resize
    useEffect(() => {
        handleResponsiveStyles();
        window.addEventListener('resize', handleResponsiveStyles);
        return () => {
            window.removeEventListener('resize', handleResponsiveStyles);
        };
    }, []);

    return (
        <div className="content-container" ref={contentRef} id={id} style={hasTilt ? { transform: `perspective(1000px) rotateX(${tiltAngle}deg)` } : styles.contentContainer}>
            <div className={`image-text-box ${rev ? 'reverse' : ''}`} style={styles.imageTextBox}>
                {rev ? (
                    <div className="description-box" style={styles.descriptionBox}>
                        <p className="description-text" style={styles.descriptionText}>
                            <br />
                            {link != null && (
                                <Link to={link}>
                                    <button className="button" style={styles.buttonHover}>
                                        {linkText}
                                    </button>
                                </Link>
                            )}
                        </p>
                    </div>
                ) : null}
                <div className="image-box">
                    <h1 className="title-text" style={styles.titleText}>
                        {title}
                    </h1>
                    <motion.img
                        src={image}
                        loading="lazy"
                        className="content-image"
                        initial={hasAnimation ? animations.hidden : animations.visible}
                        animate={isAnimated && hasAnimation ? animations.visible : null}
                        style={styles.contentImage}
                    />
                </div>
                {rev ? null : (
                    <div className="description-box" style={styles.descriptionBox}>
                        {hasTitle && <h2 className="title-text">{title}</h2>}
                        <TextFormat />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Content;
