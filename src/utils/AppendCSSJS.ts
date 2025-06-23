export const add_script = (script_src:string)=>{
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = script_src;
    document.body.appendChild(script);
}

export const add_css_style = (css_file) =>{
    var headTag = document.getElementsByTagName('head')[0]
    const linkforCSSfile = document.createElement("link");
    linkforCSSfile.href = css_file
    linkforCSSfile.type = 'text/html'
    linkforCSSfile.rel = 'stylesheet'
    headTag.appendChild(linkforCSSfile);
    document.body.appendChild(headTag);
}
