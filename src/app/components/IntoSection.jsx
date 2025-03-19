import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4">
        
       
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#101010] text-left pt-5">
          Who we are
        </h2>
        
    
        <p className="text-lg leading-relaxed text-gray-700 text-left text-[#101010] mb-8 pb-5">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is
          positioned for long-term success. We
          believe that the human dimensions are essential to start any successful 
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>

       
        <Image
          src="/images/Mid Image.png"
          alt="Mid Section"
          width={1528}
          height={629}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
