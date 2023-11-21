---
layout: main
title: receipt printer rpg | pg 11
stylesheet: /css/evilprinter.css
script: /js/evilprinter.js
---

<div id="fogcontainer">
  <div id="foglayer_01" class="fog">
    <div class="image01"></div>
    <div class="image02"></div>
  </div>
  <div id="foglayer_02" class="fog">
    <div class="image01"></div>
    <div class="image02"></div>
  </div>
  <div id="foglayer_03" class="fog">
    <div class="image01"></div>
    <div class="image02"></div>
  </div>
</div>

<div id="selection-welcome">
  <canvas id="canvas"></canvas>
  <div class="fog"></div>
  <div id="verywell">
    <p><img src="/images/choice-evil.png">
    <div id="welcome-message">
      <p>Very well.
      <p>Your reign of terror<br> begins now.
    </div>
  </div>
</div>

<section id="orders" class="hidden" hidden>
<div class="box orderbox" id="order1">
  <h1>Order #1</h1>
  <p id="response">Hiii, could you print the notes I took in class yesterday?</p>

  <div class="instructions" id="instructions">
    <p>
      <span class="emoji">️🔥</span>
      PAPER JAM TIME
      <span class="emoji">️🔥</span>
    </p>
    <p>
      Turn to page X in your paper zine and <br>
      CRUMPLE THE PAPER.
    </p>
  </div>
</div>

<div class="box narrow compbox" id="compbox1">
  <form id="completion1">
    <h2>Completion code:</h2>
    <label>
      <input type="number" min="0" maxlength="4" name="code" id="completioncode"/>
    </label>
    <input type="submit" value="next order" focused/>
  </form>
  <span id="message"></span>
</div>

</section>
<div id="bg" class="hidden"></div>