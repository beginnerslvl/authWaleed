import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore'; // Import Firestore functions
import { getFirestore } from 'firebase/firestore';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Retrieve the user's nickname from Firestore
      const db = getFirestore(auth.app);
      const userRef = doc(db, 'users', user.uid);

      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const nickname = userData.nickname;

        console.log('User signed in with nickname:', nickname);

        // Perform other actions after successful sign-in
      } else {
        console.log('User profile not found');
      }
    } catch (error) {
      console.log('Sign-in error:', error);
    }
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
