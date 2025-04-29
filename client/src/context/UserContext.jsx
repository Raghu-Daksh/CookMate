const {createContext, useContext, useState, useEffect} = require('react');

export const UsersContext = createContext();

const UserProvider = ({children}) => {
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUserDetails(JSON.parse(user));
        }
    }, []);

    return (
        <UsersContext.Provider value={{ userDetails, setUserDetails }}>
            {children}
        </UsersContext.Provider>
    );
};

export default UserProvider;