function zaloguj()
{
    
  let div = $('.log');
    let dane = `  
    <div class="container">
    <h1>LogIn page</h1>
    <form action="#" onsubmit="loguj()">
    <table>
            <tr>
                <td>
                    login:
                </td>
                <td>
                    <input id='loginWpr' required>
                </td>
            </tr>
            <tr>
                <td>
                    password:
                </td>
                <td>
                    <input type="password" id='passwordWpr' required>
                </td>
            </tr>
            <tr>
                    <td>
                        <input  class="btn btn-primary" type="submit" value="Loguj mnie" />
                    </td>
                    <td>
                        <input  class="btn btn-primary" type="reset" value="Wyczyść dane" />
                    </td>
                </tr>
            
    </table>
    </form>
    <h3>Nie masz jeszcze konta?</h3><button  class="btn btn-primary" onclick="zarejestruj()">Zarejestruj się</button>
    <div class="loggedList">
      
    </div> 
    </td>
    `;
    div.html(dane);  
}
function zarejestruj()
{
    let div = $('.log');
    let dane = `
    <form action="#" onsubmit="rejestruj()">
    <h2>Utwórz now konto</h2>
            <div class="dsds"></div>  
            <table>
            <tr>
                <td>
                  Login:
                </td>
                <td>
                  <input maxlength="10" id="newLogin" name="login" pattern="[A-Za-z]{4,10}"  required>
                </td>
              </tr>  
            <tr>
                <td>
                  Imię:
                </td>
                <td>
                  <input maxlength="10" id="newName" name="name" pattern="[A-Za-z]{2,10}"  required>
                </td>
              </tr>
              <tr>
                <td>
                  Nazwisko:
                </td>
                <td>
                  <input maxlength="10" id="newSurname" name="surname" pattern="[A-Za-z]{2,10}"  required>
                </td>
              </tr>
              <tr>
                <td>
                  Numer telefonu:
                </td>
                <td>
                  <input maxlength="10" type="text" id="newNumber" name="number" pattern="[0-9]{9}" required>
                </td>
              </tr>
              <tr>
                <td>
                  Hasło:
                </td>
                <td>
                  <input type="password" id="newPassword" name="password" minlength="8" required>
                </td>
              </tr>
              <tr>
                <td>
                  Data urodzenia:
                </td>
                <td>
                  <input type="date" id="newData" name="trip-start" value="2000-01-01" min="1900-01-01" max="2019-12-31">
                </td>
              </tr>
              <tr>
                <td>
                  Płeć:
                </td>
                <td>
                  <input type="radio" name="gender" value="male">
                  <label for="male">Mężczyzna</label>
                  <input type="radio" name="gender" value="female">
                  <label for="female">Kobieta</label>
                </td>
              </tr>
                <tr>
                    <td>
                        <input  class="btn btn-primary" type="submit" value="Zarejestruj mnie " />
                    </td>
                    <td>
                        <input  class="btn btn-primary" type="reset" value="Wyczyść dane" />
                    </td>
                </tr>
            </table>
            
            
            </div>
            <h3>Masz już konto?</h3><button  class="btn btn-primary" onclick="zaloguj()">Zaloguj się</button>
        </form>
    `;
    div.html(dane);
    
}
function rejestruj()
{
    sessionStorage.setItem(document.getElementById('newLogin').value, document.getElementById('newPassword').value);
    let div = $('.log');
    let dane = `<h1>Was zarejestrowano</h1>
    <button   class="btn btn-primary" onclick="zaloguj()">Zaloguj się</button>
    `;
    div.html(dane);
}
function loguj()
{
    for(let i = 1; i < sessionStorage.length; i++)
    {
        console.log(sessionStorage.key(i), sessionStorage.getItem(sessionStorage.key(i)));
    } 
    let div = $('.log');
    let dane = '';
    let login = document.getElementById('loginWpr').value;
    let password = document.getElementById('passwordWpr').value;
    let kod = 0;
    for(let i = 1; i < sessionStorage.length; i++)
    {
        if(login === sessionStorage.key(i))
        {
            if(password === sessionStorage.getItem(sessionStorage.key(i)))
            {
                
              alert("Udane logowanie");  
              kod = 1;
                console.log("hurra");
                dane = `
                <h1>Hurra jesteście w systemie.Witamy Was na liście zarejestrowanych użytkowników</h1>
                <table>
                <thead>
                        <tr>
                            <th colspan="2">Lista zalogowanych użytkowników</th>
                        </tr>
                    </thead><tbody>
                `;
                for(let i = 1; i < sessionStorage.length; i++)
        {
            dane = dane + '<tr> <td> ' + sessionStorage.key(i) + ' </td> <td>';
            dane =  dane + sessionStorage.getItem(sessionStorage.key(i))  + '</td> </tr>';
        } 
                break;
            }
        }
    }
    if(kod === 0)
    {
        alert("Niestety niepoprawny login lub hasło ");
        dane = `
        <h1>Niepoprawny login lub hasło</h1>
        <br/>
        <h1>Spróbuj jeszcze raz <button onclick="zaloguj()">Zaloguj się</button></h1>
        `;
        for(let i = 1; i < sessionStorage.length; i++)
        {
            dane = dane + '<tr> <td> ' + sessionStorage.key(i) + ' </td> <td>';
            dane =  dane + sessionStorage.getItem(sessionStorage.key(i))  + '</td> </tr>';
        }  
        dane +=   '</tbody></table>';   
    }
    div.html(dane);
}
try
{
 loguj();
}
catch(e)
{
  window.onerror = function(msg,url,line)
  {
    alert(e.message + "\n" + msg + "\n" + url + "\n" + line);
  }
}
finally
{

}