function validatePassword() 
{
    // Email Validation
    let username = document.getElementById("username").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!username.match(validRegex)) {
        alert("Wrong Email Format")
    }

    
   
    // Password Validation
    let password = document.getElementById("password").value;
    let capital_letter = false, number = false, special_char = true;
    for(let i=0; i<password.length; i++)
    {
        if(password[i]>='A' && password[i]<='Z')
        {
            capital_letter = true;
        }
        if(password[i]>='0' && password[i]<='9')
        {
            number = true;
        }

        if((password[i]>='A' && password[i]<='Z') || (password[i]>='a' && password[i]<='z') || (password[i]>='0' && password[i]<='9'))
        {
            continue;
        }
        else
        {
            if(password[i]!='@')
            {
                special_char = false;
                break;
            }
        }
    }

    if(capital_letter==false || number==false || special_char==false)
    {
        alert("Wrong Password Format")
    }
    
}

  