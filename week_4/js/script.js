var count = 0
document.addEventListener("DOMContentLoaded",
  function (event){
    function sayHello(event){
      console.log(event);
      this.textContent = "Said it!"
      var name = document.getElementById("name").value
      var message = "<h2>Hello " + name + "!</h2>";
    
      //document.getElementById("content").textContent = message;
      document.getElementById("content").innerHTML = message;
    
      if(name === "student" && count === 0){
        console.log(count)
        var title = document.querySelector("#title").textContent;
        title += " for Students only!";
        document.querySelector("#title").textContent = title;
        count++;
      }
    
    }
    
    //document.querySelector("button"),addEventListener("click",sayHello)
    //document.querySelector("button").onclick = sayHello;
    document.querySelector("body").addEventListener("mousemove", function (event){
        console.log("x is: " + event.clientX);
        console.log("y is: " + event.clientY);
      }
  );

  }
);

