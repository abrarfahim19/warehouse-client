import React, { useEffect } from "react";
import useProducts from "../../hooks/useProducts";
import CustomModal from "../CustomModal/CustomModal";
import MyTable from "../MyTable/MyTable";

const Manage = () => {
    //load all products with custom hook
    const [products, setProducts] = useProducts();

    // handle Edit
    const handleEdit = (id, result) => {
        let url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(result),
        })
            .then((res) => res.json())
            .then((d) => {
                console.log(d);
                let objIndex = products.findIndex(
                    (obj) => obj._id === result._id
                );
                products[objIndex] = result;

                setProducts([...products]);
            });
    };

    //handle Delete
    const handleDelete = (id) => {
        console.log("Delete 00", id);
        let url = `http://localhost:5000/inventory/${id}`;
        fetch(url, {
            method: "Delete",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const remaining = products.filter(
                    (product) => product._id !== id
                );
                setProducts(remaining);
            });
    };

    return (
        <>
            {/* add the new product with modal */}
            <CustomModal></CustomModal>
            <div>
                {products.map((product) => (
                    <MyTable
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                        key={product._id}
                        product={product}
                    ></MyTable>
                ))}
            </div>
        </>
    );
};

export default Manage;
