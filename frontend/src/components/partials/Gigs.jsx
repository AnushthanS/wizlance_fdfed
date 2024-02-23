import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gigs = () => {
  const [gigs, setGig] = useState([]);

  useEffect(() => {
    fetchGigs();
  }, []);

  const fetchGigs = async () => {
    try {
    const gigs = await axios.get('/api/admin-gigs');
    setGig(gigs.data.gig);
    } catch (error) {
      console.log("Error fetching gigs", error);
    }
  };

  const handleDeleteGig = (gigId) => {
    try {
      const updatedGigs = gigs.filter((gig) => gig.id !== gigId);
      setGig(updatedGigs);
      axios.post('/api/admin-delete-gig', { gigId });
    } catch (error) {
      console.log("Error deleting gig", error);
    }
  };

  return (

    <div className="w-auto h-auto px-4 overflow-y-scroll no-scrollbar">
      <h2 className='text-2xl m-3'>Total gigs: {gigs.length}</h2>
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
          {gigs.map((gig, index) => (
            <tr key={gig.id}>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{index+1}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{gig.name}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{gig.price}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{gig.description}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{gig.subCategoryId}</td>
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