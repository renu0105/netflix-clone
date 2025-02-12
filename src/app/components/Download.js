const Download = () => {
  return (
    <div className="border-t border-gray-800">
      <div className="flex flex-row items-center h-[400px] mx-9 gap-16 justify-between lg:mx-64">
        <img
          src="/iphone.png"
          alt=""
          width={300}
          height={300}
          className="h-72 lg:h-80 w-52 lg:w-56"
        />
        <div className="w-[900px] lg:w-[40%]">
          <h1 className="lg:text-4xl text-4xl my-5 font-bold ">
            Download your shows to watch offline
          </h1>
          <p>Save your favorites easily and always have something to watch</p>
        </div>
      </div>
    </div>
  );
};
export default Download;
