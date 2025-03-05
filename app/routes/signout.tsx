import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import type { Route } from './+types/signout';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Company Name' }];
}

export default function Signout() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, []);

  return <></>;
}
