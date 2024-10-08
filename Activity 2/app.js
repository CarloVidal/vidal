const title =document.getElementById('song-title');
const artist =document.getElementById('artist-name');
const addbutton =document.getElementById('add-button');
const ul =document.getElementById('songlist');


addbutton.addEventListener('click',()=>{
    const newTitle = title.value;
    const newArtist = artist.value;
    
    //create element
    const p = document.createElement('p');
    const small= document.createElement('small')
    const div= document.createElement('div');
    const li = document.createElement('li');
    const button = document.createElement('button');
    li.append(p);
    li.append(small);
    li.append(button);
    
    //append to list
    ul.append(li)




    console.log(li);




 
    //set a value to the element
    p.innerHTML =newTitle;
    small.innerHTML = newArtist
    

    



    //add class to element
    p.classList.add('song-title');
    small.classList.add('artist-name');
    button.innerHTML = "DELETE"
    
    //create container

    
    window.alert(newTitle);



})
console.log(title,artist,addbutton)