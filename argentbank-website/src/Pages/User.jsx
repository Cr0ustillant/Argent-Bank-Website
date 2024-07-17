import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignIn } from "../redux/reducers/reducer";
import { userNameUpdate } from "../redux/reducers/reducer";
import UserAccount from "../components/userAccount/UserAccount";
import accountData from "../data/accountData.json";
import "../style/user.css";

function User() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.USER.userData); 
  const [modal, setModal] = useState(false);

  const [newUserName, setNewUserName] = useState(userData.userName);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("token");
    updateUserName(token);
  };

  // Récuperation des données de l'utilisateur
  useEffect(() => {
    const getUserData = async (token) => {
      try {
        await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((userStatus) => {
            dispatch(userSignIn(userStatus.body));
          });
      } catch (error) {
        console.log(error);
      }
    };

    if (!sessionStorage.getItem("token")) {
      navigate("/error");
    } else {
      sessionStorage.getItem("token");
      getUserData(sessionStorage.getItem("token"));
    }
  }, [navigate, dispatch]);

  // Changement du pseudo 

  const updateUserName = async (token) => {
    try {
      await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName: newUserName }),
      })
        .then((res) => {
          if (res.ok) {
            dispatch(userNameUpdate(newUserName));
            setModal(false)
          }
          else {
            setNewUserName(false);
          }
        });
    } catch (error) {
      console.log('form',error);
    }
  };

  return (
      <main className="user-main">
        <section className="user-title">
          {!modal && (<h1>Welcome back
              <br />  
              {userData.firstName} {userData.lastName} !
          </h1>)}
          <div className="modal">
            {modal && (
          <form onSubmit={handleUpdate}>
            <h2>Edit user info</h2>
            <div className="input-container">
              <div className="input-wrapper">
                <label htmlFor="userName">User name: </label>
                <input type="text" id="userName" placeholder={userData.userName} 
                onChange={(e) => setNewUserName(e.target.value)}
              />
              </div>
              <div className="input-wrapper">
                <label htmlFor="firstName">First name: </label>
                <input type="text" id="firstName" placeholder={userData.firstName} readOnly/>
              </div>
              <div className="input-wrapper">
                <label htmlFor="lastName">Last name: </label>
                <input type="text" id="lastName" placeholder={userData.lastName} readOnly/>
              </div>
            </div>
            <div className="button-container">
              <button type="submit" className="edit-button">Save
              </button>
              <button type="button" onClick={(e) => setModal(false)} className="edit-button">Cancel
              </button>
            </div>
          </form>
            )}
            {!modal && (<button onClick={(e) => setModal(true)} className="form-button">Edit Name</button>)}
          </div>
        </section>
        {accountData.map((element) => (
          <UserAccount
            key={element.id}
            title={element.title}
            amount={element.amount}
            description={element.description}
          />
        ))}
      </main>
  );
};

export default User;
