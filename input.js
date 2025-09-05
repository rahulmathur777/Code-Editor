// import CodeMirror from 'codemirror';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/mode/xml/xml';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/mode/css/css';
// import 'codemirror/mode/htmlmixed/htmlmixed';
// import 'codemirror/theme/eclipse.css';


const htmlEditor = CodeMirror.fromTextArea(document.getElementById('htmlCode'), {
    mode: 'htmlmixed',
    theme: 'eclipse',
    lineNumbers: true,
    lineWrapping: true
}); //stores reference of the js object crreated by the codemirror

const cssEditor = CodeMirror.fromTextArea(document.getElementById('cssCode'), {
    mode: 'css',
    theme: 'eclipse',
    lineNumbers: true,
    lineWrapping: true
});

const jsEditor = CodeMirror.fromTextArea(document.getElementById('jsCode'), {
    mode: 'javascript',
    theme: 'eclipse',
    lineNumbers: true,
    lineWrapping: true
});

//js output

const consoleOutput = document.getElementById('console-output');

//initilise ide keynames:
 let ed_arr=[htmlEditor,cssEditor,jsEditor];

//initilise localstorage keynmaes:
let lcl_Strg_keys=["htmlCode","cssCode","jsCode"];
//PURANE WALA CONTENT BHI RKHNA H BETE
htmlEditor.setValue(localStorage.getItem("htmlCode"))
cssEditor.setValue(localStorage.getItem("cssCode"))
jsEditor.setValue(localStorage.getItem("jsCode"))
let iframe=document.querySelector("#myIframe");
// const content = `
//         <html>
//             <head>
//                 <style>${localStorage.getItem("cssCode")}</style>
//             </head>
//             <body>
//                 ${localStorage.getItem("htmlCode")}
//             <script>
//         (function() {
//             const parentLog = window.parent.document.getElementById('console-output');
//             console.log = function(...args) {
//                 parentLog.innerHTML += '<span style="color:yellow">' + args.join(' ') + '</span><br>';
//             };
//             console.error = function(...args) {
//                 parentLog.innerHTML += '<span style="color:red">' + args.join(' ') + '</span><br>';
//             };
//         })();
//     <\/script><script>${jsEditor.getValue()}<\/script>
//             </body>
//         </html>`;
//         console.log(iframe);
// const output = htmlEditor.getValue() + `<style>`+cssEditor.getValue()+`</style>` + `<script>`+jsEditor.getValue()+`</script>`;
// iframe.srcdoc= output

htmlEditor.on("change", function() {
            localStorage.setItem("htmlCode", htmlEditor.getValue());
            // console.log("htmlCode", localStorage.getItem("htmlCode"));
            updatedoc();
            // updateStatus("HTML saved to localStorage");
            // updateOutput();
});

cssEditor.on("change", function() {
    localStorage.setItem("cssCode", cssEditor.getValue());
    // console.log("cssCode", localStorage.getItem("cssCode"));
updatedoc();
});

jsEditor.on("change", function() {
    localStorage.setItem("jsCode", jsEditor.getValue());
    // console.log("jsCode", localStorage.getItem("jsCode"));
updatedoc();

});

function updatedoc() {
    const content = `
        <html>
            <head>
                <style>${localStorage.getItem("cssCode")}</style>
            </head>
            <body>
                ${localStorage.getItem("htmlCode")}
                <script>
                (function() {
                    const parentLog = window.parent.document.getElementById('console-output');
                    console.log = function(...args) {
                        parentLog.innerHTML += '<span style="color:yellow">' + args.join(' ') + '</span><br>';
                    };
                    console.error = function(...args) {
                        parentLog.innerHTML += '<span style="color:red">' + args.join(' ') + '</span><br>';
                    };
                })();
                <\/script>
                <script>
                    ${localStorage.getItem("jsCode")}
                <\/script>
            </body>
        </html>`;
    
    iframe.srcdoc = content;
}

document.getElementById('download-btn').addEventListener('click', () => {
    const htmlCode = htmlEditor.getValue();
    const cssCode = `<style>${cssEditor.getValue()}</style>`;
    const jsCode = `<script>${jsEditor.getValue()}<\/script>`;
    const output = htmlCode + cssCode + jsCode;

    const blob = new Blob([output], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "code.html";
    link.click();
});

