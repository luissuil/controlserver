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
function createWindows() {
    win = new BrowserWindow({
        height: 1000,
        height: 800
    }),
    win.loadURL(url.format({
        pathname: path.join(__dirname,'views/index.html'),
        format: 'file',
        slashes: true
        
    }))

       const menol = Menu.buildFromTemplate(templateMenu);
        Menu.setApplicationMenu(menol)
}
const templateMenu =[
    {
        label: 'file',
        submenu: [
            {
                label: 'new Producto',
                accelerator: 'Ctr + N',
                click(){
                    NewCreateWinwdow()
                }
            }
        ]
    }
]
function NewCreateWinwdow(){
    Nwin = new BrowserWindow({width:800, height: 600, title:'New windows', fullscreen: false })
    Nwin.setMenu(null)
    Nwin.loadURL(url.format({
        pathname: path.join(__dirname,'views/newWindows.html'),
        format: 'file',
        slashes: true
    }))
}
app.on('ready',createWindows)

