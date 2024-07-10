<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Movie Ticketing System</title>

</head>

<body>
    <div class="banner">
        <div class="navbar">
            <img src="./images/Vector.png" alt="" class="logo">
        </div>
    </div>



    <section class="product"> 
        <h2 class="product-category">Now Showing</h2>
        <button class="pre-btn"><img src="images/Chevron_right.png" alt=""></button>
        <button class="nxt-btn"><img src="images/Chevron_right.png" alt=""></button>
        <div class="product-container">

            <div class="product_card"  movieName = "movie-1">
                <div class="product-image">
                    <img src="images/frozen2.jpg" class="product-thumb" alt="">
                    <img src="images/schedule.png" class="product-timer" alt="">
                    <h2 class="overlay-text">Frozen 2</h2>
                    <h2 class="overlay-subtext">1hr 43m</h2>
                    <h2 class="Gradient-placeholder">  </h2>
                </div>
            </div>


            <div class="product_card" movieName = "movie-2">
                <div class="product-image" >
                    <img src="images/ReadyPlayerOne.jpg" class="product-thumb" alt="">
                    <img src="images/schedule.png" class="product-timer" alt="">
                    <h2 class="overlay-text">Ready Player One</h2>
                    <h2 class="overlay-subtext">2hr 20m</h2>
                    <h2 class="Gradient-placeholder"></h2>
                </div>
            </div>
            <div class="product_card"  movieName = "movie-3">
                <div class="product-image">
                    <img src="images/KingKong.jpg" class="product-thumb" alt="">
                    <img src="images/schedule.png" class="product-timer" alt="">
                    <h2 class="overlay-text">King Kong</h2>
                    <h2 class="overlay-subtext">3hr 21m</h2>
                    <h2 class="Gradient-placeholder">  </h2>
                </div>
            </div>
            
            <div class="product_card"  movieName = "movie-4">
                <div class="product-image">
                    <img src="images/SpyXFamily.jpg" class="product-thumb" alt="">
                    <img src="images/schedule.png" class="product-timer" alt="">
                    <h2 class="overlay-text">Spy X Family</h2>
                    <h2 class="overlay-subtext">1hr 50m</h2>
                    <h2 class="Gradient-placeholder">  </h2>
                </div>
            </div>

            <div class="product_card" movieName = "movie-5">
                <div class="product-image">
                    <img src="images/Transformers.jpg" class="product-thumb" alt="">
                    <img src="images/schedule.png" class="product-timer" alt="">
                    <h2 class="overlay-text">Transformers</h2>
                    <h2 class="overlay-subtext">2hr 45m</h2>
                    <h2 class="Gradient-placeholder">  </h2>
                </div>>
            </div>

            <div class="product_card" movieName = "movie-6">
                <div class="product-image">
                    <img src="images/JurassicPark.jpg" class="product-thumb" alt="">
                    <img src="images/schedule.png" class="product-timer" alt="">
                    <h2 class="overlay-text">Jurassic Park</h2>
                    <h2 class="overlay-subtext">2hr 2m</h2>
                    <h2 class="Gradient-placeholder">  </h2>
                </div>
            </div>

            <div class="product_card" movieName = "movie-7">
                <div class="product-image">
                    <img src="images/Rango.jpg" class="product-thumb" alt="">
                    <img src="images/schedule.png" class="product-timer" alt="">
                    <h2 class="overlay-text">Rango</h2>
                    <h2 class="overlay-subtext">1hr 47m</h2>
                    <h2 class="Gradient-placeholder">  </h2>
                </div>
            </div>

            <div class="product_card" movieName = "movie-8">
                <div class="product-image">
                    <img src="images/Ted.jpg" class="product-thumb" alt="">
                    <img src="images/schedule.png" class="product-timer" alt="">
                    <h2 class="overlay-text">Ted</h2>
                    <h2 class="overlay-subtext">1hr 46m</h2>
                    <h2 class="Gradient-placeholder">  </h2>
                </div>
            </div>

            <div class="product_card" movieName = "movie-9">
                <div class="product-image">
                    <img src="images/Cars3.jpg" class="product-thumb" alt="">
                    <img src="images/schedule.png" class="product-timer" alt="">
                    <h2 class="overlay-text">Cars 3</h2>
                    <h2 class="overlay-subtext">1hr 49m</h2>
                    <h2 class="Gradient-placeholder">  </h2>
                </div>
            </div>
        </div>
    </section>

    <div class = "movie-preview" >
        <?php function getmovie($movienum){ ?>
        <div class = "preview" movieTarget = "movie-<?php echo $movienum ?>">
            <i class="fas fa-xmark"></i>
            <div class = "preview_img_container">
                    <img src="images/<?php
                    switch($movienum){
                        case 1: echo"frozen2.jpg";
                            break;
                        case 2: echo"ReadyPlayerOne.jpg";
                            break;
                        case 3: echo"KingKong.jpg";
                            break;
                        case 4: echo"SpyXFamily.jpg";
                            break;
                        case 5: echo"Transformers.jpg";
                            break;
                        case 6: echo"JurassicPark.jpg";
                            break;
                        case 7: echo"Rango.jpg";
                            break;
                        case 8: echo"Ted.jpg";
                            break;
                        case 9: echo"Cars3.jpg";
                            break;
                    }
                    ?>" alt="">
                    <h2 class = "preview_gradient"> </h2>
            </div>
            
            <div class="form_container">
                <form action="action.php">
                    <div class = "room_select">
                        <select name = "cinema_room" id="cinema_room" >
                            <option value="">Choose Cinema Room</option>
                            <?php for($i=1;$i<5;$i++){?>
                   <option value="<?php echo $i?>" >Cinema Room <?php echo $i?></option>
                        <?php } ?>
                        </select>
                        
                        <select id="time_slot">
                            <option value="">Choose Time Slot</option>
                            <?php for($i=1;$i<5;$i++){?>
                                <option value="<?php echo $i?>:00pm"><?php echo $i?>:00pm</option>
                   <?php } ?>
                        </select>
                    </div>
                    


                    <div class="screen_container"> SCREEN </div>

                    

                    <div class = "seat"> <!--Palitan nalang values ng seats thanks so much, pwede niyo loop if ever-->
                        <!--Although wag niyo na palitan yung css if weird tignan pag hindi complete yung seats(hindi pantay ganon), ganon talaga wahahhaha-->
                        <?php for($i=0;$i<8;$i++){?>
                        <input type="checkbox" name = "seat" value = "seat-1" class = "checkbox">
                        <input type="checkbox" name = "seat" value = "seat-2" class = "checkbox">
                        <input type="checkbox" name = "seat" value = "seat-3" class = "checkbox">
                        <input type="checkbox" name = "seat" value = "seat-4" class = "checkbox">
                        <br><?php }?>
                    </div>
                    
                    <div class = "seat_2">
                   
                    <?php for($i=0;$i<8;$i++){?>
                        <input type="checkbox" name = "seat" value = "seat-1" class = "checkbox">
                        <input type="checkbox" name = "seat" value = "seat-2" class = "checkbox">
                        <input type="checkbox" name = "seat" value = "seat-3" class = "checkbox">
                        <input type="checkbox" name = "seat" value = "seat-4" class = "checkbox">
                        <br><?php }?>
                        
                    </div>
                    <div class="dash_line"></div>
                    <div class="ticket_container">

                        <h3>Seat Information</h3>
                        <hr>
                        <p>Movie  : (movie title) </p><br>
                        <p>Time   :</p><p class = "selectedSlot"></p><br>
                        <p>Tickets:</p><p id = "selectedId"></p><br>
                        <p>Cinema Room:</p> <p class = "selectedRoom"></p><br>
                        <p>Seats  :</p><br>
                        <p>Total  : (price)</p>
                        <button>Book</button>

                        <div class="legends"> <p>Available</p></div>
                        <div class="legends selected"> <p>Selected</p></div>
                        <div class="legends sold"> <p>Sold</p></div>
                    </div>
                </form>
            </div>
        </div>
        <?php } ?>
        <?php getmovie(1);
              getmovie(2);
              getmovie(3);
              getmovie(4);
              getmovie(5);
              getmovie(6);
              getmovie(7);
              getmovie(8);
              getmovie(9);?>
        
        </div>



    </div>
    <script src="pop_up_logic.js"></script>
    <script src="update_select_item.js"></script>
    <script src="script.js"></script>
</body>
</html>