import React from 'react';
import useMyProducts from '../../hooks/useMyProducts';
import CustomModal from '../CustomModal/CustomModal';
import MyTable from "../MyTable/MyTable";

const MyItem = () => {
    const [myProducts,setMyProducts] = useMyProducts();
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
                let objIndex = myProducts.findIndex(
                    (obj) => obj._id === result._id
                );
                myProducts[objIndex] = result;

                setMyProducts([...myProducts]);
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
                const remaining = myProducts.filter(
                    (product) => product._id !== id
                );
                setMyProducts(remaining);
            });
    };

    return (
        <>
            {/* add the new product with modal */}
            <CustomModal></CustomModal>
            <div>
                {myProducts.map((product) => (
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

export default MyItem;