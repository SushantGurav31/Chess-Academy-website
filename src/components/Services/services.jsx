import "./Services.css";

const data = [
  { title: "Web Development", desc: "Modern websites" },
  { title: "UI Design", desc: "Clean & user-friendly" },
  { title: "Performance", desc: "Fast loading apps" },
];

function Services() {
  return (
    <div className="services">
      {data.map((item, i) => (
        <div className="card" key={i}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;