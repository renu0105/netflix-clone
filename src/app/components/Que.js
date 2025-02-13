"use client";
import { useState } from "react";

const Que = () => {
  const questions = [
    {
      question: "what is Anime?",
      answer: `Anime is a Japanese animation studio that produces animated television series, films, and video games. The company was founded in 1997 by Tatsuya Ishihara and is based in Tokyo, Japan. Anime is known for its unique animation style, which combines traditional Japanese animation with modern technology and techniques. The company has produced a wide range of anime series, including popular shows like Naruto, Attack on Titan, and My Hero Academia.`,
    },
    {
      question: "Is watching anime online legal?",
      answer: `It depends on the website. Streaming from official platforms like Crunchyroll, Funimation, or Netflix is legal. However, using pirated websites is illegal and not recommended.`,
    },
    {
      question: "What are some popular anime genres?",
      answer: `Anime covers many genres, including action, adventure, romance, horror, sci-fi, fantasy, slice-of-life, and mecha. Popular genres like shonen (e.g., Dragon Ball), shojo (e.g., Sailor Moon), and isekai (e.g., Re:Zero) have dedicated fan bases.`,
    },
    {
      question: "Where can I watch anime for free?",
      answer: `There are legal platforms that offer free anime with ads, such as Crunchyroll, Pluto TV, and Tubi. Be cautious of unofficial sites, as they may have security risks.`,
    },
    {
      question: "Do anime have subtitles or dubs?",
      answer: `Most anime come with subtitles (subbed) and some have English voiceovers (dubbed). Platforms like Funimation focus on dubs, while Crunchyroll offers both subs and dubs.`,
    },
  ];

  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (index) => {
    setShowAnswer(showAnswer === index ? null : index);
  };
  return (
    <div className="mx-9 lg:mx-40">
      <h1 className="text-2xl font-semibold my-5">
        Frequently Asked Questions
      </h1>
      <div>
        {questions.map((question, index) => (
          <div key={index} className="my-2 text-2xl">
            <button
              className="bg-neutral-800 flex gap-5 justify-between w-full p-6 items-center hover:bg-neutral-700"
              onClick={() => toggleAnswer(index)}
            >
              {question.question}

              <span className="text-3xl">
                {showAnswer === index ? "x" : "+"}
              </span>
            </button>
            {showAnswer === index && (
              <div className="bg-neutral-800 border-t border-black p-5">
                {question.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center my-14">
        <p>
          Ready to watch? Enter your email to get started. No need to pay for a
          subscription.
        </p>
        <input
          type="email"
          placeholder="Email address"
          required
          className="bg-transparent border border-gray-100 p-4 rounded-md w-[45%] m-2"
        />
        <button className="bg-red-700 p-4 text-xl rounded-md w-48">
          Get Started &gt;
        </button>
      </div>
      <p className="text-neutral-400">
        Questions? Call
        <a href="tel:000-800-919-1743" className="underline">
          000-800-919-1743
        </a>
      </p>
    </div>
  );
};

export default Que;
