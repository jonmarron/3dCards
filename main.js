document.addEventListener('DOMContentLoaded', function(){
    
    let listOfPages = [
        {
          index: 0,
          url: "https://www.codepen.io"
        },
        {
          index: 1,
          url: "https://www.css-tricks.com"
        },
        {
          index: 2,
          url: "https://blog.codepen.io/radio/"
        },
        {
          index: 3,
          url: "https://uxpodcast.com/"
        }
      ];
      
      let iframeContainer = document.querySelector(".viewer");
      
      for (let i of listOfPages) {
        iframeContainer.innerHTML += `<iframe src="${i.url}" frameborder="0" width="100%" height="100%"></iframe>`;
      }
    
})