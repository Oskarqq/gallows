
// Random password
var word = new Array(13);

word[0] = "A co po czyjej wielkości jak nie ma w głowie mądrości";
word[1] = "Brał i Napoleon czasem po tabinkach";
word[2] = "Ciasno w głowie przestronno w gębie";
word[3] = "Dobra głupiemu rada mądrego z głupim zwada";
word[4] = "Gdyby ciocia miała wąsy byłaby wujaszkiem";
word[5] = "Głaszcz chama to cię kopnie Kopnij chama to cię pogłaszcze";
word[6] = "Im kto więcej ma tym więcej chce";
word[7] = "Jak się nie ma co się lubi to się lubi co się ma";
word[8] = "Jednym uchem wchodzi a drugim wychodzi";
word[9] = "Kiedy Pan Bóg zamyka wszystkie drzwi zawsze zostawia jakieś uchylone okno";
word[10] = "Lepszy funt rozumu niż cetnar dowcipu";
word[11] = "Nie samym chlebem człowiek żyje";
word[12] = "Przepadło jak kamień w wodę";


var random_word = "";
 for ( i = 0; i <= 12; i++)
 {
    random_word = word[Math.floor(Math.random() * 12 ) + 0];
 } 
//
var password = random_word;
password = password.toUpperCase();

var length = password.length;
var fault_counter = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var password1 = "";

for ( i = 0; i < length; i++ )
{
    if (password.charAt(i) == " ") password1 = password1 + " ";
    else password1 = password1 + "-";
}

function write_password()
{
    document.getElementById("board").innerHTML = password1;
}

window.onload = start;

var letters = new Array(35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ż";


function start()
{
    var content_div = "";

    for ( i = 0; i <= 34; i++ )
    {
        var element = "let" + i;
        content_div = content_div + '<div class = "letter" onclick = "check('+i+')" id = "'+element+'">' + letters[i] + '</div>';
        if ( (i+1) % 7 == 
        0 ) content_div = content_div + '<div style = "clear:both;"></div>'

    }

    document.getElementById("alphabet").innerHTML = content_div;


    write_password();
}

String.prototype.setSign = function(position, sign)
{
    if (position > this.length - 1) return this.toString();
    else return this.substr(0, position) + sign + this.substr(position+1);
}

function check(nr)
{

    var hit = false;

    for ( i = 0; i < length; i++)
    {
        if (password.charAt(i) == letters[nr])
        {
            password1 = password1.setSign(i, letters[nr]);
            hit = true;
        }
    }

    if(hit == true)
    {
        yes.play();
        var element = "let" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";
        write_password();
    }
    else
    {
        no.play();
        var element = "let" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C00000";
        document.getElementById(element).style.border = "3px solid #C00000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");

        //fault
        fault_counter++;
        var picture = "img/s"+ fault_counter + ".jpg";
        document.getElementById("gallows").innerHTML = "<img src='"+picture+"'alt='' />";
    }

    //win
    if (password == password1)
    document.getElementById("alphabet").innerHTML = "Good Job! This is the correct password!<br /> "+ password +'<br /><br /><span class="reset" onclick="location.reload()">Again?</span>';
    
    //failure
    if(fault_counter >= 9)
    document.getElementById("alphabet").innerHTML = "Failure! The correct answer is: <br /> "+ password +'<br /><br /><span class="reset" onclick="location.reload()">Again?</span>';
} 