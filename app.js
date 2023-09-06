let arr = [
  {
    dp: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFydmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFydmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1671718110228-a1d3f64163fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    story:
      "https://plus.unsplash.com/premium_photo-1692309812344-fde93f207437?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1692126240721-861e5a6b58da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1693672761919-d4cc6d20ab2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1693336429001-d0c5a162f05c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1693480478901-8eaaf6a1f12a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1693697117720-c5e098ecf350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    story:
      "https://plus.unsplash.com/premium_photo-1669842336799-36d654504274?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1693286206828-abf6e3fbec75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://plus.unsplash.com/premium_photo-1692809723256-c22861aad63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1693550345119-ec1c806d74c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1691731052418-c8fafc7031c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

let clutter = "";
let storiyan = document.querySelector("#storiyan");
let fullScreen = document.querySelector("#full-screen");

arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
  <img id="${idx}" src="${elem.dp}" alt="story">
</div>`;
  console.log(elem);
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
  //   console.log(`this is story${dets}`);
  let fullStory = arr[dets.target.id].story;
  console.log(fullStory);

  fullScreen.style.display = "block";
  fullScreen.style.backgroundImage = `url(${fullStory})`;

  setTimeout(() => {
    fullScreen.style.display = "none";
  }, 3000);
});
