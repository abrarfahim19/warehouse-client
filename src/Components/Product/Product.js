import { ReadMore } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    const { name, price, image, author,stock, _id } = product;
    const navigate = useNavigate();
    const navigateToProductDetail = (id) => {
        navigate(`/inventory/${id}`);
        console.log(id);
    };
    return (
            <Card className="g-1 d-flex col-sm-12 col-md-6 mx-auto col-lg-4 vh-80" style={{ width: "10rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>{author}</h6>
                    <Card.Text>
                        Stock: {stock}pc
                    </Card.Text>
                    <Button
                        onClick={() => navigateToProductDetail(_id)}
                        fullWidth
                        variant="contained"
                        color="primary"
                        endIcon={<ReadMore></ReadMore>}
                        size="small"
                    >
                        Update Item
                    </Button>
                </Card.Body>
            </Card>
    );
};

export default Product;
