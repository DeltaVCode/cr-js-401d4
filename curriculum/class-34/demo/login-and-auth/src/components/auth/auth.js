import useAuth from './hook';

function Auth(props) {
  let { user } = useAuth();
  let { capability } = props;

  if (!user)
    return null;

  if (capability &&
    !(user.capabilities && user.capabilities.includes(capability)))
    return null;

  return props.children;
}

export default Auth;
