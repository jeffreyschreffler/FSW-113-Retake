// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
var reportedBy = document.querySelector("#reportedBy");
var selectItem = document.querySelector("#system");
var subItem = document.querySelector("#subSystem");
var bugDesc = document.querySelector("#bugDesc");
var listWrapper = document.querySelector("#listWrapper");
// This constructor should be set up to accept the four user-input values from index.html: 
// reportedBy, system, subSystem, and bugDesc
class Bug {
    static bugCount = 1;
    constructor(reportedBy, system, subSystem, bugDesc) {
        this.reportedBy = reportedBy;
        this.system = system;
        this.subSystem = subSystem;
        this.bugDesc = bugDesc;
        this.bugID = ++this.constructor.bugCount;
    }
    // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
    // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 
    addBug() {
        let div = document.createElement('div');
        div.setAttribute('class', 'reportDiv');
        div.id = `div_${this.bugID}`

        let report = document.createElement('p');
        report.setAttribute("class", "par");
        report.textContent = `Reported by: ${this.reportedBy}`;

        let system = document.createElement('p');
        system.setAttribute("class", "par");
        system.textContent = `System ${this.system}/${this.subSystem}`;
        
        let description = document.createElement('p');
        description.setAttribute("class", "par");
        description.textContent = this.bugDesc;

        let container = document.createElement('div');
        container.setAttribute('class', 'container');

        let check = document.createElement('div');
        check.innerHTML += '&#10004;';
        check.setAttribute('class', 'check');
        check.addEventListener('click', () => {
            this.resolveBug(this.bugID)
        });

        let deleteBtn = document.createElement('div');
        deleteBtn.innerHTML += '&#10006;';
        deleteBtn.setAttribute('class', 'deleteBtn');
        deleteBtn.addEventListener('click', ()  => {
            this.deleteBug(this.bugID)
        });

        container.append(check, deleteBtn);

        div.append(report, system, description, container);
        listWrapper.appendChild(div);
    }
    
    // Create code that will remove the appropriate bug from the DOM. 
    // You may need to Google how to remove an element from the DOM.
    deleteBug(id) {
        document.querySelector(`#div_${id}`).remove()
    }

    // Create code that changes the appropriate bug report to a darker color
    resolveBug(id) {
        console.log("color change")
        document.querySelector(`#div_${id}`).style.backgroundColor = "rgb(235, 122, 52)";
    }
}

// Create code that instantiates the Bug class with the data input by the 
// user in the index.html form. Then call the method to add the new bug report.
function reportBug(e) {
    const select = selectItem.options[selectItem.selectedIndex].text;
    const sub = subItem.options[subItem.selectedIndex].text;
    const bug = new Bug(reportedBy.value, select, sub, bugDesc.value);
    bug.addBug();
}
