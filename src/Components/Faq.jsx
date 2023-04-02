import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="pb-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggle}
      >
        <h3 className="text-[18px] font-medium">{question}</h3>
        <div class="text-[30px]">{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && <p className="mt-4 text-gray-600">{answer}</p>}
    </div>
  );
};

const FaqSection = () => {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="w-[70%] mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-[40px] font-bold text-gray-900 flex justify-center mb-[70px]">
        Frequently Asked Questions
      </h2>
      <div className="mt-6">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
