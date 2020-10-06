import React, { useEffect, useState } from 'react';
import AdminMenuSideBar from '../components/AdminMenuSideBar';

function AdminProfile() {
  const [loggedName, setLoggedName] = useState('');
  const [loggedEmail, setLoggedEmail] = useState('');

  useEffect(() => {
    const storageUser = localStorage.getItem('user');
    if (!storageUser) window.location.href = '/login';
    const { name, email } = JSON.parse(storageUser) || {};
    setLoggedName(name);
    setLoggedEmail(email);
  }, []);

  return (
    <div className="d-flex">
      <AdminMenuSideBar />
      <div className="main-page flex-lg-fill">
        <form>
          <fieldset>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input
                data-testid="profile-name"
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder={loggedName}
                readOnly
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                data-testid="profile-email"
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder={loggedEmail}
                readOnly
              />
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default AdminProfile;
