export default function getStudentIdsSum(getListStudents) {
  const getList = getListStudents.reduce((id) => id);
  return getList;
}
