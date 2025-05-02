# Basic_frontend_file_explorer
# this is a basic implementation of a standard file system where you can make, rename and delete files and folders
# You can also make files and folders inside of folders you have made, making it simulate a real file system
# this is all thanks to the recursive data structure of a file system where an object exixts inside another:
let root = {
    name:'folder-name',
    type: 'folder',
    date: 'time created',
    content: [{
        name:'folder-name',
        type: 'folder',
        date: 'time created',
        content: [{name:'folder-name',
            type: 'folder',
            date: 'time created',
            content: [{}]}]
    },{
        name:'folder-name',
        type: 'folder',
        date: 'time created',
        content: [{}]
    }]
}
#Each folder is treated as an object, which can contain another object
# this is very easy to install, as all you need is to download or clone this repository and use it on your browser
# This project has been written in vanilla JavaScript and no dependencies or frameworks whatsoever, other than CSS bootstrap
# Project is still ungoing as I still have to apply some searching algorithms and enable the user to traverse the file structure

*********HOW TO USE***********
To create a new folder or file, click on the "+New Folder" or "+New File" button. 
An input field with an add "button" will appear. Enter the name of the file or folder and hit the add button. A file icon with the name you just inputed will
be displayed. You can do this as many times as you like. When you click the folder icon, it will lead you to an empty directory.
You can inspect the webpage with your dev tools and see what is being logged in the console. If you create a file or folder inside the folder whose icon you
just clicked on, you should see it reflected in the console on the web browser.

To rename a file or folder, first click the "rename button" and then click directly, the name of the folder or file you want to rename, which
is displayed boldy, next to the file/folder icon and above the date the file/folder was created. An input field will appear. Enter the new name and hit the add
button, and you have changed it successfully.
