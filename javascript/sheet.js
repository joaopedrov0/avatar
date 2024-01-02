let PersonagensList
let skillTree
let character


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
    skillTree = ''

    character = JSON.parse(PersonagensList.find((personagem) => personagem.id === id).sheet)

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
                                <span class="material-symbols-outlined" onclick="changeLifePoints(true)">
                                    add
                                </span>
                                <span class="material-symbols-outlined" onclick="changeLifePoints(false)">
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
                        <div class="life-btn avatar-airbender" onclick="purchaseLife()">
                            Comprar vida<br>${(250)}xp
                        </div>
                    </div>
                    <div class="skills">
                        <div class="owned">
                        <h2>Compradas</h2>
                        </div>
                        <div class="available">
                        <h2>Disponíveis</h2>
                        
                        </div>
                    </div>
                </div>
            </div>
    `



    outside.classList.toggle('visible')

    renderSkills(character)
}

function renderSkills(character) {
    skillTree = new FireSkillTree()
    console.log(skillTree)

    let owned = document.querySelector('.owned')
    let available = document.querySelector('.available')

    owned.innerHTML = '<h2>Compradas</h2>'
    available.innerHTML = '<h2>Disponíveis</h2>'


    for (skill in skillTree){
        console.log(skill)
        if(character.skills[skill]){
            owned.innerHTML += createSkillCard(character.skills[skill], skill, true)
        } else {
            available.innerHTML += createSkillCard(skillTree[skill], skill)
        }
    }
}

function createSkillCard(skill, key, characterHave){
    let temp = ''
    temp += `
    <div class="skill-card reduced" id="${key}">
        <div class="skill-header">
            <div class="skill-name"><strong>${skill.name}</strong></div>
            <div class="skill-price"><strong>Preço:</strong> ${skill.price}xp</div>
            <div class="skill-expand-btn" onclick="toggleCard('${key}')">
                <span class="material-symbols-outlined">
                    expand_more
                </span>
            </div>
        </div>
        <div class="skill-content">
        `
    if(skill.castingTime){
        temp += `<div class="skill-castingTime"><strong>Tempo de conjuração:</strong> ${skill.castingTime}</div>`
    }
    if(skill.range){
        temp += `<div class="skill-range"><strong>Alcance:</strong> ${skill.range[skill.purchased.range]}</div>`
    }
    if(skill.learningComponents){
        temp += `<div class="skill-learningComponents"><strong>Componentes de aprendizagem:</strong> ${skill.learningComponents}</div>`
    }
    if(skill.duration){
        temp += `<div class="skill-duration"><strong>Duração:</strong> ${skill.duration}</div>`
    }
    if(skill.damage && characterHave){
        temp += `<div class="skill-damage"><strong>Dano:</strong> ${skill.damage[skill.purchased.damage]} + ${Math.floor((parseInt(character.str) - 10) / 2)}</div>`
    } else if (skill.damage){
        temp += `<div class="skill-damage"><strong>Dano:</strong> ${skill.damage[skill.purchased.damage]} + MF</div>`
    }

    if(skill.defender && characterHave){
        temp += `<div class="skill-damage"><strong>Defesa:</strong> ${skill.defender[skill.purchased.defender]} + ${Math.floor((parseInt(character.dex) - 10) / 2)}</div>`
    } else if (skill.defender){
        temp += `<div class="skill-damage"><strong>Dano:</strong> ${skill.defender[skill.purchased.defender]} + MD</div>`
    }
    if(skill.uses){
        temp += `<div class="skill-uses"><strong>Usos:</strong> <span contenteditable="true">${skill.uses}</span>/${skill.uses}</div>`
    }
        temp +=`
            <div class="skill-description"><strong>Descrição:</strong> ${skill.description}</div>
        </div>
        <div class="skill-upgrades">
        <strong>Upgrades</strong>
        `
        if(skill.upgrades.damage){
            temp +=`<div class="skill-upgrades-damage"><strong>Dano:</strong> Nível ${skill.purchased.damage}</div>`
        }
        if(skill.upgrades.range){
            temp +=`<div class="skill-upgrades-range"><strong>Alcance:</strong> Nível ${skill.purchased.range}</div>`
        }
        if(skill.upgrades.wallSize){
            temp +=`<div class="skill-upgrades-wallSize"><strong>Tamanho da parede:</strong> Nível ${skill.purchased.wallSize}</div>`
        }
        if(skill.upgrades.defender){
            temp +=`<div class="skill-upgrades-defender"><strong>Defender:</strong> Nível ${skill.purchased.defender}</div>`
        }
        if(skill.upgrades.difficultyClass){
            temp +=`<div class="skill-upgrades-difficultyClass"><strong>Classe de dificuldade:</strong> Nível ${skill.purchased.difficultyClass}</div>`
        }
        if(!characterHave){
            temp +=`<div class="life-btn avatar-airbender" onclick="buySkill('${key}')">
                        Comprar<br>${skill.price}xp
                    </div>`
        }
        `

        </div>
    </div>
    `

    return temp
}



function changeLifePoints(signal){
    let currentHP = document.querySelector('.life-number span')
    if(signal){
        currentHP.innerText = parseInt(currentHP.innerText) + 1
    } else {
        currentHP.innerText = parseInt(currentHP.innerText) - 1
    }
}


function buySkill(key){
    character.skills[key] = skillTree[key]
    character.xp = parseInt(character.xp) + parseInt(skillTree[key].price)

    console.log(key)

    console.log(skillTree[key])

    console.log(character)

    let oldCard = document.querySelector(`#${key}`)
    oldCard.parentNode.removeChild(oldCard)

    renderSkills(character)

    renderXP()
}


function renderXP(){
    let characterXP = document.querySelector('.xp')
    characterXP.innerText = `XP: ${character.xp}`
}

function renderLife(bonusLife){
    let characterLife = document.querySelector('.life-number')
    let lifeCounter = document.querySelector('.life-counter')

    lifeCounter.innerHTML = `
    x${character.lifePurchased}
    <span class="material-symbols-outlined">
        upgrade
    </span>
    `

    console.log(lifeCounter)

    let currentAndMax = characterLife.innerText.split('\n/')
    currentAndMax[0] = parseInt(currentAndMax[0]) + bonusLife
    currentAndMax[1] = parseInt(currentAndMax[1]) + bonusLife

    characterLife.innerHTML = `<span contenteditable="true">${currentAndMax[0]}</span>/${currentAndMax[1]}`
}

function purchaseLife(){
    let bonusLife = roll(1, 6) + 6 + Math.floor((character.con - 10) / 2)
    character.life += bonusLife

    character.lifePurchased++

    character.xp = parseInt(character.xp) + 250


    renderXP()
    renderLife(bonusLife)
}

function roll(quantity, faces){
    let temp = 0
    for(let i = quantity; i > 0; i--){
        temp += Math.floor(Math.random() * faces) + 1
    }
    return temp
}