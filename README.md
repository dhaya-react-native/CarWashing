# Template Firebase auth flow

Template starter with React Navigation and Firebase auth using React Context

# Preview

![../media/authflow.png](https://raw.githubusercontent.com/codingki/react-native-expo-template/master/media/authflow.png)

# Installation

1. Install [node.js](https://nodejs.org/en/)
2. Install Expo

   ```jsx
   npm install --global expo-cli
   ```

3. Download this repo
4. Install deps on your template folder

   ```jsx
   npm install
   ```

5. Start the environtment

   ```jsx
   expo start
   ```

# Auth Flow

### Firebase Setup

- Set up a new firebase project
- Go to Authentication and under Sign-in Method enable Email/Password
- Fill this firebase config to your config inside `./src/navigation/AppNavigator.js`

```jsx
// Better put your these secret keys in .env file
const firebaseConfig = {
    apiKey: "AIzaSyArJPURyc8No2A29cFNSkBnoSMei4j6Zss",
    authDomain: "car-washing-16054.firebaseapp.com",
    databaseURL: "https://car-washing-16054-default-rtdb.firebaseio.com",
    projectId: "car-washing-16054",
    storageBucket: "car-washing-16054.appspot.com",
    messagingSenderId: "1049549990456",
    appId: "1:1049549990456:web:e5051974112f05c80594cd",
    measurementId: "G-HH7L3EXM1Z",
};
```

### Prebuilt UI Screens

- Login screen `./src/screens/auth/login.tsx`
- Register screen `./src/screens/auth/register.tsx`
- Forget password screen `./src/screens/auth/forget.tsx`

### React Navigation Auth Flow

The checking logged users process is inside `./src/provider/AuthProvider` I use React Context, you can add more functions like get the data of the user and store it to the context (better static data, ex: uid)

Inside the navigator `./src/navigation/AppNavigator.js`
There's 2 stack navigator :

- `<Auth/>` → for not logged in users stack
- `<Main/>` → for logged in users stack
- `<Loading/>` → when checking if the user is logged in or not loading screen

````jsx
export default () => {
	const auth = useContext(AuthContext);
	const user = auth.user;
	return (
		<NavigationContainer>
			{user == null && <Loading />}
			{user == false && <Auth />}
			{user == true && <Main />}
		</NavigationContainer>
	);
};

# File Managements

These are the folders and the functionality

```jsx
/src/assets -> for media such as images, etc
/src/components -> for components
/src/navigation -> for React Navigation
/src/provider -> for React Context
/src/screens -> for Screens
````
