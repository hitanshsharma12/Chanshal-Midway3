export default function MapSection() {
  return (
    <section className="py-24 bg-[#0F172A] text-white">
      <div className="luxury-container">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[4px] text-[#C5A46E] mb-4">
            Location
          </p>

          <h2 className="text-5xl font-bold">
            Find Chanshal Midway
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.0209441231036!2d77.7849378!3d31.210360000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905fbf8f8bc7f37%3A0xaf4c8f7ac17e673!2sChanshal%20Midway!5e1!3m2!1sen!2sin!4v1779021187887!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}