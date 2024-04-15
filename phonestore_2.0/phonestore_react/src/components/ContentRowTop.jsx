import ContentRowMovies from "./ContentRowMovies";
import GenresInDb from "./GenresInDb";
import LastMovie from "./LastMovie";

export default function ContentRowTop() {
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>

      <ContentRowMovies/>

      <div className="row">
        <LastMovie />
        <GenresInDb/>
      </div>
    </div>
  );
}
