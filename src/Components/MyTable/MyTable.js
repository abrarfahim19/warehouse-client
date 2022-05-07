import { Delete, Edit } from '@mui/icons-material';
import {  IconButton } from '@mui/material';
import React from 'react';
import EditModal from '../EditModal/EditModal'

const MyTable = ({product,handleDelete,handleEdit}) => {
  const {name,price,image,author,supply,_id} = product;

  return (
    <div>
      <div className="card d-flex flex-row align-items-center">
        <img src={image} height={100} className="p-2 image-fluid " alt="..."/>
        <div className="card-body d-flex flex-row justify-content-between align-items-center">
          <div className="card-title col-sm-3 col-md-3">
            <h5 >{name}</h5>
          </div>
          <h6 className="card-title d-none d-sm-none d-md-block col-md-3">{author}</h6>
          <h6 className="card-title col-sm-3 col-md-3">{supply}</h6>
          <div className="buttons col-sm-3 col-md-3">
            <div className="d-flex justify-content-between">
            <EditModal ></EditModal>
            <IconButton onClick={()=> handleDelete(_id)} color='error' aria-label="delete">
            <Delete /></IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTable;