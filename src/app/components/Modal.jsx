function Modal({ project, onClose }) {
    // Implement your modal component here, displaying project details
    // and providing a way to close the modal (e.g., a close button)
  
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {/* Other project details */}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
  