import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore functions
import { getFirestore } from 'firebase/firestore';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const onSignUp = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save the user's nickname to Firestore
      const db = getFirestore(auth.app);
      const userRef = doc(db, 'users', user.uid);

      const userProfileData = {
        nickname,
        // Add other profile data here if needed
      };

      await setDoc(userRef, userProfileData);

      console.log('User signed up with nickname:', nickname);

      // Perform actions like redirecting to a profile setup page
    } catch (error) {
      console.log('Sign-up error:', error);
    }
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
