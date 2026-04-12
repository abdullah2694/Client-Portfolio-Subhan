import './Modal.scss';

const Modal = ({ imgLinks, title, subTitle, modalClose }) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
