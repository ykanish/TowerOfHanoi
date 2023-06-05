var Node = function(_content) {
    this.content = _content;
    this.next = null;
    this.last = null;
    return this;
  }
  
  var Stack = function(_content) {
    this.top = null;
    this.bottom = null;
    this.length = 0;
    return this;
  }
  
  Stack.prototype.push = function(_content) {
  
    var node = new Node(_content);
    node.content = _content;
  
    if (this.bottom == null) {
      this.bottom = node;
      this.top = this.bottom;
      this.length++;
      return this;
    }
    else {
      node.last = this.top;
      this.top.next = node;
      this.top = node;
      this.length++;
      return this;
    }
  
  }
  
  Stack.prototype.pop = function() {
    if (this.bottom == null) {
      alert('Stack is empty.');
      return false;
    }
    if (this.bottom == this.top) {
      this.bottom = null;
      var val = this.top;
      this.top = null;
      this.length = 0;
      // return this.top;
      return val;
    } else {
      var popped = this.top;
      this.top = this.top.last;
      this.top.next = null;
      this.length--;
      return popped;
    }
  
  
  }
  
  Stack.prototype.toString = function() {
    var string = '';
    var n = this.bottom;
  
    while (n != null) {
      string += n.content ;
      n = n.next;
    }
    return string;
  }
  
  Stack.prototype.reverse = function(str) {
    var newString = "";
      for (var i = str.length - 1; i >= 0; i--) {
          newString += str[i];
      }
      return newString;
  }
  
  
  
  function insertDisks(i) {
    i = parseInt(document.getElementById('uInput').value);
    if (i > 7) {
      alert('Input must only be less than 7');
      document.getElementById('uInput').value = '';
      document.getElementById('uInput').focus();
      return false;
    }
    for (var t = i; t > 0 ; t--) {
    stackA.push(t);
    }
    document.getElementById('output').innerHTML = 'Towers: Stack A :' + stackA.toString() + ' Stack B: ' + stackB.toString() +' Stack C: ' + stackC.toString();
  
  }
  
  var stackA = new Stack();
  var stackB = new Stack();
  var stackC = new Stack();
  
  function aTob() {
    var n = parseInt(stackA.top.content);
    stackA.pop(n);
    stackB.push(n);
  
    document.getElementById('output').innerHTML = 'Towers: Stack A :' + stackA.toString() + ' Stack B: ' + stackB.toString() +' Stack C: ' + stackC.toString();
    stackB.reverse(n);
  }
  
  
  function aToc() {
    var n = parseInt(stackA.top.content);
    stackA.pop(n);
    stackC.push(n);
  
    document.getElementById('output').innerHTML = 'Towers: Stack A :' + stackA.toString() + ' Stack B: ' + stackB.toString() +' Stack C: ' + stackC.toString();
    stackC.reverse(n);
  }
  
  
  function bToa(){
    var n = parseInt(stackB.top.content);
    stackB.pop(n);
    stackA.push(n);
  
    document.getElementById('output').innerHTML = 'Towers: Stack A :' + stackA.toString() + ' Stack B: ' + stackB.toString() +' Stack C: ' + stackC.toString();
    stackA.reverse(n);
  }
  
  function bToc(){
    var n = parseInt(stackB.top.content);
    stackB.pop(n);
    stackC.push(n);
  
    document.getElementById('output').innerHTML = 'Towers: Stack A :' + stackA.toString() + ' Stack B: ' + stackB.toString() +' Stack C: ' + stackC.toString();
    stackC.reverse(n);
  }
  
  
  function cToa(){
    var n = parseInt(stackC.top.content);
    stackC.pop(n);
    stackA.push(n);
  
    document.getElementById('output').innerHTML = 'Towers: Stack A :' + stackA.toString() + ' Stack B: ' + stackB.toString() +' Stack C: ' + stackC.toString();
    stackA.reverse(n);
  }
  
  function cTob(){
    var n = parseInt(stackC.top.content);
    stackC.pop(n);
    stackB.push(n);
  
    document.getElementById('output').innerHTML = 'Towers: Stack A :' + stackA.toString() + ' Stack B: ' + stackB.toString() +' Stack C: ' + stackC.toString();
    stackB.reverse(n);
  }
  
  function runHanoi(c, A, C, B) {
      console.log(c);
      if (c >= 1) {
        runHanoi(c-1, A, B, C);
        C.push(A.pop().content);
        num++;
        document.getElementById('output1').innerHTML += num.toString() + " moves<br>"
        runHanoi(c-1, B, C, A);
  
        document.getElementById('output1').innerHTML += 'Towers: Stack A: ' + stackA.toString() + ' Stack B: ' + stackB.toString() + ' Stack C: ' + stackC.toString() + '<br>';
      }
      return;
  }
  function startHanoi(c,A,C,B) {
    runHanoi(c,A,C,B);
    document.getElementById('output1').innerHTML += "<br>Complexy is 2^n<br>";
    document.getElementById('output1').innerHTML += "The time to solve 64 disk is 1.84467440 * 10^19 or 18446744073709599999<br>";
    document.getElementById('output1').innerHTML += "(In theory this would take an eternity to solve 64 disk at one second intervals).";
  }