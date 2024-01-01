function renderModifier(att){
    console.log(`blur ${att}`)
    let attribute = document.querySelector(`td.attribute.${att}`)
    let modifier = document.querySelector(`td.modifier.${att}`)
    let modifierValue = Math.floor((parseInt(attribute.innerText) - 10) / 2)
    if(modifierValue >= 0){
        modifier.innerText = `+${modifierValue}`
    } else if (modifierValue < 0){
        modifier.innerText = `-${modifierValue}`
    } else {
        modifier.innerText = `+0`
    }
}