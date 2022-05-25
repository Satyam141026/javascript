console.log('We are at tut 6');
const name = 'Harry';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);

let html;
html  = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";

        html = html.concat('this', ' str2','    satyam');
        console.log(html);
         console.log(html.length);
      console.log(html.toLowerCase());
        console.log(html.toUpperCase());
        console.log(html);
        
        
         console.log(html[0]);
        console.log(html.indexOf('s'));
        // console.log(html.lastIndexOf('<'));
         console.log(html.charAt(0));
         console.log(html.endsWith('dsfsdfd'));
         console.log(html.includes(' satyam'));
         console.log(html.substring(1,20));
         console.log(html.slice(1, 20))
        // console.log(html.split('>'));
        // console.log(html.replace('this', 'it'));
        
        let fruit1 = 'Orange\'';
        let fruit2 = 'Apple';
        let myHtml = `Hello ${name}
                    <h1> This is "my" heading </h1>
                    <p> You like ${fruit1} and ${fruit2}`;
        
        document.body.innerHTML = myHtml;            
        