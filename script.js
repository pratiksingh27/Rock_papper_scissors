const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImg = document.querySelectorAll(".option_image");

// console.log(gameContainer, userResult, cpuResult, result, optionImg);

optionImg.forEach((image, index) => {
  image.addEventListener(
    "click",
    (e) => {
      image.classList.add("active");

      userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Wait...";

      //loop through each option image again
      optionImg.forEach((image2, index2) => {
        // console.log(index, index2)
        //if the clicked image is not active then remove it from the array and add to cpu result
        if (index !== index2 && !image2.classList.remove("active"));
        /*  let randomNumberCpu= Math.floor(Math.random() * 3 +1 );
                console.log(randomNumberCpu); */
      });

    //   gameContainer.classList.add("hello");
      gameContainer.classList.add("start");
      

      //set time out to delay the result calculation
      let time = setTimeout(() => {

        gameContainer.classList.remove("start");

        //get the source of the click option image
        let imageSrc = e.target.querySelector("img").src;
        //setting a user image tothe clicked option image
        userResult.src = imageSrc;
        //  console.log(imageSrc);

        //generate a random number between 0 to 2
        let randomNumberCpu = Math.floor(Math.random() * 3);
        // console.log(`CPU Result: ${randomNumberCpu}`);

        let cpuImg = [
          "images/rock.png",
          "images/paper.png",
          "images/scissors.png",
        ];
        //set the src attribute for the CPU image based on that random number generated above
        cpuResult.setAttribute("src", `${cpuImg[randomNumberCpu]}`);

        //assign letter value to cpu option(R for rock, P for papper, S fpr scissor)
        let cupValue = ["R", "P", "S"][randomNumberCpu];
        //assign a letter value to the click option(based on index)
        let userValue = ["R", "P", "S"][index];

        // create an object with all possible out come
        let outComes = {
          RR: "Draw",
          RP: "User Wons!!",
          RS: "Cpu Wons!!",
          PP: "Draw",
          PR: "Cpu Wons!!",
          PS: "User Wons!!",
          SS: "Draw",
          SP: "Cpu Wions!!",
          SR: "User Wons!!",
        };

        //look up the outcome value based on user and cpu option
        let outComeValue = outComes[cupValue + userValue];

        //display result
        result.textContent = `${outComeValue}`;
        // console.log(outComeValue);

        // console.log(cupValue,userValue);
      
    }, 2000);
});
});
