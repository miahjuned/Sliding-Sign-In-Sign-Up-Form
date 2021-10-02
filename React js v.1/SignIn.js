import React from 'react';
import { useForm } from "react-hook-form";
import { AiFillMail } from "react-icons/ai"
import { BsLockFill } from "react-icons/bs"
import { TiTick } from "react-icons/ti"
// import  '../../StyledComponent/Signup.css';
const UserSignUpFrom = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      async function handleSignup(userInfo) {
        // setLoading(true)
        // try {
        //   if (donatedBefore)
        //     userInfo.lastDonationDate = donationDate.lastDonationDate
        //   if(doctor)
        //     userInfo.role = "doctor"
    
        //   const { data } = await signUp(userInfo)
        //   if (!data.user) {
        //     useErrorToast(data.message)
        //     return setLoading(false)
        //   }
        //   localStorage.setItem("profile", JSON.stringify(data))
        //   return setCurrentUser(data.user)
        // } catch (err) {
        //   useErrorToast(err.message)
        //   return setLoading(false)
        // }
      }

    return (
        <form onSubmit={handleSubmit(handleSignup)} autoComplete="off" className="sign-in-form">

            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i class="fas fa-user"></i>
              <input type="email" placeholder="Your Email" Icon={AiFillMail}  register={register}  errors={errors}/>
            </div>

            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" Icon={BsLockFill}  register={register}  errors={errors}/>
            </div>

            <input type="submit" value="Login" className="btn solid"  Icon={TiTick}/> 

            <p class="social-text">Or Sign in with social platforms</p>

            <div className="social-media">
              <a href="http:" className="social-icon" Icon={BsLockFill}>
                {/* <i class="fab fa-facebook-f"></i> */}
              </a>
              <a href="http:" className="social-icon" Icon={BsLockFill}>
                {/* <i class="fab fa-twitter"></i> */}
              </a>
              <a href="http:" className="social-icon" Icon={BsLockFill}>
                <i class="fab fa-google"></i>
              </a>
              <a href="http:" className="social-icon" Icon={BsLockFill}>
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
        </form>
    );
};

export default UserSignUpFrom;