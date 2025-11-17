import React from 'react';
import AngleDown from "@/icons/angle-down";

interface FaqItemProps {
    question: string;
    answer: React.ReactNode; // ReactNode allows passing HTML content
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    return (
        <details className="border-[#BDD6E6] border-t-[1px]">
            <summary className="flex flex-row items-center py-[20px] cursor-pointer select-none">
                <h4 className="mr-auto text-[16px] lg:text-[20px] font-medium" dangerouslySetInnerHTML={{ __html: question }}></h4>
                <AngleDown fill="#002554" width={15} height={10} className="flex-shrink-0" />
            </summary>
            <div className="py-[20px] lg:text-[20px]">{answer}</div>
        </details>
    );
};

export default FaqItem;
