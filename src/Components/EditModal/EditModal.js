import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

function EditModal({item,handleEdit}) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        
        handleEdit(data._id,data)
        
        // let url =  `http://localhost:5000/inventory/${data._id}`
        // fetch(url,{
        //     method:'PUT',
        //     headers: {
        //         'content-type':'application/json'
        //       },
        //       body : JSON.stringify(data)
        // })
        // .then(res => res.json())
        // .then(d =>{
        //     item=data;
        //     console.log('final: ',d);
        // })
    }
    
    useEffect(()=>{
        reset(item)
    },[])
    
    const [show, setShow] = useState(false);

    const handleClose = async (event) => {
        handleSubmit(onSubmit)
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
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Body>
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
                                    defaultValue={item.name}
                                    {...register("name")}
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
                                    defaultValue={item.author}
                                    {...register("author")}
                                    type="text"
                                    placeholder="author"
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingInput"
                                label="Supplier"
                                className="mb-3"
                            >
                                <Form.Control
                                    defaultValue={item.supplier}
                                    {...register("supplier")}
                                    type="text"
                                    placeholder="text"
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Price"
                                className="mb-3"
                            >
                                <Form.Control
                                    defaultValue={item.price}
                                    {...register("price")}
                                    type="number"
                                    placeholder="Price"
                                />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Image Link"
                                className="mb-3"
                            >
                                <Form.Control
                                    defaultValue={item.image}
                                    {...register("image")}
                                    type="text"
                                    placeholder="Image Link"
                                />
                            </FloatingLabel>
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={()=>setShow(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default EditModal;
