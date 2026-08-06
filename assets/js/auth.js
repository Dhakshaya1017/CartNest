// CartNest Authentication



// Register User

async function registerUser(userData){


    try{


        const response = await fetch(

            "http://localhost:5000/api/users/register",

            {

                method:"POST",

                headers:{

                    "Content-Type":"application/json"

                },

                body:JSON.stringify(userData)

            }

        );


        return await response.json();



    }

    catch(error){


        console.log(error);


        return {

            success:false,

            message:"Server Error"

        };


    }


}







// Login User

async function loginUser(email,password){


    try{


        const response = await fetch(

            "http://localhost:5000/api/users/login",

            {


                method:"POST",


                headers:{


                    "Content-Type":"application/json"


                },


                body:JSON.stringify({


                    email,

                    password


                })


            }


        );



        const data = await response.json();





        if(data.success){



            localStorage.setItem(

                "user",

                JSON.stringify(data.user)

            );


        }




        return data;




    }


    catch(error){



        console.log(error);



        return {


            success:false,

            message:"Unable to connect server"


        };



    }


}








// Get Current User

function currentUser(){



    const user = localStorage.getItem("user");



    if(user){


        return JSON.parse(user);


    }


    return null;


}








// Check Login Status

function checkLogin(){


    return currentUser() !== null;


}








// Logout User

function logoutUser(){



    localStorage.removeItem("user");



    window.location.href="../user/login.html";



}