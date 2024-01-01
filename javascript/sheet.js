let PersonagensList
async function requestPersonagens() {
    let { data: Personagens, error } = await supabaseClient
    .from('Personagens')
    .select('*')

    console.log(Personagens)
    PersonagensList = Personagens
    console.log(PersonagensList)
    renderCharacterList()
}
requestPersonagens()

function renderCharacterList(){
    let listHTML = document.querySelector('.lista-fichas')
    for (character of PersonagensList){
        listHTML.innerHTML += `
        <div class="character-card">
            <div class="character-name">${character.name}</div>
            <div class="character-xp">XP: ${character.xp}</div>
            <div class="btn avatar-airbender" onclick="openSheet(${character.id})">Abrir ficha</div>
        </div>
        `
    }
}




function toggleCard(skill){
    let cardHTML = document.querySelector(`#${skill}`)
    let expandBtn = document.querySelector(`#${skill} .skill-expand-btn`)

    if (cardHTML.classList.contains('reduced')){
        expandBtn.innerHTML = `<span class="material-symbols-outlined">expand_less</span>`
    } else {
        expandBtn.innerHTML = `<span class="material-symbols-outlined">expand_more</span>`
    }

    cardHTML.classList.toggle('reduced')
}


function openSheet(id){

    let character = JSON.parse(PersonagensList.find((personagem) => personagem.id === id).sheet)

    console.log(character)

    let outside = document.querySelector('.outside')

    outside.innerHTML = `
    <div class="modal">
                <div class="ficha">
                    <div class="ficha-header">
                        <div class="nome">Nome: ${character.name}</div>
                        <div class="life">
                            <div class="life-counter">
                                x${character.lifePurchased}
                                <span class="material-symbols-outlined">
                                    upgrade
                                </span>
                            </div>
                            <div class="life-number"><span contenteditable="true">${character.life}</span>/${character.life}</div>
                            <div class="life-buttons">
                                <span class="material-symbols-outlined">
                                    add
                                </span>
                                <span class="material-symbols-outlined">
                                    remove
                                </span>
                            </div>
                        </div>
                        <div class="xp">XP: ${character.xp}</div>
                    </div>
                    <div class="atributos">
                        <table>
                            <tr>
                                <th>FOR</th>
                                <th>DES</th>
                                <th>CON</th>
                                <th>INT</th>
                                <th>SAB</th>
                                <th>CAR</th>
                            </tr>
                            <tr>
                                <td class="attribute strength">${character.str}</td>
                                <td class="attribute dexterity">${character.dex}</td>
                                <td class="attribute constituition">${character.con}</td>
                                <td class="attribute intelligence">${character.int}</td>
                                <td class="attribute wisdow">${character.wis}</td>
                                <td class="attribute charisma">${character.cha}</td>
                            </tr>
                            <tr>
                                <td class="modifier strength">+${Math.floor((parseInt(character.str) - 10) / 2)}</td>
                                <td class="modifier dexterity">+${Math.floor((parseInt(character.dex) - 10) / 2)}</td>
                                <td class="modifier constituition">+${Math.floor((parseInt(character.con) - 10) / 2)}</td>
                                <td class="modifier intelligence">+${Math.floor((parseInt(character.int) - 10) / 2)}</td>
                                <td class="modifier wisdow">+${Math.floor((parseInt(character.wis) - 10) / 2)}</td>
                                <td class="modifier charisma">+${Math.floor((parseInt(character.cha) - 10) / 2)}</td>
                            </tr>
                        </table>
                        <div class="life-btn avatar-airbender">
                            Comprar vida<br>${(100 + character.lifePurchased*100)}xp
                        </div>
                    </div>
                    <div class="skills">
                        <div class="owned">

                        </div>
                        <div class="available">
                        
                        </div>
                    </div>
                </div>
            </div>
    `



    outside.classList.toggle('visible')
}