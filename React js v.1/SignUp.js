import React from 'react';
import { useForm } from "react-hook-form";
import { AiFillMail } from "react-icons/ai"
import { BsLockFill } from "react-icons/bs"


const VendorSingupFrom = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      async function handleSignup(userInfo) {
        try {

        } catch (err) {
            
        }
      }
    return (
        <form onSubmit={handleSubmit(handleSignup)} autoComplete="off" className="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div className="input-field">
              {/* <i class="fas fa-user"></i> */}
              <input type="text" placeholder="Name" Icon={AiFillMail}  register={register}  errors={errors}/>
            </div>
            <div className="input-field">
              {/* <i class="fas fa-envelope"></i> */}
              <input type="email" placeholder="Email" Icon={AiFillMail}  register={register}  errors={errors} />
            </div>
            <div className="input-field">
              {/* <i class="fas fa-lock"></i> */}
              <input type="password" placeholder="Password" Icon={AiFillMail}  register={register}  errors={errors}/>
            </div>
            <input type="submit" className="btn" value="Sign up" />
            <p class="social-text">Or Sign up with social platforms</p>

            
            <div className="social-media">
              <a href="http:" className="social-icon" Icon={BsLockFill}>
                {/* <i class="fab fa-facebook-f"></i> */}
              </a>
              <a href="http:" className="social-icon" Icon={BsLockFill}>
                {/* <i class="fab fa-twitter"></i> */}
              </a>
              <a href="http:" className="social-icon" Icon={BsLockFill}>
                {/* <i class="fab fa-google"></i> */}
              </a>
              <a href="http:" className="social-icon" Icon={BsLockFill}>
                {/* <i class="fab fa-linkedin-in"></i> */}
              </a>
            </div>
        </form>
    );
};

export default VendorSingupFrom;