import './index.module.css';
import { useRouter } from 'next/router';


/* eslint-disable-next-line */
export interface ProfileProps {

}

export function Profile(props: ProfileProps) {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div>
      <div className="text-red-500">Welcome to {name} Profile!</div>
    </div>
  );
}

export default Profile;
