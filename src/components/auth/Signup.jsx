import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Import the necessary authentication functions
import { auth } from '../../firebase';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const onSignUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Save the user's nickname (and other profile data) to a database
        // You can also use local storage or global state for this
        const userProfileData = {
          nickname,
          // Add other profile data here if needed
        };

        // Log the user's nickname
        console.log('User signed up with nickname:', nickname);

        // Perform actions like saving the user's profile data to a database
        // or redirecting to a profile setup page
      })
      .catch((error) => {
        console.log('Sign-up error:', error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={onSignUp}>
        <h1>Create account</h1>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
