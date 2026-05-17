import  AsyncStorage  from "@react-native-async-storage/async-storage"

export const saveUser = async (user)=> {
    try{
        await AsyncStorage.setItem('user',JSON.stringify(user))
    } catch (e) {
        console.log('Save user error', e);
        
    }
} 

export const getUser = async () => {
    try {
        const data = await AsyncStorage.getItem('user') 
        return data ? JSON.parse(data) : null
    } catch (e) {
        console.log('Get user error =', e);
        
    }
}

export const setLogin = async () => {
    try{
         await AsyncStorage.setItem('isLoggedIn', 'true')
    }
    catch(e) {
        console.log(e);
        
    }
}

export const getLogin = async () => {
    try{
        const val = await AsyncStorage.getItem('isLoggedIn')
        return val === 'true'
    }
    catch(e) {
        console.log(e);
        return false;
        
    }
}

export const logoutUser = async () => {
    try {
        await AsyncStorage.removeItem('isLoggedIn')
    }
    catch(e) {
        console.log(e);
        
    }
}