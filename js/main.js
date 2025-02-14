let virtualRoot = {
    folderName: "root folder",
    content: []
}
let arr = virtualRoot;
function fileSystemDisplay(rootObject){
    let createFolder = document.querySelector('.create-folder');
    let createFile = document.querySelector('.create-file');
    let view = document.querySelector('.view');
    let form = document.querySelector('.form');
    let add = document.querySelector('.add');
    let directoryDisplay = document.querySelector('.directory-display');
    let inputForContentName = document.querySelector('input');
    if(rootObject.content.length === 0){
        directoryDisplay.innerHTML = 'Empty Directory'
    }else{
        generateFileList(rootObject.content, directoryDisplay);
    }
    createFolder.addEventListener('click',()=>{
        directoryDisplay.innerHTML = '';
        form.style.display = 'flex';
        add.addEventListener('click',()=>{
            rootObject.content.push({folderName: inputForContentName.value, type: 'folder',
            date: new Date(), content:[]});
            console.log(rootObject.content);
            clearDisplay();
            generateFileList(rootObject.content, directoryDisplay);
        });
        
    });
    createFile.addEventListener('click',()=>{
        form.style.display = 'flex';
        add.addEventListener('click',()=>{
            rootObject.content.push({fileName: inputForContentName.value, type: 'file', date: new Date()});
        });
    });
    
    
}
fileSystemDisplay(virtualRoot);
function clearDisplay(){
    let folders = document.querySelectorAll('.folder');
    for(let i = 0; i<folders.length; i++){
        folders[i].remove();
    }
}
function generateFileList(content,dirDisplay){
    console.log(content);
    for(let i = 0; i < content.length; i++){
        let folderElement = document.createElement('div');
        folderElement.classList.add("folder");
        let NameforFolder = content[i].folderName;
        let nameContainer = document.createElement('div');
        nameContainer.classList.add("folder-name");
        nameContainer.append(NameforFolder);
        let date = `${content[i].date.getDate()}-${content[i].date.getMonth()}-${content[i].date.getFullYear()}`;
        let dateContainer = document.createElement('div');
        dateContainer.classList.add('date');
        dateContainer.append(date);
        folderElement.append(nameContainer);
        folderElement.append(dateContainer);
        folderElement.addEventListener('click', () => {
            fileSystemDisplay(content[i]);  // Navigate into folder
        });
        dirDisplay.append(folderElement);
    }
    console.log(arr)
}