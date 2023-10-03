    $(document).ready(function(){
        $(".menu-button").hover(function (){
            $(this).animate({
                height: "+=30px",
                width: "+=20px"
            });
            $(".menu-link").animate({
                margin: "+=15px auto"
            });
        }, 
        function() {
            $(this).css("border", "0px");
            $(this).animate({
                height: "-=30px",
                width: "-=20px"
            });
            $(".menu-link").animate({
                margin: "-=15px auto"
            });
        });

        $(".welcome-menu").hover(function(){
            $(this).animate({
                height: "+=50px",
                opacity: "0.8"
            });
        },
        function(){
            $(this).animate({
                height: "-=50px",
                opacity: "1"
            });
                
        });

        $(function(){
            $("#name-table").draggable();
        });
    });

    function ageFunction(){
        document.getElementById("age").innerHTML = Math.floor(1 + Math.random()*66);
        document.getElementById("age2").innerHTML = Math.floor(1 + Math.random()*66);
    }

    function surNameFunction(){
        var names = ["Adrian", "Adam", "Anton", "Amanda", "Torsten"];
        document.getElementById("name1").innerHTML = names[Math.floor(Math.random()*5)];
        document.getElementById("name2").innerHTML = names[Math.floor(Math.random()*5)];
    }

    function lastNameFunction(){
        var names = ["Boman", "Andersson", "Westling", "Larsson", "Fredriksson"];
        document.getElementById("lastName1").innerHTML = names[Math.floor(Math.random()*5)];
        document.getElementById("lastName2").innerHTML = names[Math.floor(Math.random()*5)];
    }

    function menuPicture(){

        var images = ["pizza1.jpg", "pizza3.jpg", "pizza2.jpg"];
        var pic = document.getElementById("pizza-pic-first");

        pic.src = images[Math.floor(Math.random()*3)];
    }

    function blurPicture(){
        document.getElementById("pizza-pic-first").style.opacity = 0.5;
    }

    function focusPicture(){
        document.getElementById("pizza-pic-first").style.opacity = 1;
    }
    
    function onHoverPicture(){
        document.getElementById("pizza-pic-second").src = "pizza2.jpg";
    }

    function onLeavePicture(){
        document.getElementById("pizza-pic-second").src = "pizza1.jpg";
    }

    setInterval(menuPicture, 5000);
