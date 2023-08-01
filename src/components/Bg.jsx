const Bg = ({ tema }) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        zIndex: "-1",
        transition: ".3s ease",
        overflow: "hidden",
        background: tema === "dark" ? "var(--bg_dark)" : "var(--bg_light)",
      }}
    ></div>
  );
};

export default Bg;
