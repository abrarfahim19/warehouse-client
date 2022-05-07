import React from "react";
import useProducts from "../../hooks/useProducts";
import MyTable from "../MyTable/MyTable";

const Manage = () => {
    const [products, setProducts] = useProducts();
    const handleEdit = (id) => {
        console.log("edit00", id);
    };
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
                const remaining = products.filter(product => product._id !== id)
                setProducts(remaining)
            });
    };
    return (
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
    );
};

export default Manage;
