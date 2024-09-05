import React from "react";
import Image from "next/image";
import gitLogo from "../../assets/GIT LOGO.png";
import "../../styles/input.css";

export default function page() {
  return (
    <div className="flex justify-center h-[100vh]">
      <div className="flex flex-col gap-[1.3rem] justify-center items-center">
        <Image
          className="w-[25rem]"
          height={2000}
          width={2000}
          alt="GIT CAPIF"
          src={gitLogo}
        />
        <div className="bg-white w-[25rem] h-[29rem] flex flex-col items-center justify-center gap-[1rem]">
          <p className="text-customtext text-[1.1rem] text-center w-[90%]">
            Ingrese correo electrónico y contraseña para iniciar
          </p>
          <input
            placeholder="Correo electrónico"
            className={
              "custom-placeholder border-[#c8c8c8] border-[2px] w-[90%] outline-0 focus:border-[2px] focus:border-[#1280e1] h-[2rem]"
            }
          />
          <input
            placeholder="Contraseña"
            className={
              "custom-placeholder border-[#c8c8c8] border-[2px] w-[90%] outline-0 focus:border-[2px] focus:border-[#1280e1] h-[2rem]"
            }
          />

          <div className="flex border-[#c8c8c8] border-[2px] w-[90%] h-[5rem] gap-[1rem] items-center">
            <input
              type="checkbox"
              className="ml-[1rem] w-[2rem] h-[2rem] border-[2px] border-[#c8c8c8]"
            />
            <p className="text-customtext text-[1.1rem]">No soy un robot</p>
          </div>
          <div className="w-[90%] flex gap-[0.4rem] items-center">
            <input
              type="checkbox"
              className="w-[1rem] h-[1rem] border-[2px] border-[#c8c8c8]"
            />
            <p className="text-customtext text-[1.1rem] mt-[0.1rem]">
              Recordar contraseña
            </p>
          </div>
          <p className="text-[#1280e1] w-[90%]">Olvide mi contraseña</p>
          <button className="text-white bg-[#1280e1] h-[2.2rem] w-[90%]">
            Ingresar
          </button>
          <p className="text-[#1280e1] w-[90%]">
            Registrarse como nuevo usuario
          </p>
        </div>
      </div>
    </div>
  );
}
