import BoxGenre from "./BoxGenre";

const GenresInDb = () => {
    const genres = ["Apple","Motorola","Samsung","Xiaomi", "Otros"];
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorias - Marcas
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {genres.map((elemento,i) => <BoxGenre key={i+elemento} name={elemento}/>)}
            <BoxGenre key={"CAsa"}/>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenresInDb;
