import { useState } from "react";
import vid from "../../assets/30fd1f7b63806eff4db0d4276eb1ac45.mp4";
import logo from "../../assets/Dribbble-Logo.png";
import { createAccount } from "../../services/api/userAPI";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { handleRegister } from "../../services/helper";
const RegisterPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const [pending, setPending] = useState<boolean>(false);

  const navigate = useNavigate();

  //   const handleRegister = (e: any) => {
  //     // "use server";
  //     e.preventDefault();
  //     setPending(true);

  //     createAccount({ name, email, password, avatar })
  //       .then((res) => {
  //         if (res.status === 201) {
  //           navigate("/login");
  //         } else {
  //           return;
  //         }
  //       })
  //       .finally(() => {
  //         setPending(false);
  //       });
  //   };

  return (
    <div>
      <div className="flex gap-10 h-screen">
        <main className="hidden md:flex relative w-[450px] border-r ">
          <div className="absolute left-10 h-full w-full">
            <img src={logo} className="h-20 " />

            <p className="text-white absolute bottom-10">@set10</p>
          </div>
          <video
            src={vid}
            className="w-full h-full object-cover "
            loop
            autoPlay
            playsInline
            controls
          />
        </main>
        <main className=" justify-center w-full md:justify-start flex items-center h-full">
          <form
            onSubmit={(e) =>
              handleRegister(
                e,
                { name, email, password, avatar },
                setPending,
                navigate("/login")
              )
            }
          >
            <div className="flex flex-col mb-4">
              <label>Name</label>
              <input
                required
                type="text"
                className="border w-[400px] h-[45px] rounded-md mt-1 pl-2 outline-none"
                name="name"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Email</label>
              <input
                required
                type="email"
                className="border w-[400px] h-[45px] rounded-md mt-1 pl-2 outline-none"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Password</label>
              <input
                required
                type="password"
                className="border w-[400px] h-[45px] rounded-md mt-1 pl-2 outline-none"
                name="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Avatar</label>
              <input
                required
                type="url"
                className="border w-[400px] h-[45px] rounded-md mt-1 pl-2 outline-none"
                name="avatar"
                placeholder="Enter Avatar"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
              />
            </div>

            <button
              disabled={pending}
              className="h-[45px] w-[400px] rounded-md mt-5 bg-blue-950 text-white"
              type="submit"
            >
              {pending ? (
                <div className="flex justify-center items-center gap-2">
                  <FaSpinner className="animate-spin" /> <span>loading...</span>
                </div>
              ) : (
                "Register"
              )}
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default RegisterPage;
