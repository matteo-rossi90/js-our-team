/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.*/

///////////////////////////////////////////////////////////////////////////////////////////

//selezionare glie lementi di markup cha accolgono le cards
const cardMembers = document.querySelector(".row");

//Creare l’array di oggetti con le informazioni fornite.
const arrTeam = [
    {
        "name": "Wayne Barnet",
        "role": "Founder & CEO",
        "image": "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "image": "img/angela-caroll-chief-editor.jpg"
    },
    {
        "name": "Walter Gordon",
        "role": "Office manager",
        "image": "img/walter-gordon-office-manager.jpg"
    },
    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "image": "img/angela-lopez-social-media-manager.jpg"
    },
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "image": "img/scott-estrada-developer.jpg"
    },
    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "image": "img/barbara-ramos-graphic-designer.jpg"
    }

];

console.log(arrTeam);

//estrapolare gli oggetti dell'array
for(let i = 0; i < arrTeam.length; i++){

    let members = arrTeam[i];
    console.log(members);

    //estrarre tutte le proprietà degli oggetti
    for (let key in members){
        console.log(key, " : ", members[key]);//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto


    }

    //stampare in DOM come cards e con stringhe trasformate in immagini
    let itemCard = `<div class="card">
                        <img src="${members.image}" alt="">
                        <div class="text"> 
                            <h4>${members.name}</h4>
                            <h5>${members.role}</h5>
                        </div>
                    </div>`
    
    cardMembers.innerHTML += itemCard;


}
