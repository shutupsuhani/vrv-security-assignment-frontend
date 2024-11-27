import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { User2Icon } from 'lucide-react';

// Define the shape of the user data
interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
}

const ProfileCard: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editFormData, setEditFormData] = useState<UserData>({
    id: 0,
    name: '',
    email: '',
    role: '',
    department: ''
  });

  useEffect(() => {
    // Load user data from localStorage (or default to initial data)
    const savedUserData = JSON.parse(localStorage.getItem('userData') || '[]') as UserData[];
    if (savedUserData.length > 0) {
      setUserData(savedUserData[0]); // Assuming we are editing the first user
    } else {
      const defaultUserData: UserData = {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        role: 'Admin',
        department: 'Cybersecurity'
      };
      setUserData(defaultUserData);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = () => {
    if (userData) {
      // Update user data in state
      const updatedUserData: UserData = { ...userData, ...editFormData };

      // Save updated data to localStorage
      const updatedUserDataList = [updatedUserData];
      localStorage.setItem('userData', JSON.stringify(updatedUserDataList));

      // Update state and close the edit dialog
      setUserData(updatedUserData);
      setIsEditing(false);
    }
  };

  const handleEditClick = () => {
    if (userData) {
      setEditFormData({
        ...userData
      });
    }
    setIsEditing(true);
  };

  return (
    <div className="bg-white rounded-lg max-w-md flex flex-col items-center p-8 shadow-lg">
      {/* Profile Icon */}
      <div className="p-4 bg-green-950 rounded-full text-white shadow-md">
        <User2Icon size={40} />
      </div>

      {/* User Details */}
      <div className="grid grid-cols-2 gap-y-4 mt-6 w-full px-4">
        <h1 className="font-medium text-gray-700">Name:</h1>
        <span className="text-gray-900 font-semibold">{userData?.name}</span>

        <h1 className="font-medium text-gray-700">Email:</h1>
        <span className="text-gray-900 font-semibold">{userData?.email}</span>

        <h1 className="font-medium text-gray-700">Department:</h1>
        <span className="text-gray-900 font-semibold">{userData?.department}</span>

        <h1 className="font-medium text-gray-700">Role:</h1>
        <span className="text-green-600 font-semibold">{userData?.role}</span>
      </div>

      {/* Action Button */}
      <div className="w-full mt-6 flex justify-center">
        <Button className="w-full max-w-xs py-2 px-4 bg-green-950 text-white hover:bg-green-900 transition-colors rounded-md" onClick={handleEditClick}>
          Edit Profile
        </Button>
      </div>

      {/* Edit Profile Dialog */}
      {isEditing && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2>Edit Profile</h2>
            <div className="mt-4">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={editFormData.name}
                onChange={handleInputChange}
                className="border p-2 w-full mt-2"
              />
            </div>
            <div className="mt-4">
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={editFormData.email}
                onChange={handleInputChange}
                className="border p-2 w-full mt-2"
              />
            </div>
            <div className="mt-4">
              <label>Role:</label>
              <input
                type="text"
                name="role"
                value={editFormData.role}
                onChange={handleInputChange}
                className="border p-2 w-full mt-2"
              />
            </div>
            <div className="mt-4">
              <label>Department:</label>
              <input
                type="text"
                name="department"
                value={editFormData.department}
                onChange={handleInputChange}
                className="border p-2 w-full mt-2"
              />
            </div>
            <div className="mt-6 flex justify-between">
              <Button onClick={() => setIsEditing(false)}>Cancel</Button>
              <Button onClick={handleSaveChanges}>Save</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
