      let output = document.getElementById("output");
      let input = document.getElementById("input");
      let handleCommands = () => {
        if (event.keyCode == 13) {
          output.innerHTML = ""
          let val = input.value;
          if (val == "shlek") {
            output.innerHTML = "Welcome lord!";
          } else if (val == "SYSTEM OVERRIDE") {
            output.innerHTML = "You have now unlocked admin features" ;
          } else {
            output.innerHTML = "ERROR: Unknown Command";
          }
        }
      }
      
      document.addEventListener("keydown", handleCommands)
