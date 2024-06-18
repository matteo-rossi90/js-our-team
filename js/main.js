/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.*/

///////////////////////////////////////////////////////////////////////////////////////////

//Creare l’array di oggetti con le informazioni fornite.
const arrTeam = [
    {
        "name": "Wayne Barnet",
        "role": "Founder & CEO",
        "image": "wayne-barnet-founder-ceo.jpg"
    },
    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "image": "angela-caroll-chief-editor.jpg"
    },
    {
        "name": "Walter Gordon",
        "role": "Office manager",
        "image": "walter-gordon-office-manager.jpg"
    },
    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "image": "angela-lopez-social-media.jpg"
    },
    {
        "name": "Scott Estrada",
        "role": "Developer",
        "image": "scott-estrada-developer.jpg"
    },
    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "image": "barbara-ramos-graphic-designer.jpg"
    }

];

console.log(arrTeam);

//estrapolare l'array

for(let i = 0; i < arrTeam.length; i++){

    let members = arrTeam[i];
    console.log(members);

    //Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
    for (let key in members){
        console.log(key, " : ", members[key]);
    }

}

//Stampare le stesse informazioni su DOM sottoforma di stringhe