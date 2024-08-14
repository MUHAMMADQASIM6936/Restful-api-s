const express=require('express');
const app=express();
const path=require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

const comments=[{
    username:'todd',
    comment:'lol that is so funny'
},
{
    username:'ali',
    comment:'i like to go birdwatching'
},
{
    username:'hasan',
    comment:'plz delete your account'
},
{
    username:'hamza',
    comment:'hurrah'
}
]

app.get('/comments',(req,res)=>{
        res.render('comments/index',{comments});
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
})
app.post('/comments',(req,res)=>{
    const {username}=req.body;
    const {comment}=req.body;
   comments.push({'username':`${username}`, 'comment' :`${comment}`})
   
   res.redirect('/comments');
    
})

app.get('/comments/:id',(req,res)=>{
    const {id}=req.params;
    const data = comments[id];
    console.log(data);
    res.render('comments/show',{data});
  
})
app.listen(3000,()=>{
 console.log('listening at port 3000:');
})