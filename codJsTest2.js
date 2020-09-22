const videos = [
  {
    id: "7yLxxyzGiko",
    title: "Kittens walk with a tiny chicken",
    thumbnail: "https://img.youtube.com/vi/7yLxxyzGiko/maxresdefault.jpg",
  },
  {
    id: "rS6cvjFXg9s",
    title: "Cute kitten named Garfield washes its paws and prepares to sleep.",
    thumbnail: "https://img.youtube.com/vi/rS6cvjFXg9s/maxresdefault.jpg",
  },
  {
    id: "BFNekjEgvuk",
    title: "Kitten sleeps sweetly with the Chicken 🐥",
    thumbnail: "https://img.youtube.com/vi/BFNekjEgvuk/maxresdefault.jpg",
  },
  {
    id: "te1fHMaw4UY",
    title: "White kitten and white tiny bunnies 🐰 | It's so Сute! 🥰",
    thumbnail: "https://img.youtube.com/vi/te1fHMaw4UY/maxresdefault.jpg",
  },
  {
    id: "MFyUZqSknvw",
    title: "Kittens meets and walk with a cute white bunny",
    thumbnail: "https://img.youtube.com/vi/MFyUZqSknvw/maxresdefault.jpg",
  },
  {
    id: "hlajmIPiphk",
    title: "Mom Cat playing and talking to her Cute Meowing baby Kittens",
    thumbnail: "https://img.youtube.com/vi/hlajmIPiphk/maxresdefault.jpg",
  },
  {
    id: "Cz47GimSxIc",
    title: "Funny Kitten wags its tail like a Puppy",
    thumbnail: "https://img.youtube.com/vi/Cz47GimSxIc/maxresdefault.jpg",
  },
  {
    id: "RmpuhbdnAfQ",
    title: "Kitty Coco and her Sleepy younger brother 🥰",
    thumbnail: "https://img.youtube.com/vi/RmpuhbdnAfQ/maxresdefault.jpg",
  },
];
// array id elements
const idElement = [];
//element
let address = "https://www.youtube.com/embed/";
let iframe = document.createElement("iframe");
let div = document.createElement("div");
let body = document.querySelector("body");
let container = document.querySelector(".container");
let container_show = document.querySelector(".container-show");
let container_list = document.querySelector(".container-list");

for (let i = 0; i < videos.length; i++) {
  // let iframe=document.createElement("iframe")
  let img = document.createElement("img");
  let div = document.createElement("div");
  // div.append(iframe)
  div.append(img);
  container_list.append(div);
  //iframe.src=address+videos[i].id
  img.src = videos[i].thumbnail;
  //iframe.width="170px"
  //iframe.height="120px"
  img.id = 100 + i;
  idElement[i] = img.id;
}
container_list.style.background = "red";

div.append(iframe);
container_show.append(div);
//iframe.src=address+videos[2].id
iframe.width = "3000px";
iframe.height = "1500px";
let id=idElement[i]
let im0 = document.querySelector("#id");
im0.addEventListener("onClick",function (){
  let p=document.createElement("p")
  let div =document.createElement("div")
  div.append(p)
  container_show.append(div)
  
});
const myFunction=function(){
  iframe.src = address + videos[0].id;

}