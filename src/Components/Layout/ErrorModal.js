import { Modal, Button } from 'react-bootstrap';

// Component for displaying an error modal
const ErrorModal = ({ modalShow, setModalShow, content }) => {
  
  // Handler function to close the modal
  const handleClose = () => setModalShow(false);

  return (
    <div>
      {/* Bootstrap Modal component */}
      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header className='bg-danger'>
          {/* Modal Title (commented out as it's not used) */}
          {/* <Modal.Title></Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          {/* Display error content */}
          <p className='mt-2'>{content}</p>
        </Modal.Body>
        <Modal.Footer>
          {/* Close button */}
          <Button className='btn btn-dark' variant='white' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ErrorModal;