import React, { createContext } from "react";

const Context = createContext();

function UserDataContextProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [userData, setUserData] = React.useState(undefined);
  const [error, setError] = React.useState(null);

  async function fetchUserData(user) {
    console.log("FETCHING USER " + user);
    setLoading(true);
    setError(null);
    try {
      let response = await fetch(`https://api.github.com/users/${user}`);
      let data = await response.json();
      console.log(data);
      if (data) {
        if (data.message) {
          throw Error("User not found!");
        } else {
          setUserData(data);
        }
      } else {
        throw Error("Failed to fetch user data.");
      }
    } catch (e) {
      console.log(e);
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  function clearError() {
    setError(null);
  }

  // On load, fetch user data for 'octocat' as default
  React.useEffect(() => {
    fetchUserData("octocat");
  }, []);

  return (
    <Context.Provider value={{ userData, loading, error, fetchUserData, clearError }}>
      {children}
    </Context.Provider>
  );
}

export { UserDataContextProvider, Context as userDataContext };
