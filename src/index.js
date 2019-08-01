const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')
if (process.env.NODE_ENV !== 'production' ) {
    require('electron-reload')(__dirname,{
        electron: path.join(__dirname,'../node_modules','bin','electron')
    })
}


let win
let Nwin
let pantalla
function pantallacomleta(){
    pantalla= true;
    console.log(pantalla)
    return pantalla 
   
}


function createWindows() {
    win = new BrowserWindow({
        height: 1000,
        height: 800,
        show: true, 
    }),
    win.loadURL(url.format({
        pathname: path.join(__dirname,'views/index.html'),
        format: 'file',
        slashes: true
        
    }))

      const menol = Menu.buildFromTemplate(templateMenu);
        Menu.setApplicationMenu(menol);
       
}
const templateMenu =[
    {
        label: 'file',
        submenu: [
            {
                label: 'setting',
                accelerator: 'Ctrl + N',
                click(){
                    NewCreateWinwdow()
                }
            }
        ],
        
       

    
    }
]

function NewCreateWinwdow(){
    Nwin = new BrowserWindow({width:800, height: 600, title:'New windows', fullscreen: false })
    Nwin.loadURL(url.format({
        pathname: path.join(__dirname,'views/configuracion.html'),
        format: 'file',
        slashes: true
    }))
}

app.on('ready',createWindows)

if(process.env.NODE_ENV !== 'production'){
    templateMenu.push({
        label: 'devtool',
        submenu:[{
            label: 'desaarrollo',
            click(item, focusedWinw) {
                focusedWinw.toggleDevTools()
                
            }
        }]    
    })
}