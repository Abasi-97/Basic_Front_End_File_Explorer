let container = document.querySelector('.container');
let fileNames = ['file1', 'file2', 'file3', 'file4', 'file5'];
n = 0;
let row = document.querySelector('div');
row.className = 'row';
for(let i = 0; i < fileNames.length; i++){
    let col = document.createElement('div');
    col.className = 'col-md-4';
    let card = document.createElement('div');
    card.className = 'card';
    let img = document.createElement('img');
    img.className = 'card-img-top';
    img.setAttribute('src','img/Folder-icon.jpg');
    card.append(img);
    col.append(card);
    row.append(col);
}

for(let i = 0; i < content.length; i++){
    let row = document.createElement('tr');
    for(let key in content[i]){
        let cell = document.createElement('td');
        if(Array.isArray(content[i][key])){
            continue;
        }else{
            cell.innerText = content[i][key];
        }
        row.append(cell);
    }
    table.append(row);
}
let rows = document.querySelectorAll('tr');
    rows.forEach((row,index)=>{
        row.addEventListener('click',()=>{
            displayFolderContent(content[index]);
        });
    });