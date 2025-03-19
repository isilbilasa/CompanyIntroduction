import Image from 'next/image';

export default function MidImageSection() {
  return (
    <section className="py-15 px-12">
      <div className="max-w-5xl mx-auto">
        <Image
          src="/images/Mid Image.png"
          alt="Mid Section"
          width={1528}
          height={629}
          className="rounded-lg"
          
        />
      </div>
    </section>
  );
}
