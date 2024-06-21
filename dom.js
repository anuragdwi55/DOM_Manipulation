//Examine the document object
//console.dir(document);
// console.log(document.domain);
// console.log(document,URL);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.links);
// console.log(document.images);

// ----------Get element by ID-------------

//  var headerTitle = document.getElementById('header-title');
//  var header = document.getElementById('main-header');

//  console.log(headerTitle);
//  headerTitle.textContent='hello';
//  headerTitle.innerText='goodbye'; // it actually pays attention to styling , textContent not
//  console.log(headerTitle.innerText);
//console.log(headerTitle.textContent);
// headerTitle.innerHTML='<h3>hello world</h3>'
// headerTitle.style.borderBottom='solid 3px #000'
// header.style.borderBottom='solid 13px #000'

//------------ GETELEMENTSBYCLASSNAME--------------

// var items= document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='hello item';
// items[1].style.fontWeight= 'bold';
// items[1].style.backgroundColor='yellow';

//items.style.backgroundColor='yellow'; // it gives error because it is list of items and we can't change style of all all at once we have to iterate (using for loops) to do so

// BY normal for loop

// for(var i=0;i<items.length;i++)
//     {
//         items[i].style.backgroundColor="gray";

//     }
// note- Common Mistake: Using getElementsByClassName or getElementsByTagName
// Both getElementsByClassName and getElementsByTagName return a HTMLCollection, not an array, and HTMLCollection does not have a forEach method.So we have to firstly convert it into Array

// using for each loop

// const itemsArray = Array.from(items);

// itemsArray.forEach((element) => element.style.backgroundColor='gray');

//----GETELEMENTSBYTAGNAME........

// var li= document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='hello item';
// li[1].style.fontWeight= 'bold';
// li[1].style.backgroundColor='yellow';
// for(var i=0;i<li.length;i++)
//     {
//         li[i].style.backgroundColor="gray";

//     }

//----- QuerySelector.....

// var header = document.querySelector('#main-header')
// header.style.borderBottom='solid 4px red';

// var input= document.querySelector('input');
// input.value='hellow world';

// var submit=document.querySelector('input[type="submit"]');
// submit.value='send';

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='coral';

//----QUERYSELECTORALL-------

//

//------------- traversing the dom------------------

// var itemList = document.querySelector("#items");

//------------ parentNode----------

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// -----------parentElement === parenNode----------

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// -----childNodes== also include line breaks-------

// console.log(itemList.childNodes);
//

// -----------children == not include line breaks-----------
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

//----- FirstChild == also includes line breaks  so no use------

// console.log(itemList.firstChild);

//--------firstElementChild == not includes line break -------

// console.log(itemList.firstElementChild);

// -----we also have lastChild and lastElemntChild which as same as above and give last child------

//----nextSibling--------

// console.log(itemList.nextSibling);

//----nextElementSibling--------

//----previousSilbling and previousElementSibling----------

//-----------createElement-----------

// var newDiv=document.createElement('div');
// adding class to new div
// newDiv.className='hello';

// ------adding id to newDiv----------

// newDiv.id='hello1';

// ----------adding attribute to newDiv-----------

// newDiv.setAttribute('title','hello div');

//------ create text node--------

// var newDivText=document.createTextNode('hello world');

// ===========add text to newDiv===========

// newDiv.appendChild(newDivText);

// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// newDiv.style.fontSize='30px';
// console.log(newDiv);
// container.insertBefore(newDiv,h1);

//==========Adding Event Listeners==============

// var button=document.getElementById('button').addEventListener(
//     'click',buttonClick);

// function buttonClick(e){
//     // console.log('button clicked');
//     // document.getElementById('header-title').textContent='changed';
//     // document.querySelector('#main').style.backgroundColor='coral';
//     console.log(e);
//     console.log(e.type);
//     console.log(e.clientX); // gives click distance from window's x-axis
//     console.log(e.clientY);//gives click distance from window's y-axis
//     console.log(e.offsetX);// gives click distance from object which is clicked x-axis
//     console.log(e.offsetY); //gives click distance from object which is clicked y-axis
//     console.log(e.altKey); //gives true or false whether we clicked together by pressing alt key or not

// }

//========Mouse Actions=====================

var button = document.getElementById('button');
var box=document.getElementById('box');
//button.addEventListener("click", runEvent);
//button.addEventListener("dblclick", runEvent); // for Doubleclick only
//button.addEventListener("mousedown", runEvent);

// box.addEventListener('mouseenter',runEvent);
//box.addEventListener('mouseleave',runEvent);
  // box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);
//box.addEventListener('mousemove',runEvent);
var inputItem=document.querySelector('input[type="text"]');
var form=document.querySelector('form');

// 




function runEvent(e) {
  console.log(`Event type ${e.type}`);
  console.log(e.target.value);
  output.innerHTML='<h3> '+e.target.value+' </h3>';
  // output.innerHTML='<h3> MouseX: '+e.offsetX+' </h3> <h3>MouseY: '+e.offsetY+'</h3>';
}
