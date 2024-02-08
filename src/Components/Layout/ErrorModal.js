import { Modal, Button } from 'react-bootstrap';

const ErrorModal = ({modalShow,setModalShow,content}) => {
  

  const handleClose = () => setModalShow(false);

  return (
    <div>
      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header  className='bg-danger'>
          {/* <Modal.Title></Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <p className='mt-2'>{content}</p>
        </Modal.Body>
        <Modal.Footer >
          <Button className='btn btn-dark' variant='white' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ErrorModal;
