"use client";

import { useEffect } from "react";

interface Position {
    x: number;
    y: number;
}

interface Size {
    width: number;
    height: number;
}

const WindRoseSwipe: React.FC = () => {
    const containerWidth: number = 435;
    const containerHeight: number = 600;
    const slideInterval: number = 5000; // Her slaytın gösterim süresi

    const imageSets: string[][] = [
        [
            "/images/homepage/wind-rose/man-img1.webp",
            "/images/homepage/wind-rose/man-img2.webp",
            "/images/homepage/wind-rose/man-img3.webp",
            "/images/homepage/wind-rose/man-img4.webp"
        ],
        [
            "/images/homepage/wind-rose/woman-img1.webp",
            "/images/homepage/wind-rose/woman-img2.webp",
            "/images/homepage/wind-rose/woman-img3.webp",
            "/images/homepage/wind-rose/woman-img4.webp"
        ]
    ];

    const positions: Position[] = [
        { x: (42 / containerWidth) * 100, y: (0 / containerHeight) * 100 },
        { x: (284 / containerWidth) * 100, y: (86 / containerHeight) * 100 },
        { x: (166 / containerWidth) * 100, y: (340 / containerHeight) * 100 },
        { x: (0 / containerWidth) * 100, y: (216 / containerHeight) * 100 }
    ];

    const sizes: Size[] = [
        { width: (230 / containerWidth) * 100, height: (205 / containerHeight) * 100 },
        { width: (150 / containerWidth) * 100, height: (225 / containerHeight) * 100 },
        { width: (230 / containerWidth) * 100, height: (260 / containerHeight) * 100 },
        { width: (145 / containerWidth) * 100, height: (235 / containerHeight) * 100 }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const elements: NodeListOf<HTMLDivElement> = document.querySelectorAll('.wind-rose-wrap > div');
            elements.forEach(element => {
                if (element.classList.contains('active')) {
                    element.classList.remove('active');
                } else {
                    element.classList.add('active');
                }
            });
        }, slideInterval);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-[100%] 2xl:w-[435px] pt-[138%]">
            {positions.map((position, index) => (
                <div
                    key={index}
                    className="absolute overflow-hidden wind-rose-wrap"
                    style={{
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                        width: `${sizes[index].width}%`,
                        height: `${sizes[index].height}%`
                    }}
                >
                    <div className="absolute inner">
                        <div
                            className="absolute rounded-[20px] front"
                            style={{
                                backgroundImage: `url(${imageSets[0][index]})`,
                            }}
                        />
                        <div
                            className="absolute rounded-[20px] back"
                            style={{
                                backgroundImage: `url(${imageSets[1][index]})`,
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WindRoseSwipe;
