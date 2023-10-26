import { useNavigate, useParams } from 'react-router-dom';
import { USERS } from '../../constants/users';

const MostrarUsers = () => {
  // const params = useParams();
  const navigate = useNavigate();

  return (
    <>
      {USERS.map(user => {
        return(
          <div key={user.userId}>{user.name}</div>
        )
      })}
    </>
  )
}
export default MostrarUsers;