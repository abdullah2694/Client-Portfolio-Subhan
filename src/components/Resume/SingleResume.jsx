import PropTypes from 'prop-types'

const SingleResume = ({ element }) => {
  const { title, duration, subTitle, text } = element;

  const renderText = () => {
    if (Array.isArray(text)) {
      return (
        <ul>
          {text.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );
    }

    const lines = typeof text === 'string' ? text.split('\n').filter(Boolean) : [];
    if (lines.length > 1) {
      return (
        <ul>
          {lines.map((item, idx) => (
            <li key={idx}>{item.trim()}</li>
          ))}
        </ul>
      );
    }

    return <p>{text}</p>;
  };

  return (
    <div className="st-resume-timeline">
      <h3 className="st-resume-timeline-title">{title}</h3>
      <div className="st-resume-timeline-duration">{duration}</div>
      <h4 className="st-resume-timeline-subtitle">{subTitle}</h4>
      <div className="st-resume-timeline-text">{renderText()}</div>
    </div>
  );
}

SingleResume.propTypes = {
  element: PropTypes.object,
}

export default SingleResume;
