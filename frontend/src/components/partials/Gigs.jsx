import React, { useState, useEffect } from 'react';

const gigData = [
  { id: 1, gigName: 'John Doe', price: '$40', desc:'I loved the website! Amazing work guys!', subCat: 'Animation', freelancer: 'Rishabh'},
  { id: 2, gigName: 'John Doe', price: '$40', desc:'I loved the website! Amazing work guys!', subCat: 'Animation', freelancer: 'Rishabh'},  
  { id: 3, gigName: 'John Doe', price: '$40', desc:'I loved the website! Amazing work guys!', subCat: 'Animation', freelancer: 'Rishabh'},
  
];

const Gigs = () => {
  const [gigs, setGig] = useState([]);

  useEffect(() => {
    setGig(gigData);
  }, []);

  const handleDeleteGig = (gigId) => {
    const updatedGigs = gigs.filter((gig) => gig.id !== gigId);
    setGig(updatedGigs);
  };

  return (

    <div className="gig-table-container mt-10 m-48 max-h-[80vh] overflow-y-scroll">
      <h2 className=' text-2xl m-3'>Total gigs: {gigs.length}</h2>
      <table className="gig-table w-[100%]">
        <thead>
          <tr>
            <th className=' border-black border-2 p-[20px] text-xl align-middle '>ID</th>
            <th className=' border-black border-2 p-[20px] text-xl align-middle '>Gig name</th>
            <th className=' border-black border-2 p-[20px] text-xl align-middle '>Price</th>
            <th className=' border-black border-2 p-[20px] text-xl align-middle '>Description</th>
            <th className=' border-black border-2 p-[20px] text-xl align-middle '>Sub Category</th>
            <th className=' border-black border-2 p-[20px] text-xl align-middle '>Freelancer</th>
            <th className=' border-black border-2 p-[20px] text-xl align-middle '>Action</th>



          </tr>
        </thead>
        <tbody>
          {gigs.map((gig) => (
            <tr key={gig.id}>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{gig.id}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{gig.gigName}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{gig.price}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{gig.desc}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{gig.subCat}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{gig.freelancer}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>
                <button className=' border-red-600 border-2 bg-red-600 text-white p-2 rounded-md' onClick={() => handleDeleteGig(gig.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Gigs;