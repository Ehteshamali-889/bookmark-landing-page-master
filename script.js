
    function display(item){
      console.log("called",item);
      var first=document.getElementById("first");
      var second=document.getElementById("second");
      var third=document.getElementById("third");
      var firstbtn=document.getElementById("firstbtn");
      var secondbtn=document.getElementById("secondbtn");
      var thirdbtn=document.getElementById("thirdbtn");
      var firstspan=document.getElementById("firstspan");
      var secondspan=document.getElementById("secondspan");
      var thirdspan=document.getElementById("thirdspan");
      if(item==1){
        first.style.display="flex";
        second.style.display="none";
        third.style.display="none";
        firstbtn.classList.toggle("active");
        secondbtn.classList.toggle("active", false);
        thirdbtn.classList.toggle("active", false);

        firstspan.classList.toggle("active");
        secondspan.classList.toggle("active", false);
        thirdspan.classList.toggle("active", false);
        
      }

      if(item==2){
        first.style.display="none";
        second.style.display="flex";
        third.style.display="none";
        firstbtn.classList.toggle("active", false);
        secondbtn.classList.toggle("active");
        thirdbtn.classList.toggle("active", false);
        firstspan.classList.toggle("active",false);
        secondspan.classList.toggle("active");
        thirdspan.classList.toggle("active", false);
      }

      if(item==3){
        first.style.display="none";
        second.style.display="none";
        third.style.display="flex";
        firstbtn.classList.toggle("active", false);
        secondbtn.classList.toggle("active", false);
        thirdbtn.classList.toggle("active");
        firstspan.classList.toggle("active",false);
        secondspan.classList.toggle("active", false);
        thirdspan.classList.toggle("active");

      }
    }


    // Get references to the sections
    const faq1 = document.querySelector('#firstfaq');
    const firstpara = document.querySelector('.firstpara');

    // Get reference to the image inside the faq1 section
    const image = faq1.querySelector('img');
    let isRotated = false; // Initial state
    // Add a click event listener to the image
    image.addEventListener('click', function () {
        if (isRotated) {
          // Reset the styles to their original values
          image.style.transform = 'none';
          faq1.style.borderBottom = '1px solid var(--GrayishBlue)';
          firstpara.style.display = 'none';
        } else {
            // Apply the new styles
            image.style.filter = 'hue-rotate(90deg)';
            image.style.transform = 'rotate(180deg)';
            faq1.style.borderBottom = 'none';
            firstpara.style.display = 'block';
        }
      
        // Toggle the flag
        isRotated = !isRotated;
        
    });


    // Get references to the sections
    const faq2 = document.querySelector('#secondfaq');
    const secondpara = document.querySelector('.secondpara');

    // Get reference to the image inside the faq1 section
    const image2 = faq2.querySelector('img');
    let isRotated2 = false; // Initial state
    // Add a click event listener to the image
    image2.addEventListener('click', function () {
        if (isRotated2) {
          // Reset the styles to their original values
          image2.style.transform = 'none';
          faq2.style.borderBottom = '1px solid var(--GrayishBlue)';
          secondpara.style.display = 'none';
        } else {
            // Apply the new styles
            image2.style.filter = 'hue-rotate(90deg)';
            image2.style.transform = 'rotate(180deg)';
            faq2.style.borderBottom = 'none';
            secondpara.style.display = 'block';
        }
      
        // Toggle the flag
        isRotated2 = !isRotated2;
        
    });



    // Get references to the sections
    const faq3 = document.querySelector('#thirdfaq');
    const thirdpara = document.querySelector('.thirdpara');

    // Get reference to the image inside the faq1 section
    const image3 = faq3.querySelector('img');
    let isRotated3 = false; // Initial state
    // Add a click event listener to the image
    image3.addEventListener('click', function () {
        if (isRotated3) {
          // Reset the styles to their original values
          image3.style.transform = 'none';
          faq3.style.borderBottom = '1px solid var(--GrayishBlue)';
          thirdpara.style.display = 'none';
        } else {
            // Apply the new styles
            image3.style.filter = 'hue-rotate(90deg)';
            image3.style.transform = 'rotate(180deg)';
            faq3.style.borderBottom = 'none';
            thirdpara.style.display = 'block';
        }
      
        // Toggle the flag
        isRotated3 = !isRotated3;
        
    });



    // Get references to the sections
    const faq4 = document.querySelector('#fourthfaq');
    const fourthpara = document.querySelector('.fourthpara');

    // Get reference to the image inside the faq1 section
    const image4 = faq4.querySelector('img');
    let isRotated4 = false; // Initial state
    // Add a click event listener to the image
    image4.addEventListener('click', function () {
        if (isRotated4) {
          // Reset the styles to their original values
          image4.style.transform = 'none';
          faq4.style.borderBottom = '1px solid var(--GrayishBlue)';
          fourthpara.style.display = 'none';
        } else {
            // Apply the new styles
            image4.style.filter = 'hue-rotate(90deg)';
            image4.style.transform = 'rotate(180deg)';
            faq4.style.borderBottom = 'none';
            fourthpara.style.display = 'block';
        }
      
        // Toggle the flag
        isRotated4 = !isRotated4;
        
    });