import PropertyCard from "../cards/PropertyCard";

const properties = [
  {
    image: "/images/property-goa.jpg",
    title: "Luxury Valley Suite",
    location: "Rohru, Himachal",
    price: "₹8,999/night",
  },
  {
    image: "/images/property-udaipur.jpg",
    title: "Mountain View Retreat",
    location: "Chanshal Valley",
    price: "₹11,999/night",
  },
  {
    image: "/images/property-mumbai.jpg",
    title: "Premium Royal Stay",
    location: "Shimla Hills",
    price: "₹14,999/night",
  },
];

export default function SignatureProperties() {
  return (
    <section className="py-28 luxury-container">
      <div className="text-center mb-16">
        <p className="uppercase tracking-[4px] text-[#C5A46E] mb-3">
          Signature Properties
        </p>

        <h2 className="text-5xl font-bold">
          Stay Beyond Expectations
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {properties.map((item) => (
          <PropertyCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}