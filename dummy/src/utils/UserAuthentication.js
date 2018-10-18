import Expo from 'expo';

const ANDROID_ID = '1056598986935-1qnpm7bfrikvri9ndtg51c0m90nt2ajp.apps.googleusercontent.com'; // <--- ADD CLIENT ID HERE FOR ANDROID!
const IOS_ID = '1056598986935-6o3l5nn40j8h1v9fp917g46uj1tn4jlr.apps.googleusercontent.com'; // <--- ADD CLIENT ID HERE FOR IOS!
const SUCCESS = 'success'; 

export const signInWithGoogleAsync = async () => {
  try {
    const result = await Expo.Google.logInAsync({
      androidClientId: ANDROID_ID,
      iosClientId: IOS_ID,
      scopes: ['profile', 'email'],
    });

    if (result.type === SUCCESS) {
      //return result.accessToken;
      console.log(result);
    } else {
      return {cancelled: true};
    }
  } catch(e) {
    return {error: true};
  }
}

export const authenticate = (user) => {

    if(user !== null){
        return true;
    } 
}
