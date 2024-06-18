/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.*/

///////////////////////////////////////////////////////////////////////////////////////////

//selezionare l'elemento di markup dove si troveranno le informazioni
const contentTable = document.getElementById("table");

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

// Creare la struttura della tabella
let tableHTML = `
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>
    `;

//estrapolare gli oggetti dell'array
for(let i = 0; i < arrTeam.length; i++){

    let members = arrTeam[i];
    console.log(members);

    //estrarre tutte le proprietà degli oggetti
    for (let key in members){
        console.log(key, " : ", members[key]);//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

    }

    //Stampare le stesse informazioni su DOM sottoforma di stringhe
    tableHTML += `
        <tr>
            <td>${members.name}</td>
            <td>${members.role}</td>
            <td>${members.image}</td>
        </tr>
    `;


}

// Chiudere la tabella
tableHTML += `
    </tbody>
</table>
`;

// Aggiungere la tabella al contenitore
contentTable.innerHTML = tableHTML;
