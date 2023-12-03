import React, { useState, useEffect } from 'react';

const messageData = [
  { id: 1, name: 'John Doe', message: 'I loved the website! Amazing work guys!' },
  { id: 2, name: 'Jane Doe', message: 'How can I earn on this website?' },
  { id: 3, name: 'Rishabh Jha', message: 'I am a user but I wish to be a freelancer. What are the steps?' },
  
];

const Messages = () => {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    setMessage(messageData);
  }, []);

  const handleDeleteMessage = (messageId) => {
    const updatedMessages = messages.filter((message) => message.id !== messageId);
    setMessage(updatedMessages);
  };

  return (

    <div className="message-table-container mt-10 m-48 max-h-[80vh] overflow-y-scroll">
      <h2 className=' text-2xl m-3'>Total messages: {messages.length}</h2>
      <table className="message-table w-[100%]">
        <thead>
          <tr>
            <th className=' border-black border-2 p-[20px] text-xl align-middle '>ID</th>
            <th className=' border-black border-2 p-[20px] text-xl align-middle '>Name</th>
            <th className=' border-black border-2 p-[20px] text-xl align-middle '>Message</th>
            <th className=' border-black border-2 p-[20px] text-xl align-middle '>Action</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{message.id}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{message.name}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>{message.message}</td>
              <td className='border-black border-2 p-[20px] text-lg align-middle'>
                <button className=' border-red-600 border-2 bg-red-600 text-white p-2 rounded-md' onClick={() => handleDeleteMessage(message.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Messages;