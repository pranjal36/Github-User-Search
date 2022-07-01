import React, { createContext } from "react";

const Context = createContext();

function UserDataContextProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [userData, setUserData] = React.useState(undefined);
  const [error, setError] = React.useState(null);
  // const {q} = useLocation()
  // const [searchParams, setSearchParams] = useSearchParams();

  async function fetchUserData(user) {
    // console.log("FETCHING USER " + user);
    setLoading(true);
    setError(null);
    try {
      let response = await fetch(`https://api.github.com/users/${user}`);
      let data = await response.json();
      // console.log(data);
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
      // console.log(e);
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  function clearError() {
    setError(null);
  }

  React.useEffect(() => {
    const location = window.location.href;
    const query = location.split('?')[1];
    const params = new URLSearchParams(query);
    const q = params.get("q");
    //  console.log(q);
    if(q!=null){
    fetchUserData(q);
    }else{
      fetchUserData("Octocat");
    }
  }, []);

  return (
    <Context.Provider value={{ userData, loading, error, fetchUserData, clearError }}>
      {children}
    </Context.Provider>
  );
}

export { UserDataContextProvider, Context as userDataContext };
