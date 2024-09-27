// import React from 'react'
import service from '../appwrite/config.js'
import { useState, useEffect } from 'react';
import Card from '../compponents/Card.jsx'
import AddFood from '../compponents/AddFood.jsx';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function CardContainer({type}) {

    const AdminStatus = useSelector((state) => state.admin.AdminTrue);
  const [documents, setDocuments] = useState([]);

    useEffect(() => {
        service.getFoodList(type).then(result => {
            // Access the documents here
            setDocuments(result.documents);
            console.log(result.documents);
        }).catch(error => {
            // Handle any errors here
            console.error(error);

        });
    }, []);

    const documentItems = documents.map((document, index) => (
      <div key={index}>
          <Card ID={document.DocumentID}  Name={document.Name} img={document.ImageID} Desc={document.desc} price={document.Price}/>
          {console.log(document.DocumentID)}
      </div>
  ));
  const Addfood = AdminStatus ? <AddFood /> : null;
  return (
    <>
         <div className='bg-beverages bg-cover min-h-screen ' >
      <div className='text-3xl mx-4 p-2'>{type}</div>
      <div className='grid grid-cols-4 gap-4'> {documentItems}
      {Addfood}
      </div>
     
      </div>
    </>
  )
}

CardContainer.propTypes = {
    type: PropTypes.string.isRequired,
}
export default CardContainer