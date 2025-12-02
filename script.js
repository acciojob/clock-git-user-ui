const pTag = document.getElementById("timer");
function currentDateTime(){
	
    const now = new Date();

    // Format date
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months start at 0
    const year = now.getFullYear();

    let hours = String(now.getHours()).padStart(2, "0");
	const minutes = String(now.getMinutes()).padStart(2, "0");
	const seconds = String(now.getSeconds()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

	hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12
    hours = String(hours).padStart(2, "0");
	
    const finalDateTime = `${month}/${day}/${year},  ${hours}:${minutes}:${seconds} ${ampm}` 

 pTag.innerHTML = finalDateTime;
}

currentDateTime()
setInterval(currentDateTime, 1000)