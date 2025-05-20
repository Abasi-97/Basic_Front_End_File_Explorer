let mainDisplay = document.querySelector('.main-display');
let displayMessage = document.querySelector('.display-message');
let table = document.querySelector('.file-table');
let contentList = document.querySelector('.content-list');
let deleteContent = false;
let rename = false;
const root = {
    name:"Root Folder",
    type:"folder",
    time:"4/22/2025",
    content:[]
}
//this function checks if there are any rows for the input field and folder contents
const killRows = () =>{
    let rows = document.querySelectorAll('tr');
    for(let i = 0; i < rows.length; i++){
        rows[i].remove();
    }
    let col = document.querySelectorAll('.file-list-content');
    for(let i = 0; i < col.length; i++){
        col[i].remove();
    }
}

function displayFolderContent(folder){
    let currentTime = new Date();
    console.log(root);
    killRows();
    if(folder.content.length === 0){
        displayMessage.innerText = 'folder is empty';
    }else{
        displayMessage.innerText = '';
        genRowOfConents(folder.content);
    }
    
    //buttons for operations
    let newFolderBtn = document.querySelector('.newfolder');
    let newFileBtn = document.querySelector('.newfile');
    let deleteBtn = document.querySelector('.delete');
    let renameBtn = document.querySelector('.rename');
    let parentDirectoryBtn = document.querySelector('.parent-directory-btn');
    let searchInput = document.querySelector('.search-input');
    let searchBtn = document.querySelector('.search-btn');
    //event for new folder button
    newFolderBtn.addEventListener('click',()=>{
        displayMessage.innerText = '';
        let oldInputRow = document.querySelector('.form-container');
        if(oldInputRow){
            oldInputRow.remove();
        }
        //calling the geninput() function
        genInputForm();
        let addBtn = document.querySelector('.addBtn');
        let inputForName = document.querySelector('.item-name');
        //calling the geninput() function
        addBtn.addEventListener('click',()=>{
            //new folder properties
            const newFolder = {
                name:inputForName.value,
                type:"folder",
                time: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`,
                content:[]
            }
            //push the folder to the content array
            folder.content.push(newFolder);
            killRows();
            genRowOfConents(folder.content);
        });
    });
    //event for new file button
    newFileBtn.addEventListener('click',()=>{
        displayMessage.innerText = '';
        let oldInputRow = document.querySelector('.form-container');
        if(oldInputRow){
            oldInputRow.remove();
        }
        //calling the geninput() function
        genInputForm();
        let addBtn = document.querySelector('.addBtn');
        let inputForName = document.querySelector('.item-name');
        //when the button is created, add an event
        addBtn.addEventListener('click',()=>{
            const newFile = {
                name:inputForName.value,
                type:"file",
                time: `${currentTime.getDate()}/${currentTime.getMonth()}/${currentTime.getFullYear()}`,
            }
            folder.content.push(newFile);
            killRows();
            genRowOfConents(folder.content);
        });
    });

    renameBtn.addEventListener('click',renameFunc);
    deleteBtn.onclick = () =>{
        deleteFunc();
    }
    searchBtn.onclick = () =>{
        console.log(searchInput.value);
        searchContent(root,searchInput.value);
    }
    parentDirectoryBtn.onclick = () =>{
        searchContent(root,folder.name);
    }
}

//calling the display function
displayFolderContent(root);

const genRowOfConents = (content) => {
    console.log(content);
    for(let j = 0; j < content.length; j++){
        let col = document.createElement('div');
        col.className = 'col-md-4 d-flex file-list-content mb-5 gap-3';
        let cardImage = document.createElement('div');
        cardImage.className = 'card border-0';
        let img = document.createElement('img');
        img.className = 'card-img-top';
        if(content[j].type === 'folder'){
            img.setAttribute('src','img/Folder-icon6.png');
        }else if(content[j].type === 'file'){
            img.setAttribute('src','img/Folder-icon.jpg');
        }
        cardImage.append(img);
        let cardTitleContainer = document.createElement('div');
        cardTitleContainer.className = 'row justify-content-start content-container';
        let cardTitle = document.createElement('div');
        cardTitle.className = 'col-8 pt-2';
        let title = document.createElement('div');
        title.className = 'fw-bold small content-name';
        if(content[j].name.length>10){
            title.innerText = '...';
        }else{
            title.innerText = `${content[j].name}`;
        }
        let folderDate = document.createElement('div');
        folderDate.className = 'small';
        folderDate.innerText = content[j].time;
        cardTitle.append(title);
        cardTitle.append(folderDate);
        cardTitleContainer.append(cardTitle);
        col.append(cardImage);
        col.append(cardTitleContainer);
        contentList.append(col);
    }
    matchContentRowstoArray(content);
}

const matchContentRowstoArray = (content) =>{
    let cols = document.querySelectorAll('.file-list-content');
    cols.forEach((col,index)=>{
        col.addEventListener('click',(e)=>{
            if(e.target.className === 'fw-bold small content-name'){
                if(rename === true){
                    genInputForm();
                    let add = document.querySelector('.addBtn');
                    let inputForName = document.querySelector('.item-name');
                    add.addEventListener('click',()=>{
                        rename = false;
                        content[index].name = inputForName.value;
                        killRows();
                        genRowOfConents(content);
                    });
                }else if(deleteContent === true){
                    e.target.parentNode.parentNode.parentNode.remove();
                    content = content.splice(index,1);
                }
            }else if(e.target.className === 'card-img-top'){
                if(content[index].type === 'folder'){
                    displayFolderContent(content[index]);
                }
            }
        });
    });
}
//function to generate the input form for the file/folder name
const genInputForm = () =>{
    let inputRow = document.createElement('tr');
    let formContainer = document.createElement('div');
    formContainer.className = 'd-flex form-container';
    let inputForName = document.createElement('input');
    inputForName.className = 'form-control item-name';
    let addBtn = document.createElement('button');
    addBtn.className = 'btn bg-success text-white addBtn';
    addBtn.innerText = 'add';
    formContainer.append(inputForName);
    formContainer.append(addBtn);
    inputRow.append(formContainer);
    table.append(inputRow);
}
function renameFunc(){
    rename = true;
    console.log(rename);
}
function deleteFunc(){
    deleteContent = true;
}
function searchContent(folder, folderName){
    console.log(folder.name);
    let nameFound = false;
    for(let i = 0; i < folder.content.length; i++){
        if(folder.content[i].name === folderName){
            nameFound = true;
        }
    }
    if(nameFound === true){
        return displayFolderContent(folder);
    }else{
        for(let i = 0; i < folder.content.length; i++){
            searchContent(folder.content[i], folderName);
        }
    }
}