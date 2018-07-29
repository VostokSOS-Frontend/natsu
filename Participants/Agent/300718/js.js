"strict mode";

let deposit = 100;
let rate = 0;
let win = 0;
let game = 0;

alert("Ваш депзоит составляет "+deposit+" кредитов");

function Rate()
{
    
    rate = +prompt("Сделайте вашу ставку");
    
    if (rate != 0 && rate <= deposit && rate > 0) 
    {
        game = 1;
        return(1);
    }
    else if (rate > deposit || rate < 0 || isNaN(rate))   
    {
        alert("Неверная ставка!");
        return(-1);
    }
    else 
    {
        alert("Вы проиграли! \nВаш выигрыш составил: "+(deposit-100)+" кредитов");
        game = 0;
        return(0);
    }
}

function Roll()
{
    let Rate = +prompt("На какую грань ставите ?");
    if (Rate < 1 || Rate > 6 || isNaN(Rate) ){
        alert("Ошибка! \nВыберите грань от 1 до 6.");
        return(-1);
    }
    else 
    {
        win = 0;
        document.write("<p>Вы поставили на: "+Rate+"</p> <p><ul>");
        for (let i = 0; i < 3; i++)
        {
            let num = Math.round(Math.random()*6);
            document.write("<li>выпало: "+num+"</li>");
           if(num == Rate){
               win++;
           }
        }
        document.write("</ul></p> <p>Побед: "+win+"</p>");
        return(0);
    } 
}

function Game()
{
    while (true) 
        {
        let result = Rate();
        if (result == 1 || result == 0)
            {
            break;
            }
        }
    if (game)
        {
            while (true)
            {
            result = Roll();
            if (result == 0)
                {
                break;
                }
            }
            if (win){
            deposit +=Math.round(rate * win);
            }
            else {deposit -=rate};
            document.write("<div>Ваш баланс: "+deposit+" кредитов</div>");
        }
    }


Game();
