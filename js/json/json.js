async function loadusers() {
    try {
        const responce = await fetch("arrof.json");
        const users = await responce.json();
        displayuser(users);
        localStorage.setItem("users", JSON.stringify(users));
    } catch (error) {
        console.error("Error in loading", error)
    }

}
function displayuser(users) {
    const table = document.getElementById("userTable");
    table.innerHTML = ""
    users.forEach(arrof => {
        let row = `<tr>
        <td>${arrof.id}</td>
        <td>${arrof.name}</td>
        <td>${arrof.email}</td>
        <td>${arrof.age}</td>
        </tr>`;
        table.innerHTML += row;
    })
}
function adduser() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    if (!name || !email || !age) {
        alert("All fields are required");
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let newuser ={
        id:users.length+1,
        name:name,
        email:email,
        age:parseInt(age)
    };
    users.push(newuser);
    localStorage.setItem("users",JSON.stringify(users));
    displayuser(users);
}
window.onload=loadusers;