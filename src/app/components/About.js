import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="flex flex-row items-center h-[400px] mx-9 gap-16 justify-between lg:mx-64">
        <div className="w-[30%] ">
          <h1 className="text-4xl font-bold my-4">Enjoy Unlimited Animes</h1>
          <p>
            Watch animes on your free time. No need to pay for a subscription.
          </p>
        </div>
        <Image
          src="/about.png"
          alt="about"
          height={500}
          width={500}
          className="h-[50%] lg:h-[70%] w-[50%]"
        />
      </div>
    </div>
  );
};
export default About;
