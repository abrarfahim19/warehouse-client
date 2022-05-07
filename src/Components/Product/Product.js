import { ReadMore } from "@mui/icons-material";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({product}) => {
    const {name,price,image,author,supply,_id} = product;
    const navigate = useNavigate();
    const navigateToProductDetail = (id) => {
        navigate(`/inventory/${id}`);
        console.log(id);
    }
    return (
        <Card className='g-1 col-sm-12 col-md-6 mx-auto col-lg-4 vh-80' sx={{ maxWidth: 200 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                        Price: {price} <br />Author: {author} <br />Stock: {supply} Pcs
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={()=>navigateToProductDetail(_id)} fullWidth variant="contained" color="primary" endIcon={<ReadMore></ReadMore>} size="small">
                    Update Item
                </Button>
            </CardActions>
        </Card>
    );
};

export default Product;
