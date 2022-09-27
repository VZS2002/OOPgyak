const lista = [];

class Osztaly
{
    constructor(cim, hossz)
    {
        this.cim=cim;
        this.hossz=hossz;
    }
}

function push()
{
    let cim = document.getElementById('cim').value;
    let hossz =parseInt(document.getElementById('hossz').value);
    zene=new Osztaly(cim, hossz);
    lista.push(zene);
    hozzaad();
}
function hozzaad()
{
    let sum =0;
    for (let i = 0; i < lista.length; i++) {
       sum+=lista[i].hossz;
        
    }
    document.getElementById('osszhossz').textContent=sum;
}

document.getElementById('gomb').addEventListener('click',push);
