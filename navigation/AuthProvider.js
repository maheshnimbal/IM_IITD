import React, { createContext, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext({});

export const AuthProvider = ({ children, props }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {

                        //await auth().signInWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                    }
                },
                register: async (name, email, password, mobileNumber) => {
                    try {

                        await axios.post("http://localhost:8000/user/register", {
                            name,
                            email,
                            password,
                            mobileNumber,
                        }).then((response) => {

                            props.history.push("/login");
                            console.log("successfully created user")
                        })
                            .catch((err) => {
                                // console.log(err);
                                if (
                                    err &&
                                    err.response &&
                                    err.response.data &&
                                    err.response.data.message
                                )
                                    //makeToast("error", err.response.data.message);
                                    console.log(err.response.data.message);
                            });
                        //await auth().createUserWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                    }
                },
                logout: async () => {
                    try {
                        //await auth().signOut();
                    } catch (e) {
                        console.error(e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};