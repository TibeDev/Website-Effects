# &lt;/WEBSITE EFFECT&gt;

## //For what is this?

These will be effects that I made myself just to practice my front-end skills. So alot of these will be copy's of already existing ones or unique effects.

## //Can I use these effects? And how?

Of course you can!\
Instructions down below!

<br>

# &lt;/CURRENT EFFECTS&gt;

## //Text scramble
1) You give your element with the text content a class called "scramble".
   
    ```HTML
    <span class="scramble"></span>
    ```
    
3) You add data called " data-words='Word1, Word2' ". <br>
Note that between each word needs to be a comma (,) to define a new word. <br>
You can also just put one word. Then it wil just scramble that one word.

    ```HTML
    <span class="scramble" data-words="Word1 , Word2"></span>
    ```
   
5) You add data called " data-interval='1500' ". <br>
   This is the amount of time before it scrambles to the next word.
   
    ```HTML
    <span class="scramble" data-words="Word1 , Word2" data-interval="1500"></span>
    ```

6) Last step you reference your scramble.js at the bottom of your body.
    ```HTML
    <body>
        <span class="scramble" data-words="Word1 , Word2" data-interval="1500"></span>
    
        <script src="scramble.js"></script>
    </body>
    ```
!!!Quick note if your text is centered there could be some visual problems with the effect. It will still work but if your words have a big difference in length it might cause some visual problems if your text is centered.!!!

## //Cursor
1) You give your div you want to be a cursor a class called "cursor".
   
   ```HTML
   <div class="cursor"></div>
   <div class="cursor"></div>
   ```
   **Why mutliple?** <br>
   The system is made so you can have multiple cursors at one time. Go look at the [demo](https://tibedev.github.io/Website-Effects/) to see how this can look.

2) You add data called " data-duration='500' ". <br>
   This the smoothness of the movement. <br>
   Basicly 0 means the cursor will directly follow the mouse and 500 will make it take some time.
   
   ```HTML
   <div class="cursor" data-duration="0"></div>
   <div class="cursor" data-duration="500"></div>
   ```
3) Then You give your cursor(s) some styling.<br>
You can use the CSS I made or make your own. <br>
Just add a id with whatever name you want.

   ```HTML
   <div class="cursor" id="cursor" data-duration="0"></div>
   <div class="cursor" id="cursorOutline" data-duration="500"></div>
   ```

   ```CSS
   #cursor {
     width: 6px;
     aspect-ratio: 1; /*Makes width and height the same*/
   
     border: 2px solid #bcb9b2;
     border-radius: 50%;
   }

   #cursorOutline {
     width: 55px;
     aspect-ratio: 1; /*Makes width and height the same*/
   
     border: 2px solid rgba(70, 70, 70, 0.463);
     border-radius: 50%;
   }
   ```

5) Last step you reference your cursor.js at the bottom of your body.
   ```HTML
    <body>
        <div class="cursor" id="cursor" data-duration="0"></div>
        <div class="cursor" id="cursorOutline" data-duration="500"></div>
   
        <script src="cursor.js"></script>
    </body>
    ```
## Demo

You can view the effects [here](https://tibedev.github.io/Website-Effects/)
