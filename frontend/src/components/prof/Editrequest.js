import React, { useState } from 'react';
import { Home } from 'lucide-react';
import Hello from './images/hello.jpg';

const RequestPopup = () => {
  const styles = {
    popup: {
      backgroundColor: '#B4D3B2',
    },
    text: {
      color: '#3A3960',
    },
    input: {
      border: '2px solid #3A3960',
      backgroundColor: 'white',
    },
    button: {
      backgroundColor: '#3A3960',
      border: '2px solid #3A3960',
      color: 'white',
    }
  };

  const [formData, setFormData] = useState({
    charges: '',
    time: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Request sent successfully!');
    setFormData({
      charges: '',
      time: '',
      date: '',
      message: ''
    });
  };

  return (
    <div className='home' style={{ 
            backgroundImage: `url(${Hello})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
           
          }}>
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="rounded-lg p-6 w-96 shadow-xl" style={styles.popup}>
        <div className="flex justify-between items-center mb-6">
          <Home style={styles.text} className="w-6 h-6" />
          <h2 className="text-xl font-semibold" style={styles.text}>EDIT REQUEST</h2>
          <div className="w-6"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" style={styles.text}>
              Expected Charges:
            </label>
            <input
              type="number"
              name="charges"
              value={formData.charges}
              onChange={handleChange}
              className="w-full p-2 rounded-md focus:outline-none"
              style={styles.input}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" style={styles.text}>
              Date:
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 rounded-md focus:outline-none"
              style={styles.input}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" style={styles.text}>
              Time:
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-2 rounded-md focus:outline-none"
              style={styles.input}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" style={styles.text}>
              Message:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded-md focus:outline-none h-24"
              style={styles.input}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
            style={styles.button}
          >
            SEND REQUEST
          </button>
        </form>
       
      </div>
    </div>
    </div>
  );
};

export default RequestPopup;