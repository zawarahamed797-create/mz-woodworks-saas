export default function Services() {
  const services = [
    "Italian Kitchen",
    "Wardrobe",
    "Media Wall",
    "Shop Fitting",
    "With & Without Material"
  ];

  return (
    <section className="p-10 grid md:grid-cols-3 gap-6">
      {services.map((s, i) => (
        <div key={i} className="p-6 shadow border rounded">
          <h3 className="text-xl font-bold">{s}</h3>
        </div>
      ))}
    </section>
  );
}
