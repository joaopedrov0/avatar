// import supabaseCLient from './supabase'

function renderModifier(att){
    console.log(`blur ${att}`)
    let attribute = document.querySelector(`td.attribute.${att} > input`)
    let modifier = document.querySelector(`td.modifier.${att}`)
    let modifierValue = Math.floor((parseInt(attribute.value) - 10) / 2)
    if(modifierValue >= 0){
        modifier.innerText = `+${modifierValue}`
    } else if (modifierValue < 0){
        modifier.innerText = `${modifierValue}`
    } else {
        modifier.innerText = `+0`
    }
}


class Character {
    constructor(name, str, dex, con, int, wis, cha){
        this.name = name
        // this.modStr = Math.floor((parseInt(str) - 10) / 2)
        // this.modDex = Math.floor((parseInt(dex) - 10) / 2)
        // this.modCon = Math.floor((parseInt(con) - 10) / 2)
        // this.modInt = Math.floor((parseInt(int) - 10) / 2)
        // this.modWis = Math.floor((parseInt(wis) - 10) / 2)
        // this.modCha = Math.floor((parseInt(cha) - 10) / 2)
        this.life = 20 + Math.floor((parseInt(con) - 10) / 2)
        this.str = parseInt(str)
        this.dex = parseInt(dex)
        this.con = parseInt(con)
        this.int = parseInt(int)
        this.wis = parseInt(wis)
        this.cha = parseInt(cha)
        this.xp = 0
        this.skills = {}
        this.lifePurchased = 0
        this.proficienty
    }
}



async function submitCharacter(){
    let strength = document.querySelector('#strength-attribute').value
    let dexterity = document.querySelector('#dexterity-attribute').value
    let constituition = document.querySelector('#constituition-attribute').value
    let intelligence = document.querySelector('#intelligence-attribute').value
    let wisdow = document.querySelector('#wisdow-attribute').value
    let charisma = document.querySelector('#charisma-attribute').value

    let name = document.querySelector('input.name').value

    let newCharacter = new Character(name, strength, dexterity, constituition, intelligence, wisdow, charisma)
    console.log(newCharacter)
    

    switch(''){
        case strength:
            alert('Você não atribuiu Força ao seu personagem')
            break
        case dexterity:
            alert('Você não atribuiu Destreza ao seu personagem')
            break
        case constituition:
            alert('Você não atribuiu Constituição ao seu personagem')
            break
        case intelligence:
            alert('Você não atribuiu Inteligência ao seu personagem')
            break
        case wisdow:
            alert('Você não atribuiu Sabedoria ao seu personagem')
            break
        case charisma:
            alert('Você não atribuiu Carisma ao seu personagem')
            break
        case name:
            alert('Você não atribuiu um Nome ao seu personagem')
            break
        default:
            console.log(newCharacter)
            const { data, error } = await supabaseClient
                .from('Personagens')
                .insert([{name: newCharacter.name, xp: newCharacter.xp, sheet: JSON.stringify(newCharacter)}])
                .select()
                window.location.pathname = '/avatar'
            break
    }
}


// supabase.from('Personagens').select('*').order('created_at', {ascending: false}).then(({ data }) => {
//     console.log(data)
//     setChatList(data)
// })