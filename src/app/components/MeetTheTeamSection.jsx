import Image from 'next/image';

const team = [
  {
    name: 'Brooklyn Simmons',
    role: 'Designer',
    image: '/images/Avatar.png',
  },
  {
    name: 'Esther Howard',
    role: 'Founder',
    image: '/images/Avatar-2.png',
  },
  {
    name: 'Cody Fisher',
    role: 'Developer',
    image: '/images/Avatar-3.png',
  },
];

export default function TeamSection() {
  return (
    <section className="py-16">
      <h2 className="text-center text-4xl font-bold p-5 m-5">
        Meet the heroes behind the magic
      </h2>
      <div className="container mx-auto px-4">
        
        <div className="flex flex-nowrap justify-center gap-8 my-5 overflow-x-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="border rounded-lg shadow p-6 flex flex-col justify-center w-64 h-64 mx-4 mb-5 flex-shrink-0"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="p-4"
              />
              <h4 className="mx-4 text-xl font-bold">{member.name}</h4>
              <p className="text-gray-500 font-manrope mx-4">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
