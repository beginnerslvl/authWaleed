import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Retrieve the user's nickname from the database (or elsewhere)
        // You can also use local storage or global state for this
        // Example: const nickname = getUserNicknameFromDatabase(user.uid);

        // Log the user's nickname
        console.log('User signed in with nickname:', nickname);

        // Perform other actions after successful sign-in
      })
      .catch((error) => {
        console.log('Sign-in error:', error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={onSignin}>
        <h1>Login</h1>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Signin;
