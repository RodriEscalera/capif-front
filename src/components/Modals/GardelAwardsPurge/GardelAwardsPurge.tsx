import CustomButton from "@/commons/CustomButton/CustomButton";
import React, { FC } from "react";
import { IoCloseSharp } from "react-icons/io5";

const GardelAwardsPurge: FC<{ onCloseModal: () => void }> = ({
  onCloseModal,
}) => {
  return (
    <div
      className={
        "relative bg-white h-[16rem] w-[30rem] mb-[6rem] rounded-[2rem] gap-[0.5rem] flex flex-col justify-center items-center"
      }
    >
      <button onClick={onCloseModal} className="absolute top-[5%] right-[5%]">
        <IoCloseSharp size={25} color="black" />
      </button>

      <div className="w-[100%] pr-[1rem] pl-[1rem] flex flex-col items-center gap-[2rem] justify-center">
        <p className="text-black font-bold text-[1.3rem] text-center w-[90%]">
          ¿Estás seguro de que deseas depurar todos los códigos Gardel?
        </p>

        <div className="flex gap-[3rem] w-[100%] justify-center">
          <CustomButton>Aceptar</CustomButton>
          <CustomButton onClick={onCloseModal}>Cancelar</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default GardelAwardsPurge;