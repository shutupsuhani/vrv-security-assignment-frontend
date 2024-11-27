import { useState, useEffect } from 'react';
import usersData from './user.json'; // Ensure this path is correct for your project structure
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    department:string,
    address?: string;
    phone?: string;
};

const UsersList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [showMore, setShowMore] = useState<{ [key: number]: boolean }>({});

    useEffect(() => {
     
        setUsers(usersData);
    }, []);

    const handleShowMore = (id: number) => {
        setShowMore(prevState => ({
            ...prevState,
            [id]: !prevState[id], 
        }));
    };

    const initialDisplayCount = 5; 

    return (
        <div className="p-2 mt-6 flex flex-col overflow-x-hidden justify-center items-center bg-white shadow-sm rounded-lg">
            
        
            {/* Table to display users */}
            <Table className="rounded-md max-w-full table-auto border-collapse border border-gray-300">
                <TableHeader>
                    <TableRow className="bg-gray-100">
                        <TableCell className="p-3 text-left border-b">ID</TableCell>
                        <TableCell className="p-3 text-left border-b">Name</TableCell>
                        <TableCell className="p-3 text-left border-b">Email</TableCell>
                        <TableCell className="p-3 text-left border-b">Department</TableCell>
                        <TableCell className="p-3 text-left border-b">Role</TableCell>
                        <TableCell className="p-3 text-left border-b">Actions</TableCell>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* Map through the users and display each one in a table row */}
                    {users.slice(0, initialDisplayCount).map((user) => (
                        <TableRow key={user.id} className="hover:bg-gray-50">
                            <TableCell className="p-3 border-b">{user.id}</TableCell>
                            <TableCell className="p-3 border-b">{user.name}</TableCell>
                            <TableCell className="p-3 border-b">{user.email}</TableCell>
                            <TableCell className='p-3 border-b'>{user.department}</TableCell>
                            <TableCell className="p-3 border-b">{user.role}</TableCell>
                            <TableCell className="p-3 border-b">
                                <Button 
                                    className="text-white bg-green-900" 
                                    onClick={() => handleShowMore(user.id)}
                                >
                                    {showMore[user.id] ? 'Show Less' : 'More'}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Show More users */}
            {users.length > initialDisplayCount && (
                <div className="mt-4">
                    <button 
                        onClick={() => setUsers(usersData)} 
                        className="bg-green-900 flex items-center text-white py-2 px-4 rounded-lg hover:bg-green-950"
                    >
                        Show More Users

                        <ArrowRight/>
                    </button>
                </div>
            )}

            {/* Show additional details of users who clicked "More" */}
            <div className="mt-4">
                {users.map((user) => (
                    showMore[user.id] && (
                        <div key={user.id} className="border p-4 mb-2 bg-gray-50 rounded-lg">
                            <h3 className="font-bold text-lg">{user.name} - Details</h3>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Role:</strong> {user.role}</p>
                            {user.address && <p><strong>Address:</strong> {user.address}</p>}
                            {user.phone && <p><strong>Phone:</strong> {user.phone}</p>}
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default UsersList;
