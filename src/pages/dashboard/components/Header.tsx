import  { useState, useEffect } from 'react';
import { Bell, Search, User2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  department: string;
}

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const lowerCaseQuery = searchQuery.trim().toLowerCase();
    const results = users.filter(user => {
      return (
        (user.username && user.username.toLowerCase().includes(lowerCaseQuery)) ||
        (user.email && user.email.toLowerCase().includes(lowerCaseQuery)) ||
        (user.role && user.role.toLowerCase().includes(lowerCaseQuery)) ||
        (user.department && user.department.toLowerCase().includes(lowerCaseQuery))
      );
    });

    setFilteredUsers(results);
  }, [searchQuery, users]);

  useEffect(() => {
    fetch('/user.json') // Make sure users.json is available
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data); // Initialize with all users initially
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className='p-5 bg-white z-50 shadow-sm border-b-2 flex justify-between items-center'>
      <div className='flex flex-col gap-2 items-center p-2 border rounded-md max-w-lg shadow-sm relative'>
        <div className='flex gap-2 items-center w-full'>
          <Search />
          <input
            type='text'
            placeholder='Search by username, role, email, or department'
            className='outline-none w-full'
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        {/* Suggestions List: Positioned below the navbar */}
        {searchQuery && (
          <div className='w-full mt-2 max-h-60 overflow-y-auto border rounded-md bg-white absolute top-full left-0 right-0 shadow-lg z-50'>
            {filteredUsers.length === 0 ? (
              <p className='p-2 text-gray-500'>No users found.</p>
            ) : (
              <ul>
                {filteredUsers.map((user) => (
                  <li key={user.id} className='p-2 hover:bg-gray-100 cursor-pointer'>
                    <span>{user.username}</span> - <span>{user.role}</span> - <span>{user.email}</span> - <span>{user.department}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <div className='flex justify-between items-center'>
        <Bell className='mr-4 cursor-pointer' />
       <Link to='/user/profile'> <div className='bg-black p-2 cursor-pointer rounded-full text-white'>
          <User2Icon />
        </div></Link>
      </div>
    </div>
  );
};

export default Header; 