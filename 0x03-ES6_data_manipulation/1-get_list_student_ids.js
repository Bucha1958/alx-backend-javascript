export default function getListStudentIds(arrayObj) {
    if (Array.isArray(arrayObj) === true) {
	let newArray = arrayObj.map((obj) => obj);
	return newArray;
    } else {
	return new Array();
    }
}
