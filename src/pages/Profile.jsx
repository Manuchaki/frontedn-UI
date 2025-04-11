import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Profile() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
  });
  const [subscriptionPlan, setSubscriptionPlan] = useState(user?.subscriptionPlan || 'Free');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleSubscriptionChange = (e) => {
    setSubscriptionPlan(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate profile update logic
    alert(`Profile updated successfully! Subscription Plan: ${subscriptionPlan}`);
  };

  return (
    <div className="profile-page">
      <h2 className="text-lg font-bold mb-4">Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Username:
          <input
            type="text"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="block w-full p-2 border rounded"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="block w-full p-2 border rounded"
          />
        </label>
        <label className="block mb-2">
          Subscription Plan:
          <select
            value={subscriptionPlan}
            onChange={handleSubscriptionChange}
            className="block w-full p-2 border rounded"
          >
            <option value="Free">Free</option>
            <option value="Premium">Premium</option>
            <option value="Enterprise">Enterprise</option>
          </select>
        </label>
        <label className="block mb-2">
          Profile Picture:
          <input type="file" onChange={handleProfilePictureChange} className="block w-full p-2" />
        </label>
        <button type="submit" className="btn btn-primary mt-4">
          Update Profile
        </button>
      </form>
      <p className="text-sm mt-4">
        Remaining Simplifications: {user?.remainingSimplifications || 'Unlimited'}
      </p>
    </div>
  );
}

export default Profile;
