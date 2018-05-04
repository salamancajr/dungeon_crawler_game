import React from 'react';
import {pixls} from "./Level1"
import {pixels1} from "./Level2"
import {mapData1} from "./Level2"
import {mapData2} from "./Level4"
import {pixels2} from "./Level4"
import {mapData} from "./Level1"
import {mapData3} from "./Final_Level"
import {pixels3} from "./Final_Level"
var attacks=[]
var damage=0
var count= []
var meals=[]
var energy=0
var board=0
var board1=0
 
 var event2=[]
var cam=0
var cam1=0
var pixels = pixls
var newMap=0
var header=0
 
export class Pongball extends React.Component {
  constructor(props){
    super(props)
    this.state={x:340,
                y:340,
              multiple:"",
            multipleY:""}

   this.changeY = this.changeY.bind(this)          
  }
  
  componentDidMount(){
   
    this.setState({reset: 2})//once map is loaded, will not use math random operator
    board=document.getElementById("board")
    board1 = board.getBoundingClientRect()
    cam= document.getElementById("camera")
    cam1= cam.getBoundingClientRect()
    var b = document.createElement("div")
b.style.position="absolute"
b.style.top=0
b.style.left=0
 b.style.background="black"
b.style.height="400px"
b.style.width="400px"
 b.style.opacity=.8
b.id="redButton"
b.style.cursor="pointer"
 b.style.color="red"
b.style.fontSize="40px"
b.style.zIndex=1
b.style.display="none"
 
cam.insertAdjacentElement("beforeend", b)
 
    document.getElementById("redButton").addEventListener("click", ()=>{
      this.setState({x:340})
      this.setState({y:340})
      this.setState({multiple:0})
      this.setState({multipleY:0})
      pixels=pixls
      energy=50
      
      mapData.map(function(y, i){
        if(y===2||y===3||y===5){
          mapData.splice(i, 1, 1)
          
        }
       })
      
       
      event2 = [this.state.x, this.state.y, mapData, damage, energy, this.state.multiple, this.state.multipleY, pixels, 1]
      this.props.onChange(event2)
energy=0
      mapData1.map(function(y, i){
        if(y===2||y===3||y===5){
          mapData1.splice(i, 1, 1)
          
        }})
        mapData2.map(function(y, i){
          if(y===2||y===3||y===5||y===1){
            mapData2.splice(i, 1, 7)
            
          }})
        mapData3.map(function(y, i){
          if(y===2||y===3||y===5||y===1){
            mapData3.splice(i, 1, 7)
            
          }
        if(i===493||i===494||i===453||i===454){
          mapData3.splice(i, 1, 8)
        }
        })
        b.style.display="none"
        
      
     })
//////////////////////////////////////////////////////////

var c = document.createElement("div")
c.style.position="absolute"
c.style.top=0
c.style.left=0
 c.style.background="url(https://images.unsplash.com/photo-1520246819288-8bcefb7ac966?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0861c0b1d9b9586d6b37a41b21b34145&auto=format&fit=crop&w=750&q=80)"
c.style.height="400px"
c.style.width="400px"
 c.style.opacity=1
c.id="redButton2"
 c.style.color="blue"
c.style.fontSize="40px"
c.style.zIndex=1
c.style.display="none"
c.style.backgroundPosition= "center center";
c.style.backgroundSize= "cover";
c.style.cursor="pointer"
cam.insertAdjacentElement("beforeend", c)
header = document.createElement("div")
 
 c.insertAdjacentElement("afterbegin", header)
 header.style.position="absolute"
 header.style.cursor="pointer"    
 header.style.top=0
     header.style.left=0
     header.style.background="grey"
     header.style.border="15px ridge blue"
     header.style.height="100px"
     header.style.width="150px"
     header.style.opacity=.9
    header.id="header"
    // var s2="Bear_is_finally\nreunited\nwith_her_cub!"
 
//var v2 =0

 
//var arr2 = setInterval(function(){if(v2===0){header.innerText=""};header.innerText= header.innerText+s2[v2];v2+=1; if(v2===s2.length){clearInterval(arr2)}}, 80)
 
     header.style.color="blue"
     header.style.fontSize="20px"
     header.style.zIndex=1
     header.style.display="block"





    document.getElementById("redButton2").addEventListener("click", ()=>{
      this.setState({x:340})
      this.setState({y:340})
      this.setState({multiple:0})
      this.setState({multipleY:0})
      pixels=pixls
      energy=100
      
      mapData.map(function(y, i){
        if(y===2||y===3||y===5){
          mapData.splice(i, 1, 1)
          
        }
       })
      
       
      event2 = [this.state.x, this.state.y, mapData, damage, energy, this.state.multiple, this.state.multipleY, pixels, 1]
      this.props.onChange(event2)
energy=0
      mapData1.map(function(y, i){
        if(y===2||y===3||y===5){
          mapData1.splice(i, 1, 1)
          
        }})
      mapData2.map(function(y, i){
          if(y===2||y===3||y===5||y===1){
            mapData2.splice(i, 1, 7)
            
          }})
        mapData3.map(function(y, i){
          if(y===2||y===3||y===5||y===1){
            mapData3.splice(i, 1, 7)
            
          }  
          if(i===493||i===494||i===453||i===454){
            mapData3.splice(i, 1, 8)
          }
        })
        c.style.display="none"
        
      
     })

///////////////////////////////intro//////////////////////
     var d = document.createElement("div")
     d.style.position="absolute"
     d.style.top="35px"
     d.style.left="35px"
     d.style.background="grey"
     d.style.border="15px ridge blue"
     d.style.height="220px"
     d.style.width="300px"
     d.style.opacity=.7
     d.id="redButton3"
     var s="Snakes_have_ransacked\nbear\'s_cave_and_taken\nher_cub_as_dinner.\nSave_the_cub_before\nthe_snakes_make_a_meal\nout_of_him! \n\nCLICK_HERE_THEN_CLICK_BEAR\nTO_BEGIN..."
     d.style.fontFamily="Caesar Dressing"
var v =0

 
var arr = setInterval(function(){if(v===0){d.innerText=""};d.innerText= d.innerText+s[v];v+=1;if(v===s.length){clearInterval(arr)}}, 80)
d.style.cursor="pointer"
     d.style.color="blue"
     d.style.fontSize="20px"
     d.style.zIndex=1
     d.style.display="block"
     d.style.backgroundPosition= "center center";
     d.style.backgroundSize= "cover";
     cam.insertAdjacentElement("beforeend", d)
      
         document.getElementById("redButton3").addEventListener("click", ()=>{

             d.style.display="none"
             
          
          })




  }

  changeY(event){

   
     const xAxis = this.state.x
    const yAxis = this.state.y

   var badGuyMap=[];//collect all the enemies: "2" on the map to later delete them off the map when we defeat them
   var copy = this.props.map1.slice()
  copy.map(function(type, index){//iterate through copy of the level 1 map to filter out all of the enemies and put them into badGuyMap
    if(type===2){
      badGuyMap.push(index)
     }})

  
var baddiesTop=[]
var baddiesLeft=[]
  var badGuyRelativePos = []//collect all the coordinates info: x, y, left, right, top, bottom, width, height
var copy2 = Array.from(document.querySelectorAll("#Enemies"))

copy2.map(function(el){
  var obj2 = el.offsetLeft+parseInt(board.style.left)
  var obj3 = el.offsetTop+parseInt(board.style.top)
      var obj = el.getBoundingClientRect()//method returns the size of an element and its position relative to the viewport
      badGuyRelativePos.push(obj)
      baddiesLeft.push(obj2)
      baddiesTop.push(obj3)
})
/////////collect the coordinates of the walls to set boundaries
var wall = []
var wallLeft=[]
var wallTop=[]
var copy3 = Array.from(document.querySelectorAll("#Walls"))
copy3.map(function(el){
  
  var obj2 = el.offsetLeft+parseInt(board.style.left)
  var obj3 = el.offsetTop+parseInt(board.style.top)
  var obj = el.getBoundingClientRect()
  wall.push(obj)
  wallLeft.push(obj2)
  wallTop.push(obj3)
})
///////collect coordinates of honey
var honey = []
var honeyTop = []
var honeyLeft = []
var copy4 = Array.from(document.querySelectorAll("#Honey"))
copy4.map(function(el){
  var obj2 = el.offsetLeft+parseInt(board.style.left)
  var obj3 = el.offsetTop+parseInt(board.style.top)
  var obj = el.getBoundingClientRect()
  honey.push(obj)
  honeyTop.push(obj3)
  honeyLeft.push(obj2)
})

var cub = []
var cubTop = []
var cubLeft = []
var copy7 = Array.from(document.querySelectorAll("#cub"))
copy7.map(function(el){
  var obj2 = el.offsetLeft+parseInt(board.style.left)
  var obj3 = el.offsetTop+parseInt(board.style.top)
  var obj = el.getBoundingClientRect()
  cub.push(obj)
  cubTop.push(obj3)
  cubLeft.push(obj2)
})

var kSMap=[];//collect all the enemies: "2" on the map to later delete them off the map when we defeat them
var copy = this.props.map1.slice()
copy.map(function(type, index){//iterate through copy of the level 1 map to filter out all of the enemies and put them into badGuyMap
 if(type===8){
   kSMap.push(index)
  }})



var kingSnake = []
var kSTop = []
var kSLeft = []
var copy6 = Array.from(document.querySelectorAll("#kingSnake"))
copy6.map(function(el){
  var obj2 = el.offsetLeft+parseInt(board.style.left)
  var obj3 = el.offsetTop+parseInt(board.style.top)
  var obj = el.getBoundingClientRect()
  kingSnake.push(obj)
  kSTop.push(obj3)
  kSLeft.push(obj2)
})
 for(var i=0;i<kingSnake.length;i++)
{if(yAxis===kSTop[i]+20 && 
 xAxis===kSLeft[i] && event.keyCode=== 38 || yAxis===kSTop[i] && 
  xAxis===kSLeft[i]+20 && event.keyCode=== 37 || yAxis===kSTop[i] && 
  xAxis===kSLeft[i]-20 && event.keyCode=== 39 || yAxis===kSTop[i]-20 && 
  xAxis===kSLeft[i] && event.keyCode=== 40)
     
      { for (var j=0;j<=0;j++){ 
     attacks.push(i)}

     if(pixels===pixls){
     damage=Math.floor(Math.random()*3)+4}
     if(pixels===pixels1){
      damage=Math.floor(Math.random()*3)+8}
      if(pixels===pixels2){
        damage=Math.floor(Math.random()*6)+12}
        if(pixels===pixels3){
          damage=Math.floor(Math.random()*8)+12}

     event2 = [this.state.x, this.state.y, newMap, damage, energy, this.state.multiple, this.state.multipleY]

    
       
     
     if (attacks.length>=4){
       
     attacks.map(function(x){
        if(x===i){
         count.push(i)

       }})
      if(count.length>=4){
      for(var k=0;k<4;k++){
     newMap.splice(kSMap[k], 1, 1)//remove the defeated baddie
      }
     
     
      
     
    attacks = attacks.map(function(c){
      if (c<i)
      {return c}
      if (c>i){
        return c-=1
      }
    })
    event2 =[this.state.x, this.state.y, newMap, damage, energy, this.state.multiple, this.state.multipleY, pixels, 2, 15]
    this.props.onChange(event2)
    
     }
    }}}



var honeyPots=[];//collect all the enemies: "2" on the map to later delete them off the map when we defeat them
var copy5 = this.props.map1.slice()
copy5.map(function(type, index){//iterate through copy of the level 1 map to filter out all of the enemies and put them into badGuyMap
 if(type===3){
   honeyPots.push(index)
  }})
if( document.getElementById("Weapon")){
  var weapon = document.getElementById("Weapon")
  var weaponLeft = weapon.offsetLeft+parseInt(board.style.left)
  var weaponTop = weapon.offsetTop+parseInt(board.style.top)
  
  
  if (yAxis === weaponTop+20 &&
    xAxis === weaponLeft && event.keyCode === 38 || yAxis === weaponTop &&
    xAxis === weaponLeft+20 && event.keyCode === 37 || yAxis === weaponTop &&
    xAxis === weaponLeft- 20 && event.keyCode === 39 || yAxis === weaponTop - 20 &&
    xAxis === weaponLeft && event.keyCode === 40)
     
{newMap.splice(newMap.indexOf(5), 1, 1)//remove the honey
  
  event2 = [this.state.x, this.state.y, newMap, damage, energy, this.state.multiple, this.state.multipleY, pixels, 2, 15, 15]
  this.props.onChange(event2)
  }}

 
 newMap = this.props.map1
 
 
 for(var i=0;i<honeyPots.length;i++)
 {
   if (yAxis === honeyTop[i]+20 &&
     xAxis === honeyLeft[i] && event.keyCode === 38 || yAxis === honeyTop[i] &&
     xAxis === honeyLeft[i]+20 && event.keyCode === 37 || yAxis === honeyTop[i] &&
     xAxis === honeyLeft[i]- 20 && event.keyCode === 39 || yAxis === honeyTop[i] - 20 &&
     xAxis === honeyLeft[i] && event.keyCode === 40)
{meals.push(i)
energy=10
newMap.splice(honeyPots[i], 1, 1)//remove the honey
event2 = [this.state.x, this.state.y, newMap, damage, energy, this.state.multiple, this.state.multipleY]
 


}}

if (yAxis === cubTop[0]+20 &&
  xAxis === cubLeft[0] && event.keyCode === 38 || yAxis === cubTop[0] &&
  xAxis === cubLeft[0]+20 && event.keyCode === 37 || yAxis === cubTop[0] &&
  xAxis === cubLeft[0]- 20 && event.keyCode === 39 || yAxis === cubTop[0] - 20 &&
  xAxis === cubLeft[0] && event.keyCode === 40)
{
  var cubby=document.getElementById("redButton2").style.display="block"
  var s2="Bear_is_finally\nreunited\nwith_her_cub!"
  var v2 =0
  
  var arr2 = setInterval(function(){if(v2===0){header.innerText=""};header.innerText= header.innerText+s2[v2];v2+=1; if(v2===s2.length){clearInterval(arr2)}}, 100)
     document.onkeydown = function (e) {
    e.preventDefault();		
  }

}


  for(var i=0;i<badGuyMap.length;i++)
  {if(yAxis===baddiesTop[i]+20 && 
   xAxis===baddiesLeft[i] && event.keyCode=== 38 || yAxis===baddiesTop[i] && 
    xAxis===baddiesLeft[i]+20 && event.keyCode=== 37 || yAxis===baddiesTop[i] && 
    xAxis===baddiesLeft[i]-20 && event.keyCode=== 39 || yAxis===baddiesTop[i]-20 && 
    xAxis===baddiesLeft[i] && event.keyCode=== 40)
       
        { for (var j=0;j<Math.floor(this.props.power/10);j++){ 
       attacks.push(i)}

       if(pixels===pixls){
       damage=Math.floor(Math.random()*3)+4}
       if(pixels===pixels1){
        damage=Math.floor(Math.random()*3)+8}
        if(pixels===pixels2){
          damage=Math.floor(Math.random()*6)+12}
          if(pixels===pixels3){
            damage=Math.floor(Math.random()*8)+12}

       event2 = [this.state.x, this.state.y, newMap, damage, energy, this.state.multiple, this.state.multipleY]
  
      
        
       
       if (attacks.length>=4){
         
       attacks.map(function(x){
          if(x===i){
           count.push(i)
 
         }})
        if(count.length>=4){
        
       newMap.splice(badGuyMap[i], 1, 1)//remove the defeated baddie
       
       
       
        
       
      attacks = attacks.map(function(c){
        if (c<i)
        {return c}
        if (c>i){
          return c-=1
        }
      })
      event2 =[this.state.x, this.state.y, newMap, damage, energy, this.state.multiple, this.state.multipleY, pixels, 2, 15]
      this.props.onChange(event2)
      
       }
      }}}
   
   var pageX = window.pageXOffset
   var pageY = window.pageYOffset
    
 
    //right arrow
    var trackerRight=1
    for(var i=0;i<badGuyMap.length;i++)
    {if(!(yAxis===baddiesTop[i] && 
     xAxis===baddiesLeft[i]-20 && count.length<4))
     {trackerRight*=1; 
     count=[];
     }else{trackerRight*=0}}//enemy bottom
    

     for(var i=0;i<kingSnake.length;i++)
     {if(!(yAxis===kSTop[i] && 
      xAxis===kSLeft[i]-20 && count.length<4))
      {trackerRight*=1; 
      count=[];
      }else{trackerRight*=0}}


    for(var i=0;i<wall.length;i++)
    {if(!(yAxis===wallTop[i] && 
     xAxis===wallLeft[i]-20))
     {trackerRight*=1}else{trackerRight*=0}}

    if (event.keyCode=== 39){trackerRight*=1}else{trackerRight*=0}
    if(!(xAxis===board1.right-20)){trackerRight*=1}else{trackerRight*=0}
    if(this.props.over===0){trackerRight*=1}else{trackerRight*=0}
    if(!(xAxis===pixels[0]-(400*this.state.multiple)-20)){trackerRight*=1}else{trackerRight*=0}
      if(document.getElementById("redButton3").style.display==="none"){trackerRight*=1}else{trackerRight*=0}
   if(trackerRight>0) {if(this.state.x+20>=400){this.setState({multiple: this.state.multiple+=1}); this.setState({x:xAxis+20-400})}else{this.setState({x:xAxis+20})}} 
       //left arrow
        var trackerLeft=1
         for(var i=0;i<badGuyMap.length;i++)
         {if(!(xAxis===baddiesLeft[i]+20 && 
          yAxis===baddiesTop[i] && count.length<4))
          {trackerLeft*=1; 
          count=[];
          }else{trackerLeft*=0}}

          for(var i=0;i<kingSnake.length;i++)
          {if(!(xAxis===kSLeft[i]+20 && 
           yAxis===kSTop[i] && count.length<4))
           {trackerLeft*=1; 
           count=[];
           }else{trackerLeft*=0}}


         for(var i=0;i<wall.length;i++)
         {if(!(xAxis===wallLeft[i]+20 && 
          yAxis===wallTop[i]))
          {trackerLeft*=1}else{trackerLeft*=0}}
          if(this.props.over===0){trackerLeft*=1}else{trackerLeft*=0}
         if (event.keyCode=== 37){trackerLeft*=1}else{trackerLeft*=0}
         if(!(xAxis===pixels[0]-(400*this.state.multiple)-pixels[0])){trackerLeft*=1}else{trackerLeft*=0}
         if(document.getElementById("redButton3").style.display==="none"){trackerLeft*=1}else{trackerLeft*=0}

        if(trackerLeft>0) {if(this.state.x-20<0){this.setState({multiple:this.state.multiple-=1}); this.setState({x:xAxis-20+400})}else{this.setState({x:xAxis-20})}} 
        
           //down arrow
   
           var trackerDown=1
           for(var i=0;i<badGuyMap.length;i++)
           {if(!(yAxis===baddiesTop[i]-20 && 
            xAxis===baddiesLeft[i] && count.length<4))
            {trackerDown*=1; 
            count=[];
            }else{trackerDown*=0}}
           
            for(var i=0;i<kingSnake.length;i++)
            {if(!(yAxis===kSTop[i]-20 && 
             xAxis===kSLeft[i] && count.length<4))
             {trackerDown*=1; 
             count=[];
             }else{trackerDown*=0}}

            for(var i=0;i<wall.length;i++)
            {if(!(yAxis===wallTop[i]-20 && 
             xAxis===wallLeft[i]))
             {trackerDown*=1}else{trackerDown*=0}}
  
            if (event.keyCode=== 40){trackerDown*=1}else{trackerDown*=0}
            if(this.props.over===0){trackerDown*=1}else{trackerDown*=0}
           if(!(yAxis===pixels[1]-(400*this.state.multipleY)-20)){trackerDown*=1}else{trackerDown*=0}
           if(document.getElementById("redButton3").style.display==="none"){trackerDown*=1}else{trackerDown*=0}
           if(trackerDown>0) {if(this.state.y+20>380){this.setState({multipleY:this.state.multipleY+=1}); this.setState({y:yAxis+20-400})}else{this.setState({y:yAxis+20})}} 
           
          //up arrow
          var trackerUp=1
           for(var i=0;i<badGuyMap.length;i++)
           {if(!(yAxis===baddiesTop[i]+20 && 
            xAxis===baddiesLeft[i] && count.length<4))
            {trackerUp*=1; 
            count=[];
            }else{trackerUp*=0}}//enemy bottom
           
            for(var i=0;i<kingSnake.length;i++)
            {if(!(yAxis===kSTop[i]+20 && 
             xAxis===kSLeft[i] && count.length<4))
             {trackerUp*=1; 
             count=[];
             }else{trackerUp*=0}}



           for(var i=0;i<wall.length;i++)
           {if(!(yAxis===wallTop[i]+20 && 
            xAxis===wallLeft[i]))
            {trackerUp*=1}else{trackerUp*=0}}

           if (event.keyCode=== 38){trackerUp*=1}else{trackerUp*=0}
           if(this.props.over===0){trackerUp*=1}else{trackerUp*=0}
           if(!(yAxis===pixels[1]-(400*this.state.multipleY)-pixels[1])){trackerUp*=1}else{trackerUp*=0}
           if(document.getElementById("redButton3").style.display==="none"){trackerUp*=1}else{trackerUp*=0}
          
           if(trackerUp>0) {if(this.state.y-20<0){this.setState({multipleY:this.state.multipleY-=1}); this.setState({y:yAxis-20+400})}else{this.setState({y:yAxis-20})}} 
          event2 = [this.state.x, this.state.y, newMap, damage, energy, this.state.multiple, this.state.multipleY, pixels, 2]
          this.props.onChange(event2)
          ///reset damage and energy so it does not keep adding or subtracting from  your health
          damage=0
          energy=0
         
          


       var door = document.getElementById("Door")

  var doorLeft = door.offsetLeft+parseInt(board.style.left)
  var doorTop = door.offsetTop+parseInt(board.style.top)

       if(yAxis===doorTop+20 && 
        xAxis===doorLeft && event.keyCode=== 38 || yAxis===doorTop && 
         xAxis===doorLeft+20 && event.keyCode=== 37 || yAxis===doorTop && 
         xAxis===doorLeft-20 && event.keyCode=== 39 || yAxis===doorTop-20 && 
         xAxis===doorLeft && event.keyCode=== 40)
            
             {if (pixels===pixls){
               pixels=pixels1
              this.setState({x:40})
              this.setState({y:60})
              event2 = [this.state.x, this.state.y, mapData1, damage, energy, this.state.multiple, this.state.multipleY, pixels, 1]
              this.props.onChange(event2)
             
         
            }

              else if (pixels===pixels1){
                pixels=pixels2
               this.setState({x:340})
               this.setState({y:0})
               event2 = [this.state.x, this.state.y, mapData2, damage, energy, this.state.multiple, this.state.multipleY, pixels, 1]
               this.props.onChange(event2)}
              
               else if (pixels===pixels2){
                pixels=pixels3
               this.setState({x:380})
               this.setState({y:360})
               event2 = [this.state.x, this.state.y, mapData3, damage, energy, 1, 1, pixels, 1]
               this.props.onChange(event2)}
 
            }
        
        }

renderStyles(){
  return {
  }
}

  
  
  render() {
   
   
   
    var style={top: this.state.y,
      left: this.state.x,
      
  }
  const disp =this.props.toggle===1?"block":"none"
    
    return (<div style={{position:"relative"}}>
      <div id="dark" style={{zIndex:1,display:disp, position:"absolute",top:"0px", height: this.state.y===0? this.state.y:this.state.y-40, width: cam1.width, background:"black"}}>
        </div>
        <div id="dark" style={{zIndex:1,display:disp,position:"absolute",left:"0px", width: this.state.x===0? this.state.x:this.state.x-40, height:cam1.height, background:"black"}}>
        </div>
        <div id="dark" style={{zIndex:1,display:disp,position:"absolute", top: this.state.y+60, height: cam1.height-(this.state.y+60), width: cam1.width, background:"black"}}>
        </div>
        <div id="dark" style={{zIndex:1, display:disp,position:"absolute",left:this.state.x+60, width: cam1.width-(this.state.x+60), height: cam1.height, background:"black"}}>
        </div>
      <div id="pongBall"tabIndex="1"  onKeyDown={this.changeY} style={style}>
      </div>
      </div>
    );
  }
}