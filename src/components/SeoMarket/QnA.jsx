import { useState } from "react";

const QnA = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        {
            question: "Why Should I Choose Seoweb ?",
            answer: "SEO is important because it can improve your organic visibility in search engine results pages. Which can translate to more brand awareness and website traffic."
        },
        {
            question: "Why is SEO Link Building Important ?",
            answer: "The importance of Link building is still a crucial component to SEO today. It's essential for helping websites rank higher in search engine results pages (SERPs). A strong link-building strategy helps create more backlinks to your website, which then helps improve the page's authority and trustworthiness on the web."
        },
        {
            question: "How Does Off Site SEO Work ?",
            answer: "Off-page SEO, sometimes referred to as off-site SEO, is an SEO marketing strategy that represents all activities conducted outside of a website to rank higher in organic search engine results. The most important off-page SEO activity is link building, which is the act of getting other websites to link back to yours."
        }
    ];

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-2xl mx-auto mt-1">
            {questions.map((item, index) => (
                <div key={index} className="hover:border-orange-300 rounded-lg border-l-4 border-black shadow-md mb-2">
                    <div className="flex hover:text-orange-500 justify-between items-center p-4 bg-white cursor-pointer" onClick={() => toggleAnswer(index)}>
                        <h2 className="text-lg font-serif font-semibold">{item.question}</h2>
                        <button className="text-2xl font-bold hover:text-orange-500 text-gray-800">
                            {openIndex === index ? '-' : '+'}
                        </button>
                    </div>
                    {openIndex === index && (
                        <div className="p-4 hover:text-gray-400 font-serif bg-white">
                            <p>{item.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default QnA;
