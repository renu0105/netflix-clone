import { useState } from "react";

const Que = () => {
  const questions = [
    {
      question: "What is Netflix?",
      answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
    },
    {
      question: "How much does Netflix cost?",
      answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.`,
    },
    {
      question: "Where can I watch Netflix?",
      answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    },
    {
      question: "How do I cancel?",
      answer: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
    },
    {
      question: "What can I watch on Netflix?",
      answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
    },
    {
      question: "Is Netflix good for kids?",
      answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
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
          Ready to watch? Enter your email to create or restart your membership.
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
