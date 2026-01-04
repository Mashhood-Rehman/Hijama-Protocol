"use client";

import React from 'react';

interface VectorProps {
    className?: string;
}

export function PremiumLeaf({ className }: VectorProps) {
    return (
        <svg
            className={className}
            viewBox="0 0 100 100"
            fill="currentColor"
        >
            {/* Main leaf body */}
            <path
                d="M50 0C50 0 10 30 10 60C10 85 30 95 50 100C70 95 90 85 90 60C90 30 50 0 50 0ZM50 90C50 90 20 80 20 60C20 45 40 30 50 10C60 30 80 45 80 60C80 80 50 90 50 90Z"
                opacity="0.8"
            />
            {/* Central Vein */}
            <path
                d="M50 95V15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.9"
            />
            {/* Secondary Veins Left */}
            <path d="M50 80L35 65" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <path d="M50 65L30 50" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <path d="M50 50L35 38" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            {/* Secondary Veins Right */}
            <path d="M50 80L65 65" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <path d="M50 65L70 50" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
            <path d="M50 50L65 38" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        </svg>
    );
}

export function DnaHelix({ className }: VectorProps) {
    return (
        <svg
            className={className}
            viewBox="0 0 100 200"
            fill="none"
            stroke="currentColor"
        >
            {/* Helix Strand 1 */}
            <path
                d="M30 10C30 10 70 30 70 50C70 70 30 90 30 110C30 130 70 150 70 170"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.8"
            />
            {/* Helix Strand 2 */}
            <path
                d="M70 10C70 10 30 30 30 50C30 70 70 90 70 110C70 130 30 150 30 170"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.8"
            />

            {/* Horizontal Connectors */}
            {[25, 45, 65, 85, 105, 125, 145, 165].map((y, i) => {
                // Calculate x positions based on the sine-like paths above
                // This is a simplification but creates the visual effect
                const x1 = i % 2 === 0 ? 40 : 60;
                const x2 = i % 2 === 0 ? 60 : 40;
                return (
                    <line
                        key={y}
                        x1={x1}
                        y1={y}
                        x2={x2}
                        y2={y}
                        strokeWidth="1"
                        opacity="0.4"
                    />
                );
            })}
        </svg>
    );
}
