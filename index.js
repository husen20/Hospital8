let users = [
    {
        username : 'husen',
        password :[
            {
            username : 'husen',
            password : '1234'
        },
        {
            username : 'dimas',
            password : '1234'
        }
        ]
    },
    {
        username : 'kars',
        password : '4321'
    },
    {
        username : 'razy',
        password : '3214'
    }

]

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let valid = false;

    // console.log(username, password);
    for (let i = 0; i < users.length; i++) {
        // console.log(users[i].username, users[i].password);
        if (users[i].username === username && users[i].password === password) {
            valid = true;
            break;
        }
        
    }

    if (!valid) {
        // $('#exampleModal').modal("hide");
        alert("username atau password salah anying")
    }else{
        // $('#exampleModal').modal("hide");
        document.getElementById('user').innerHTML = username;
        console.log(username);
    }
}

for (const key in users) {
    console.log(users[key].password.username);
}

