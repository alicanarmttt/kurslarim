import PropTypes from "prop-types";

function Course({ course }) {
  const { id, title, description, price, link, image } = course;

  return (
    <div className="course">
      <img className="course-img" src={image} width={220} height={250} alt="" />
      <h4 className="course-title">{title}</h4>
      <p className="course-desc">{description}</p>
      <h3 className="course-price">{price}₺</h3>
      <div className="course-link">
        <a href={link}>1 Aylık Satın almak için</a>
      </div>
    </div>
  );
}

// Props doğrulaması ekliyoruz
Course.propTypes = {
  course: PropTypes.object.isRequired, // "course" prop'unun bir nesne olacağını ve zorunlu olduğunu belirtiyoruz
};

export default Course;
