const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

]

// list of each part number and qty for check-off in the "detailsList" element

parts.forEach(function (elm){
    let detailsListDisplay = document.querySelector('#detailsList');
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    let label = document.createElement('label')
    detailsListDisplay.append(check,label);
    label.innerHTML = `${elm.qty} (${elm.partNbr}) - ${elm.partDescr} <br>` ;
})

// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element

let specialPackaging = document.querySelector('#specialPackaging');
specialPackaging.textContent = 'Speical Packaging required'
let specialPackagingDiv = document.createElement('div');
specialPackaging.append(specialPackagingDiv)
specialPackaging.classList.add('list-style');
parts.forEach(function (elm){
    if(elm.aisle === 'B3'){
        let specialPackagingUl = document.createElement('ul');
        let specialPackagingItems = document.createElement('li');
        specialPackagingDiv.append(specialPackagingUl,specialPackagingItems);     
        specialPackagingItems.textContent = ` Item:${elm.partNbr} / Qty: ${elm.qty} `;
    }
})

// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element



parts.map(function (elm){
    if (elm.aisle === 'J4'){
        let hazardousMaterials = document.querySelector('#hazardousMaterials');
        hazardousMaterials.textContent = "Hazardous Parts included";
        let hazardousMaterialsUl = document.createElement('ul');
        let hazardousMaterialsItems = document.createElement('li');
        hazardousMaterials.append(hazardousMaterialsUl,hazardousMaterialsItems);
        hazardousMaterialsItems.classList.add('list-style');
        hazardousMaterialsItems.textContent = 'Get gloves';

    }
})


// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1

let smallItems = document.querySelector('#smallItemsOnly');
smallItems.remove();

// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element

let forkiftNeeded = document.querySelector('#forkiftNeeded');
forkiftNeeded.remove()

// sum up the total number of parts and append that number to the text already in "totalItems" element
let totalItems = document.querySelector('#totalItems');
let total = parts.reduce(function (prev,part){
    return prev + part.qty;
    
},0)

totalItems.textContent = `Total number of parts in order: ${total}`

