const About = () => {
  return (
    <div>
      <div className="flex flex-row items-center h-[400px] mx-9 gap-16 justify-between lg:mx-64">
        <div className="w-[30%] ">
          <h1 className="text-4xl font-bold my-4">Enjoy on your TV</h1>
          <p>
            Watch on Smart TVs,PlayStation, Xbox, ChromeCast, Apple TV, Fire TV,
            Roku, and more.
          </p>
        </div>
        <img
          src="/about.png"
          alt="about"
          className="h-[50%] lg:h-[70%] w-[50%]"
        />
      </div>
    </div>
  );
};
export default About;
