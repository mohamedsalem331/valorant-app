const AbilityVideo = () => {
  return (
    <>
      <div className="w-[700px] ">
        <video autoPlay preload="true" loop muted>
          <source src={data[active].videoUrl} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default AbilityVideo;
