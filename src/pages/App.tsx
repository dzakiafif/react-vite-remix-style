import '../App.css'
import { useLoaderData } from 'react-router-dom'
import UserList from '@components/UserList';
import { UsersResponse } from '@types';

function App() {
  const data = useLoaderData() as UsersResponse;
  return (
    <UserList users={data.users} />
  )
}

export default App
