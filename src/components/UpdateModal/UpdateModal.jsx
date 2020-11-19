/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const UpdateModal = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { show, handleClose, id, title, content, titleChange, contentChange, send } = props;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          修改文章
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>標題</p>
        <input type="text" value={title} onChange={titleChange} />
        <br />
        <br />
        <p>內容</p>
        <textarea type="text" value={content} onChange={contentChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          放棄
        </Button>
        <Button variant="primary" onClick={send}>
          修改
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateModal;
