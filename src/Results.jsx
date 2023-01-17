import Pet from "./Pet";
import Pagination from "./Pagination";

const Results = ({ pets, page, onChange, totalPages }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {!pets.length ? (
          <h1>No pets found</h1>
        ) : (
          pets.map((pet) => (
            <Pet
              animal={pet.animal}
              name={pet.name}
              breed={pet.breed}
              images={pet.images}
              id={pet.id}
              location={`${pet.city}, ${pet.state}`}
              key={pet.id}
            ></Pet>
          ))
        )}
      </div>
      <Pagination page={page} totalPages={totalPages} onChange={onChange} />
    </div>
  );
};

export default Results;
