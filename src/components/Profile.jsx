import React, { useState } from 'react';

const Profile = () => {
  const [image1, setImage1] = useState(null);

  return (
    <div className="flex justify-center items-center p-6">
      
      <div className="w-full max-w-lg p-6 space-y-6">

      
        <div className="flex flex-row sm:flex-col items-center sm:space-x-6">
          
          
          <div className="relative">
            <label htmlFor="image1" className="cursor-pointer">
              <div className="w-20  h-20 rounded-full overflow-hidden border-2 border-gray-300 flex justify-center items-center">
                <img
                  className="object-cover w-full h-full"
                  src={image1 ? URL.createObjectURL(image1) : "/default-avatar.png"}
              
                />
              </div>
            </label>
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
              accept="image/*"
            />
          </div>

          <div className= " ml-5 mb-3 text-center sm:text-left mt-4 sm:mt-0">
            <h1 className="text-2xl font-semibold text-gray-800">Marry Doe</h1>
            <p className="text-gray-600">marry@gmail.com</p>
          </div>
        </div>

        <div>
          <p className="text-gray-700 text-sm sm:text-base ">
            Deserunt iste veritatis laudantium, in ducimus voluptatem a, quasi inventore perferendis expedita?
          </p>
        </div>

        
      </div>
    </div>
  );
};

export default Profile;
