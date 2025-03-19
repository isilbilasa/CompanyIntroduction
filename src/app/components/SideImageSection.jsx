import Image from 'next/image';

export default function SideImageSection() {
  return (
    <div>
      <Image
        src="/images/Side Image.png"  
        alt="Side Image"
        width={522}
        height={691}
        className="rounded-lg p-3"
      />
    </div>
  );
}
