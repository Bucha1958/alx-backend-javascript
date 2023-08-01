export default function getListStudentIds(arrayObj) {
  if (Array.isArray(arrayObj) === true) {
    const newArray = arrayObj.map((obj) => obj);
    return newArray;
  }
  return [];
}
