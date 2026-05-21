import Image from "next/image";

export default function Future() {
  const features = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
      title: "Fast Performance",
      desc: "Optimized for speed with modern architecture and caching.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/9068/9068756.png",
      title: "Clean Code",
      desc: "Scalable, maintainable and developer-friendly structure.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2092/2092663.png",
      title: "Secure System",
      desc: "Built with strong authentication and safe API structure.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
      title: "Instant Response",
      desc: "Real-time interactions with smooth user experience.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
      title: "Modern UI",
      desc: "Beautiful interface with latest design trends.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      title: "Global Ready",
      desc: "Works seamlessly across devices and regions.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">
          Future Ready <span className="text-blue-500">Features</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Build scalable and modern applications with powerful tools
        </p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/5 border border-white/10
            hover:bg-white/10 transition duration-300 backdrop-blur-md text-center"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={56}
              height={56}
              className="mx-auto mb-4"
            />

            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
