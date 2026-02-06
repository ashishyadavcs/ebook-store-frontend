"use client";
import styled from "styled-components";

// Modern SaaS Layout Components with Premium Styling

export const Section = styled.section`
    padding: 100px 0;
    position: relative;

    @media (max-width: 768px) {
        padding: 60px 0;
    }
`;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 32px;

    @media (max-width: 768px) {
        padding: 0 24px;
    }

    @media (max-width: 480px) {
        padding: 0 16px;
    }
`;

export const Title = styled.h1`
    font-size: 56px;
    font-weight: 700;
    margin: 0 0 24px 0;
    color: #0f172a;
    line-height: 1.1;
    letter-spacing: -0.02em;

    @media (max-width: 768px) {
        font-size: 42px;
        margin-bottom: 20px;
    }

    @media (max-width: 480px) {
        font-size: 36px;
        margin-bottom: 16px;
    }
`;

export const Subtitle = styled.p`
    font-size: 20px;
    color: #64748b;
    text-align: center;
    margin: 0 0 64px 0;
    line-height: 1.6;
    max-width: 700px;
    font-weight: 400;

    &:not(:first-child) {
        margin-top: -16px;
    }

    @media (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 48px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        margin-bottom: 40px;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 32px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 24px;
    }
`;

// Enhanced Hero Section with Premium Styling
export const HeroSection = styled(Section)`
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    color: white;
    text-align: center;
    overflow: hidden;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.03"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.03"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.02"/><circle cx="10" cy="50" r="0.5" fill="white" opacity="0.02"/><circle cx="90" cy="30" r="0.5" fill="white" opacity="0.02"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        pointer-events: none;
    }

    ${Title} {
        color: white;
        font-size: 72px;
        margin-bottom: 32px;
        text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        position: relative;
        z-index: 2;

        @media (max-width: 768px) {
            font-size: 52px;
            margin-bottom: 24px;
        }

        @media (max-width: 480px) {
            font-size: 42px;
            margin-bottom: 20px;
        }
    }

    ${Subtitle} {
        color: rgba(255, 255, 255, 0.95);
        margin: 0 auto 64px;
        max-width: 800px;
        font-size: 22px;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        position: relative;
        z-index: 2;

        @media (max-width: 768px) {
            font-size: 20px;
            margin-bottom: 48px;
        }
    }
`;

// Premium Feature Card with Enhanced Styling
export const FeatureCard = styled.div`
    background: white;
    padding: 48px 32px;
    border-radius: 20px;
    box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.08),
        0 2px 8px rgba(0, 0, 0, 0.04),
        inset 0 1px 0 rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
        transform: scaleX(0);
        transition: transform 0.4s ease;
    }

    &:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.12),
            0 8px 24px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);

        &::before {
            transform: scaleX(1);
        }
    }

    h3 {
        font-size: 24px;
        font-weight: 700;
        margin: 0 0 16px 0;
        color: #0f172a;
        letter-spacing: -0.01em;
    }

    p {
        color: #64748b;
        line-height: 1.7;
        margin: 0;
        font-size: 16px;
    }

    @media (max-width: 768px) {
        padding: 40px 24px;

        h3 {
            font-size: 22px;
        }
    }
`;

// Enhanced Stats Grid with Premium Styling
export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 40px;
    margin-top: 64px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 32px;
        margin-top: 48px;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        gap: 24px;
        margin-top: 40px;
    }
`;

export const StatItem = styled.div`
    text-align: center;
    padding: 40px 24px;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    border-radius: 16px;
    border: 1px solid #e2e8f0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }

    .number {
        font-size: 64px;
        font-weight: 800;
        color: #667eea;
        display: block;
        margin-bottom: 12px;
        line-height: 1;
        letter-spacing: -0.02em;

        @media (max-width: 768px) {
            font-size: 48px;
        }
    }

    .label {
        font-size: 18px;
        color: #475569;
        font-weight: 600;
        letter-spacing: 0.01em;
    }

    @media (max-width: 768px) {
        padding: 32px 20px;
    }
`;

// Premium Content Section
export const ContentSection = styled(Section)`
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%);
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="%2364748b" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>');
        pointer-events: none;
    }
`;

// Enhanced Two Column Layout
export const TwoColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;

    @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 48px;
    }

    @media (max-width: 768px) {
        gap: 40px;
    }

    > div:first-child {
        p {
            font-size: 20px;
            line-height: 1.7;
            color: #64748b;
            margin-bottom: 24px;

            &:last-child {
                margin-bottom: 0;
            }

            @media (max-width: 768px) {
                font-size: 18px;
                margin-bottom: 20px;
            }
        }
    }

    > div:last-child {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        border-radius: 24px;
        height: 320px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 80px;
        color: white;
        box-shadow:
            0 20px 40px rgba(240, 147, 251, 0.3),
            0 8px 16px rgba(245, 87, 108, 0.2);
        position: relative;
        overflow: hidden;

        &::before {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
            0%,
            100% {
                transform: translate(-50%, -50%) rotate(0deg);
            }
            50% {
                transform: translate(-50%, -50%) rotate(180deg);
            }
        }

        @media (max-width: 968px) {
            height: 280px;
            font-size: 64px;
        }

        @media (max-width: 768px) {
            height: 240px;
            font-size: 56px;
        }
    }
`;

// Premium Contact Section
export const ContactSection = styled(Section)`
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
    color: white;
    text-align: center;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="stars" width="50" height="50" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="40" r="0.3" fill="white" opacity="0.08"/><circle cx="40" cy="10" r="0.3" fill="white" opacity="0.08"/></pattern></defs><rect width="100" height="100" fill="url(%23stars)"/></svg>');
        pointer-events: none;
    }

    ${Title} {
        color: white;
        position: relative;
        z-index: 2;
    }

    ${Subtitle} {
        color: #cbd5e1;
        position: relative;
        z-index: 2;
    }
`;

export const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
    max-width: 700px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 24px;
    }
`;

export const ContactCard = styled.div`
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    padding: 32px 24px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow:
        0 8px 32px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;

    &:hover {
        transform: translateY(-4px);
        box-shadow:
            0 16px 48px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
    }

    strong {
        color: #f1f5f9;
        display: block;
        margin-bottom: 12px;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0.01em;
    }

    span {
        color: #667eea;
        font-size: 18px;
        font-weight: 500;
    }

    @media (max-width: 768px) {
        padding: 28px 20px;

        strong {
            font-size: 15px;
        }

        span {
            font-size: 17px;
        }
    }
`;

// Testimonial Components for Social Proof
export const TestimonialSection = styled(Section)`
    background: linear-gradient(135deg, #fef7f0 0%, #fef3e7 50%, #fde68a 100%);
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="quotes" width="40" height="40" patternUnits="userSpaceOnUse"><text x="20" y="25" font-size="16" fill="%23f59e0b" opacity="0.1">"</text></pattern></defs><rect width="100" height="100" fill="url(%23quotes)"/></svg>');
        pointer-events: none;
    }
`;

export const TestimonialCard = styled.div`
    background: white;
    padding: 40px 32px;
    border-radius: 20px;
    box-shadow:
        0 10px 40px rgba(245, 158, 11, 0.1),
        0 4px 12px rgba(0, 0, 0, 0.05),
        inset 0 1px 0 rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(245, 158, 11, 0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 6px;
        background: linear-gradient(90deg, #f59e0b, #d97706, #b45309);
        transform: scaleX(0);
        transition: transform 0.4s ease;
    }

    &:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow:
            0 20px 60px rgba(245, 158, 11, 0.15),
            0 8px 24px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);

        &::before {
            transform: scaleX(1);
        }
    }

    svg:first-child {
        font-size: 32px;
        color: #f59e0b;
        margin-bottom: 20px;
        opacity: 0.8;
    }

    p {
        font-size: 16px;
        line-height: 1.6;
        color: #374151;
        margin: 0 0 24px 0;
        font-style: italic;
        position: relative;

        &::before {
            content: '"';
            font-size: 48px;
            color: #f59e0b;
            position: absolute;
            top: -10px;
            left: -20px;
            opacity: 0.3;
        }

        &::after {
            content: '"';
            font-size: 48px;
            color: #f59e0b;
            position: absolute;
            bottom: -30px;
            right: -20px;
            opacity: 0.3;
        }
    }

    .rating {
        display: flex;
        gap: 4px;
        margin-bottom: 16px;

        svg {
            color: #fbbf24;
            font-size: 16px;
        }
    }

    cite {
        color: #6b7280;
        font-weight: 600;
        font-size: 14px;
        text-align: right;
        display: block;
        margin-top: 16px;
    }

    @media (max-width: 768px) {
        padding: 32px 24px;

        p {
            font-size: 15px;
        }
    }
`;
