import './Modal.scss';

const Modal = ({ imgLinks, title, subTitle, details, modalClose }) => {
  const modalStyle = {
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'block',
  };

  const images = imgLinks && imgLinks.length > 0 ? imgLinks : [];

  return (
    <div className="modal show fade bd-example-modal-lg" style={modalStyle}>
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button
              type="button"
              className="btn-close"
              onClick={modalClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="modal-images-grid">
              {images.map((src, index) => (
                <div className="modal-image-item" key={index}>
                  <img src={src} alt={`${title} ${index + 1}`} />
                </div>
              ))}
            </div>
            <p className="modal-subtitle">{subTitle}</p>
            
            {details && details.length > 0 && (
              <div className="modal-details">
                {details.map((detail, idx) => {
                  if (detail.type === 'heading') {
                    return <h5 key={idx} className="modal-details-heading">{detail.content}</h5>;
                  }
                  if (detail.type === 'paragraph') {
                    return <p key={idx} className="modal-details-text">{detail.content}</p>;
                  }
                  if (detail.type === 'table') {
                    return (
                      <div className="table-responsive" key={idx}>
                        <table className="table table-bordered modal-details-table">
                          <thead>
                            <tr>
                              {detail.headers.map((header, hIdx) => (
                                <th key={hIdx}>{header}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {detail.rows.map((row, rIdx) => (
                              <tr key={rIdx}>
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
