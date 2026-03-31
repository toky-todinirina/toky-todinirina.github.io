const HighTechBackground = () => {
  const nodes = Array.from({ length: 40 }, (_, i) => i);

  return (
    <div className="high-tech-bg" aria-hidden="true">
      <div className="high-tech-bg__grid" />
      <div className="high-tech-bg__overlay" />
      <div className="high-tech-bg__glow" />

      <div className="high-tech-bg__particles">
        {nodes.map((i) => (
          <span key={i} className={`high-tech-bg__particle p-${i % 8}`} />
        ))}
      </div>
    </div>
  );
};

export default HighTechBackground;
