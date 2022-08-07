function downloading (url,callback){
    setTimeout(()=>{
        console.log(`Downloading ${url} ...`);
        callback(url);
    },2000)
}

function process(pictures){
    console.log(`Processing ${pictures}`);
}

let url = 'https://www.javascripttutorial.net/pic.jpg';

downloading(url, process);