---
layout: main
title: receipt printer rpg | pg 11
stylesheet: /css/nobleprinter.css
script: /js/nobleprinter.js
---

<div class="container" id="sakura">
	<div class="sakura"><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
		<span></span><span></span><span></span><span></span><span></span>
	</div>
</div>

<section id="selection-welcome">

<p><img src="/images/choice-noble.png">

Excellent, your life of service begins now.

</section>

<section id="selection-now-we-wait" class="hidden">

<p>You wait for your first print job to come in...

</section>

<section id="orders" class="hidden" hidden>
<div class="box orderbox" id="order1">
  <h1>Order #1</h1>
  <p id="response">Hello! I'd love a cute sticker please :)</p>

  <div class="instructions" id="instructions">
    <span class="emoji">️✏️</span>
    Return to your paper zine!<br>
    Turn to page X and follow the instructions.
  </div>
</div>

<div class="box narrow compbox" id="compbox1">
  <form id="completion1">
    <h2>Completion code:</h2>
    <label>
      <input type="text" min="0" maxlength="4" name="code" id="completioncode"/>
    </label>
    <input type="submit" value="next order" focused/>
  </form>
  <span id="message"></span>
</div>

</section>
<div id="bg" class="hidden"></div>