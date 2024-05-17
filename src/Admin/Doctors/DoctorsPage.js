import React, { useEffect } from "react";
import CommonDataTable from "../../GlobalComponents/CommonDataTable";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorList } from "../Slices/doctorSlice";
import { columns } from "./DoctorsTableColumn";

const DoctorsPage = () => {
  const dispatch = useDispatch();
  const doctorsList = useSelector((state) => state.doctor.doctorsList);

  console.log("listData", doctorsList);

  useEffect(() => {
    dispatch(getDoctorList());
  }, []);

  return (
    <CommonDataTable
      rows={doctorsList.map((item, idx) => ({ ...item, id: idx }))}
      columns={columns}
    />
  );
};

export default DoctorsPage;
