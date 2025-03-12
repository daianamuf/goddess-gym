import GymMachineCard from "./GymMachineCard";

const machines = [
  {
    title: "Presă pentru picioare",
    imageSrc: "/legpress.jpg",
    muscles: "Cvadricepși, Glutei, Ischiogambieri, Gambe",
  },
  {
    title: "Tracțiuni la helcometru",
    imageSrc: "/latpull.jpg",
    muscles: "Dorsali, Bicepși, Romboizi, Deltoizi posteriori",
  },
  {
    title: "Împins cu gantere",
    imageSrc: "/dumbbells.jpg",
    muscles: "Pectorali, Tricepși, Deltoizi anteriori, Stabilizatori (Core)",
  },
  {
    title: "Bandă de alergare",
    imageSrc: "/treadmill.jpg",
    muscles:
      "Cardio, Cvadricepși, Ischiogambieri, Gambe, Glutei, Stabilizatori (Core)",
  },
];

export default function GymMachines() {
  return (
    <div className="container mx-auto p-5">
      {machines.map((machine, id) => (
        <GymMachineCard
          key={id}
          {...machine}
        />
      ))}

      <button>Descopera intreaga Goddes Gym</button>
    </div>
  );
}
