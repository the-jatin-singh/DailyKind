import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(
        {
            userId:"78",
            name:"jatin singh",
            firstname:"jatin",
            created_at:"09122014",
        }
    );
    const [data, setData] = useState(
        {
            id: "1",
            title: "Brighten Your Mom's Day",
            description: "Surprise your mom with a bouquet of flowers and express your love and gratitude.",
            category: "Family",
            created_by: "vivek",
            created_at: "Timestamp"
        },
    )

    return (
        <UserContext.Provider value={{user, setUser, data, setData}}>
        {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;