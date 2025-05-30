let root = {
    name:'root',
    type: 'folder',
    date: 'time created',
    content: [{
        name:'folder1',
        type: 'folder',
        date: 'time created',
        content: [{
            name:'folder3',
            type: 'folder',
            date: 'time created',
            content: [{
                name: 'folder5',
                type: 'folder',
                date: 'time created',
                content:[]
            }]}]
    },{
        name:'folder2',
        type: 'folder',
        date: 'time created',
        content: []
    }]
}

function searchContent(folder){
    let nameFound = false;
    for(let i = 0; i < folder.content.length; i++){
        if(folder.content[i].name === 'folder5'){
            nameFound = true;
        }
    }
    if(nameFound === true){
        return folder;
    }else{
        for(let i = 0; i < folder.content.length; i++){
            return searchContent(folder.content[i]);
        }
    }
}
let arr = [1,2,3];
arr.splice(1,1);
console.log(arr);