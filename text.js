
<!DOCTYPE html>
<html>

<body>
<style>
.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropup {
  position: relative;
  display: inline-block;
}

.dropup-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropup-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropup-content a:hover {background-color: #ccc}

.dropup:hover .dropup-content {
  display: block;
}

.dropup:hover .dropbtn {
  background-color: #2980B9;
}
</style>

<div class="dropup">
    <button class="dropbtn">Color</button>
    <div class="dropup-content">
      <a href="#" onclick="colorred()">Red</a>
      <a href="#" onclick="colorblue()">Blue</a>
      <a href="#"onclick="colorgreen()">Green</a>
      <a href="#"onclick="w">Black</a>
    </div>
  </div>
  
  <div class="dropup">
    <button class="dropbtn">Back Ground Color</button>
    <div class="dropup-content">
      <a href="#" onclick="bcolorred()">Red</a>
      <a href="#" onclick="bcolorblue()">Blue</a>
      <a href="#"onclick="bcolorgreen()">Green</a>
      <a href="#"onclick="bw()">White</a>
    </div>
  </div>
  
  
  <div class="dropup">
    <button class="dropbtn">Size</button>
    <div class="dropup-content">
      <a href="#" onclick="size10()">10</a>
      <a href="#" onclick="size15()">15</a>
      <a href="#"onclick="size20()">20</a>
      <a href="#" onclick="size25()">25</a>
      <a href="#" onclick="size30()">30</a>
      <a href="#"onclick="size35()">35</a>
      <a href="#" onclick="size40()">40</a>
      <a href="#" onclick="size45()">45</a>
      <a href="#"onclick="size50()">50</a>
    </div>
  </div>
  
  
  
  <div class="dropup">
    <button class="dropbtn">Font</button>
    <div class="dropup-content">
      <a href="#" onclick="a()">Arial</a>
      <a href="#" onclick="v()">Verdana</a>
      <a href="#"onclick="i()">Impact</a>
      <a href="#"onclick="p()">Roboto</a>
      <a href="#"onclick="l()">Lobster</a>
    </div>
  </div>

  <a class="dropbtn" onclick="link()">Add Link</a>
  <a class="dropbtn" onclick="img()">Add Image</a>
  <a class="dropbtn" href="#links">Goto Links/Images</a>
  <a class="dropbtn" onclick="wordcount()">Word Count</a>
  <div class="dropup">
    <button class="dropbtn">Save As</button>
    <div class="dropup-content">
      <a onclick="saveFile()">.txt</a>
    </div>
  </div>
  <a class="dropbtn" onclick="window.print()">Print</a>
  <a class="dropbtn" style="float:right" target="_blank" href="https://www.pranavsai.ml">About Us</a>
  <br>
  <textarea  rows="100" cols="179" id="demo"></textarea>
  <br>
  <h2 id="links">Links/Images:</h2>
  <br>
  <script src="text.js"></script>
</body>
</html>
