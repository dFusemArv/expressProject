const express=require('express');
const path=require('path');
const hbs=require('hbs');

const app=express();
const port=process.env.PORT || 8000;
const templates=path.join(__dirname,'/templates');
const viewsPath=path.join(templates,'/views');
const partialsPath=path.join(templates,'/partials');
const staticLocation=path.join(templates,'../public');
//console.log(staticLocation);

hbs.registerPartials(partialsPath); 

app.use(express.static(staticLocation));

app.set('view engine','hbs');
app.set('views',viewsPath);
app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/weather',(req,res)=>{
    res.render('weather');
})

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('*',(req,res)=>{
    res.render('404');
})

app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})