const team = [
  {
    id: 1,
    name: "Caio Pires",
    role: "caiopires@uni9.edu.br",
    bio: "RA: 925205143",
    image: "/fotoCaio.png",
  },
  {
    id: 2,
    name: "Gabriel Alencar",
    role: "alencar.pacheco@uni9.edu.br",
    bio: "RA: 925119867",
    image: "/foto_pacheco.png",
  },
  {
    id: 3,
    name: "Gabriel Sartori",
    role: "gabrielsartori@uni9.edu.br",
    bio: "RA: 925205851",
    image: "/foto_gabriel.png",
  },
  {
    id: 4,
    name: "João Henrique",
    role: "joao.ribeiron@uni9.edu.br",
    bio: "RA: 925201452.",
    image: "/foto_joao.png",
  },
  {
    id: 5,
    name: "Kailany Rodrigues",
    role: "skailany2004@uni9.edu.br",
    bio: "RA: 925204157",
    image: "/foto_kailany.png",
  },
  {
    id: 6,
    name: "Leandro Jesus",
    role: "leandro.jesuso@uni9.edu.br",
    bio: "RA: 925113132",
    image: "/foto_leandro.png",
  },
  {
    id: 7,
    name: "Otávio Guilherme",
    role: "otaviorhein@uni9.edu.br",
    bio: "RA: 925201156",
    image: "/foto_otavio.png",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-5xl font-light text-gray-900 tracking-tight">
            Nosso Time
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            As pessoas por trás da UNIFIT.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {team.map((person) => (
            <div key={person.id} className="text-center space-y-5 group">
              <div className="w-40 h-40 mx-auto rounded-full bg-gray-100 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-light text-gray-900">{person.name}</h3>
                <p className="text-xs text-gray-500 font-light uppercase tracking-wider">
                  {person.role}
                </p>
              </div>

              <p className="text-gray-600 font-light leading-relaxed text-sm">
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
