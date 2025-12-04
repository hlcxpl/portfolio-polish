import "./Beams.css";

const Beams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none beams-container">
      <div className="beam beam-1"></div>
      <div className="beam beam-2"></div>
      <div className="beam beam-3"></div>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
    </div>
  );
};

export default Beams;
