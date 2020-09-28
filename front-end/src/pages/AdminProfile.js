import React, {useEffect, useState} from 'react';

function AdminProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storageUser = localStorage.getItem('user');
    if(!storageUser)  window.location.href = '/login';
    const { name, email } = JSON.parse(storageUser) || {};
    setName(name);
    setEmail(email);

  }, []);

  return (
    <div>
      <h1>Perfil</h1>
      <h5 data-testid="profile-name">Nome: { name }</h5>
      <h5 data-testid="profile-email">Email: { email }</h5>
    </div>
  );
}

export default AdminProfile;
