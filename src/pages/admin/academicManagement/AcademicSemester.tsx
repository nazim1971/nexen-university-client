import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicSemester.api"


const AcademicSemester = () => {
    const {data} = useGetAllSemestersQuery(undefined);
    console.log(data);

  return (
    <div>AcademicSemester</div>
  )
}

export default AcademicSemester