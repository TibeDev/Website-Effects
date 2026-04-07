# &lt;/WEBSITE EFFECT&gt;

<br>

## //For what is this?

These will be effects that I made myself just to practice my front-end skills. So alot of these will be copy's of already existing ones or unique effects.

## //Can I use these effects? And how?

Of course you can!\
Instructions down below!

<br>

# &lt;/CURRENT EFFECTS&gt;

## //Text scramble
1) You give your element with the text content a class called "scramble.
   
    ```HTML
    <span class="scramble"></span>
    ```
    
3) You add data called data-words="Word1, Word2". <br>
Note that between each word needs to be a comma (,) to define a new word. <br>
You can also just put one word. Then it wil just scramble that one word.

    ```HTML
    <span class="scramble" data-words="Word1 , Word2"></span>
    ```
   
5) You add data called data-interval="1500". <br>
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
7) Quick note if your text is centered there could be some visual problems with the effect. It will still work but if your words have a big difference in length it might cause some visual problems if your text is centered.
## Demo

You can view the effects [here](https://tibedev.github.io/Website-Effects/)
