import { Link } from "react-router-dom";
const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "https://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="relative block">
      <div className="h-full">
        <img src={hero} alt={name} className="aspect-square h-full w-full" />
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-tr from-white to-transparent p-2">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
