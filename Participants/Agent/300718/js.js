"strict mode";

let deposit = 100;
let rate = 0;
let win = 0;
let game = 0;
function Rate()
{
    rate = +prompt("Сделайте вашу ставку");
    
    if (rate != 0 && rate <= deposit && rate > 0) 
    {
        game = 1;
        document.write("<div style=\"display: inline-block; width: 220px; margin: 30px; padding: 15px 20px; border-radius: 5px; border: 3px solid; \"><p style=\" margin-top: 0; \">Вы поставили: "+rate+" кредитов</p>");
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
        document.write("<p>Вы поставили на: "+Rate+" грань</p> <ul>");
        for (let i = 0; i < 3; i++)
        {
            let num = Math.ceil(Math.random()*6);
            console.log(num);
            document.write("<li>выпало: "+num+"</li>");
           if(num == Rate){
               win++;
           }
        }
        document.write("</ul> <p>Побед: "+win+"</p>");
        return(0);
    } 
}
function Game()
{
    alert("Ваш депзоит составляет "+deposit+" кредитов");
    if (deposit != 0)
    {
    while (true) 
        {
        let result = Rate();
        if (result == 1 || result == 0)
            {
            break;
            }
        }
    }
        else 
            {
                game = 0;
                alert("Вы проиграли! \nВаш выигрыш составил: "+(deposit-100)+" кредитов");
            };
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
            if (win)
            {
            deposit +=Math.round(rate * win);
            }
            else 
            {
                deposit -=rate
            };
            document.write("<p style=\" margin-bottom: 0; \">Ваш баланс: "+deposit+" кредитов</p></div>");
        }
    }
Game();
while (game){
Game();
}
