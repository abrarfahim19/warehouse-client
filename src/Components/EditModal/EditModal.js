import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useRef, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

function EditModal() {
    const nameRef = useRef("");
    const authorRef = useRef("");
    const priceRef = useRef("");
    const supplyRef = useRef("");
    const imageRef = useRef("");
    const supplierRef = useRef("");

    const [show, setShow] = useState(false);

    const handleClose = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const author = authorRef.current.value;
        const supply = supplyRef.current.value;
        const supplier = supplierRef.current.value;
        const price = priceRef.current.value;
        const image = imageRef.current.value;
        await console.log(name, author, price, supply, supplier, image);
        setShow(false);
    };

    const handleShow = () => setShow(true);

    return (
        <>
            <IconButton
                onClick={handleShow}
                color="primary"
                aria-label="delete"
            >
                <Edit />
            </IconButton>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >
                    <Modal.Title>Edit Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Book Name"
                                className="mb-3"
                            >
                                <Form.Control
                                    required
                                    ref={nameRef}
                                    type="text"
                                    placeholder="Book Title"
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Author"
                                className="mb-3"
                            >
                                <Form.Control
                                    required
                                    ref={authorRef}
                                    type="email"
                                    placeholder="author"
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Supplier"
                                className="mb-3"
                            >
                                <Form.Control
                                    required
                                    ref={supplierRef}
                                    type="text"
                                    placeholder="text"
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="supply"
                                className="mb-3"
                            >
                                <Form.Control
                                    required
                                    ref={supplyRef}
                                    type="number"
                                    placeholder="Supply"
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Price"
                                className="mb-3"
                            >
                                <Form.Control
                                    required
                                    ref={priceRef}
                                    type="number"
                                    placeholder="Price"
                                />
                            </FloatingLabel>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModal;
