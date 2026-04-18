export default function Services() {
  const services = [
    "Italian Kitchen",
    "Wardrobe",
    "Media Wall",
    "Shop Fitting",
    "With & Without Material"
  ];

  return (
    <section style={{padding:"40px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"20px"}}>

      {services.map((s, i) => (
        <div key={i} style={{border:"1px solid #ccc",padding:"20px",borderRadius:"10px"}}>
          <h3>{s}</h3>
        </div>
      ))}

    </section>
  );
}
