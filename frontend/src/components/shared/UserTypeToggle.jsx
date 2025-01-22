import { useState } from 'react';

function UserTypeToggle({role,setRole}) {
  const [check, setCheck] = useState(true); // Default to 'Resident'

        
  // Step 2: Handle the change event
  const handleChange = (e) => {
    setCheck(e.target.checked); //updateing the check to actual check
    setRole(e.target.checked ? 'resi':'prof'); //set roles accordingly
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      {/* Resident / Professional Toggle */}
      <div className="form-control">
        <input
          type="checkbox"
          id="userTypeToggle"
          className="hidden peer"
          checked={check} 
          onChange={handleChange} 
        />
        <label
          htmlFor="userTypeToggle"
          className="custom-button mb-9 !px-6 !py-2 !bg-[#E8ECD7] !text-[#3A3960] !border-[#3A3960] !rounded-lg cursor-pointer peer-checked:!bg-[#85A947] peer-checked:!text-white peer-checked:!border-[#85A947]"
        >
          {check ? 'Resident' : 'Professional'}
        </label>
      </div>

      <p>Selected user type: {check ? 'Resident' : 'Professional'}</p>
    </div>
  );
}

export default UserTypeToggle;

