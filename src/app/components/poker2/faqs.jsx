import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function Faqs() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleFAQ = (index) => {
    setTimeout(() => {
      setOpenQuestion(openQuestion === index ? null : index);
    }, 100);
  };

  const faqs = [
    {
      question: "How secure is my insurance information?",
      answer:
        "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential.",
    },
    {
      question: "How can I customize my insurance coverage?",
      answer:
        "Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget.",
    },
    {
      question: "Is there a waiting period for insurance claims?",
      answer:
        "There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details.",
    },
  ];
  return (
    <>
      <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-white mb-4">
            Poker FAQ
          </p>
          <p className="sm:text-4xl text-3xl font-extrabold text-white">
            Frequently Asked Questions
          </p>
        </div>
        <ul className="basis-1/2">
          {faqs.map((faq, index) => (
            <li key={index}>
              <button
                className="relative flex gap-2 items-center text-zinc-800 w-full py-5 text-base  font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded={openQuestion === index}
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex-1 text-white">{faq.question}</span>
                {openQuestion == index && (
                  <FaMinus
                    className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transition-transform duration-200`}
                  />
                )}

                {openQuestion != index && (
                  <FaPlus
                    className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transition-transform duration-200 ${
                      openQuestion === index ? "rotate-90" : ""
                    }`}
                  />
                )}
              </button>
              <div
                className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
                style={{ maxHeight: openQuestion === index ? "200px" : "0" }}
              >
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed text-white">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
