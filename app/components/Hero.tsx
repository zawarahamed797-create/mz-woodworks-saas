export default function Hero() {
  return (
    <section className="h-[90vh] flex flex-col justify-center items-center bg-black text-white text-center">

      <h1 className="text-5xl font-bold">
        MZ Wood Works
      </h1>

      <p className="mt-4">
        Italian Kitchen • Wardrobe • Media Wall • Shop Fitting
      </p>

      <div className="mt-6 flex gap-4">
        <a href="tel:03187196942" className="bg-white text-black px-5 py-2 rounded">
          Call Now
        </a>

        <a href="https://wa.me/923187196942" className="bg-green-500 px-5 py-2 rounded">
          WhatsApp
        </a>
      </div>

    </section>
  );
}
