import {
    AddBusiness,
    LocalShipping,
    ManageAccounts,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useProductDetails from "../../hooks/useProductDetails";

const ProductDetails = () => {
    const { Id } = useParams();
    const [product, setProduct] = useProductDetails(Id);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    const navigate = useNavigate();
    return (
        <div>
            <div className=" top flex-row justify-content-around d-flex mt-5">
                <div className="text col-md-6">
                    <div className="flex-column align-items-center d-flex">
                        <h3>Sold: {product.supply}</h3>
                        <h3>Stock: {product.stock}</h3>
                    </div>
                </div>
                <div className="btn-group mx-auto col-md-6">
                    <div className="d-flex flex-column gap-3">
                        <Button
                            variant="contained"
                            color="success"
                            endIcon={<LocalShipping></LocalShipping>}
                            size="big"
                        >
                            Delivered
                        </Button>
                        <div className="d-flex flex-row align-items-center justify-content-center gap-2">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Resupply Item"
                                className="mb-3"
                            >
                                <Form.Control
                                    {...register("stock", { min: 1, max: 99 })}
                                    type="number"
                                    placeholder="Resupply Items"
                                />
                                {errors.stock && (
                                    <span
                                        className="d-block text-danger"
                                        style={{ fontSize: "12px" }}
                                    >
                                        min max value is not mantained(min=1,
                                        max=99)
                                    </span>
                                )}
                            </FloatingLabel>
                            <Button
                                onClick={handleSubmit(onSubmit)}
                                variant="contained"
                                color="primary"
                                endIcon={<AddBusiness></AddBusiness>}
                                size="big"
                            >
                                Restock
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-details mt-5">
                <div className="d-flex gap-3 flex-row">
                    <div className="image-container col-md-6">
                        <img
                            className="d-flex mx-auto"
                            height={300}
                            src={product.image}
                            alt=""
                        />
                    </div>
                    <div className="info-container col-md-6">
                        <div className="flex-column align-items-start d-flex">
                            <h4>
                                Id:{" "}
                                <span className="text-danger">
                                    {product._id}
                                </span>
                            </h4>
                            <h4>Name: {product.name}</h4>
                            <h4>Author: {product.author}</h4>
                            <h4>Price: {product.price}$</h4>
                            <h4>Supplier: {product.price}$</h4>
                            <h5 className="mt-2">
                                Description: <br /> Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. In saepe
                                perspiciatis natus eveniet, unde reprehenderit
                                ab veniam necessitatibus neque pariatur.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <Button
                onClick={() => navigate("/manage")}
                className="mx-auto mt-5 d-flex w-25"
                variant="outlined"
                color="error"
                endIcon={<ManageAccounts></ManageAccounts>}
                size="big"
            >
                Manage Items
            </Button>
        </div>
    );
};

export default ProductDetails;
