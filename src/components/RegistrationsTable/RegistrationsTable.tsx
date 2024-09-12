"use client";
import React, { FC, useRef, useState } from "react";
import { IoIosMail, IoMdSettings } from "react-icons/io";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { FaEdit, FaMusic, FaRegEyeSlash } from "react-icons/fa";
import { usersFakeData } from "@/utils/usersFakeData";
import dragTableFunctions from "@/hooks/dragTableFunctions";
import "./RegistrationsTable.css";

interface RegistrationsTableProps {
  users?: {
    id: number;
    email: string;
    state: string;
    cuit: string;
    name: string;
    phone: string;
    stamp: string;
    phonograms: number;
    creationDate: string;
    updateDate: string;
    isrcAudio: string;
    isrcVideo: string;
    vericast: string;
    notifications: number;
  };
}

const RegistrationsTable: FC<RegistrationsTableProps> = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = dragTableFunctions(scrollContainerRef);
  const toggleDropdown = (id: number) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative overflow-x-auto mt-[1rem] cursor-grab table-container"
    >
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              EMAIL
            </th>

            <th scope="col" className="px-6 py-3">
              ESTADO
            </th>
            <th scope="col" className="px-6 py-3">
              CUIT
            </th>
            <th scope="col" className="px-6 py-3">
              RAZON SOCIAL/NOMBRE
            </th>
            <th scope="col" className="px-6 py-3">
              TELÉFONO
            </th>
            <th scope="col" className="px-6 py-3">
              SELLO
            </th>
            <th scope="col" className="px-6 py-3">
              FONOGRAMAS
            </th>
            <th scope="col" className="px-6 py-3">
              FECHA CREACIÓN
            </th>
            <th scope="col" className="px-6 py-3">
              FECHA ACTUALIZACIÓN
            </th>
            <th scope="col" className="px-6 py-3">
              ISRC AUDIO
            </th>
            <th scope="col" className="px-6 py-3">
              ISRC VIDEO
            </th>
            <th scope="col" className="px-6 py-3">
              VERICAST
            </th>
            <th
              scope="col"
              className="px-6 py-3 flex justify-center items-center mt-[0.2rem]"
            >
              <IoIosMail size={20} />
            </th>
            <th scope="col" className="px-6 py-3">
              ACCIÓN
            </th>
          </tr>
        </thead>
        <tbody>
          {usersFakeData.map((element) => (
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-[#1280e1] whitespace-nowrap"
              >
                {element.email}
              </th>
              <td className="px-6 py-4">{element.state}</td>
              <td className="px-6 py-4">{element.cuit}</td>
              <td className="px-6 py-4">{element.name}</td>
              <td className="px-6 py-4">{element.phone}</td>
              <td className="px-6 py-4">{element.stamp}</td>
              <td className="px-6 py-4">{element.phonograms}</td>
              <td className="px-6 py-4">{element.creationDate}</td>
              <td className="px-6 py-4">{element.updateDate}</td>
              <td className="px-6 py-4">{element.isrcAudio}</td>
              <td className="px-6 py-4">{element.isrcVideo}</td>
              <td className="px-6 py-4">{element.vericast}</td>
              <td className="px-6 py-4">
                <p className="bg-[red] text-white text-center font-bold rounded-[0.2rem]">
                  {element.notifications}
                </p>
              </td>
              <td className="px-6 py-4 relative group">
                <button
                  onClick={() => toggleDropdown(element.id)}
                  className="bg-[#1280e1] text-white w-[2rem] h-[2rem] flex justify-center items-center rounded-[0.3rem]"
                >
                  <IoMdSettings size={20} />
                </button>
                <ul
                  className={`absolute right-0 mt-2 w-[8rem] bg-slate-900 border rounded-md shadow-lg z-30 overflow-hidden ${
                    activeDropdown === element.id ? "" : "hidden"
                  }`}
                >
                  <li className="px-4 py-2 hover:bg-slate-800 cursor-pointer text-white flex items-center justify-start gap-[0.7rem]">
                    <HiOutlineDocumentText /> <p>Trámites</p>
                  </li>
                  <li className="px-4 py-2 hover:bg-slate-800 cursor-pointer text-white flex items-center justify-start gap-[0.7rem]">
                    <FaEdit /> <p>Editar</p>
                  </li>
                  <li className="px-4 py-2 hover:bg-slate-800 cursor-pointer text-white flex items-center justify-start gap-[0.7rem]">
                    <FaMusic /> <p>Repertorio</p>
                  </li>
                  <li className="px-4 py-2 hover:bg-slate-800 cursor-pointer text-white flex items-center justify-start gap-[0.7rem]">
                    <FaRegEyeSlash /> <p>Ocultar</p>
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationsTable;