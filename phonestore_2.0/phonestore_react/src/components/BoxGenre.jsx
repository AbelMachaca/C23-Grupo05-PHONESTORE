import PropTypes from 'prop-types'
const BoxGenre = (props) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">{props.name}</div>
      </div>
    </div>
  );
};

BoxGenre.propTypes = {
    name: PropTypes.string
}

BoxGenre.defaultProps = {
    name: "Default"
}

export default BoxGenre;
