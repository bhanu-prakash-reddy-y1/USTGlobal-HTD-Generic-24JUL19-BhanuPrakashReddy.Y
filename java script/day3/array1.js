var games=['cricket','football','badminton','chess','caroms'];
games.forEach(function(v,i){
    if(v.length>5)
    console.log('index = '+i+' value = '+v);
})
var cricket=['virat kohli','rohit sharma','shikar dhawan','ms dhoni','rishab pant','dinesh karthick','jasprith bumrah'];
cricket.forEach(function(v,i){
    console.log('number = '+i+' player = '+v);
});
console.log('games is an array = '+Array.isArray(games));
console.log('cricket is an array ='+Array.isArray(cricket));
console.log(games.indexOf('chess',2));
console.log(cricket.indexOf('ms dhoni'));
console.log(games.push('mobile games'));
console.log(cricket.push('shreyash iyyar'));
console.log(cricket.pop());
console.log(games.pop());
console.log(cricket.unshift('chahal'));
console.log(games.unshift('pubg'))
console.log(cricket);
console.log(games);
console.log(games.splice(0,2,'8 ball pool'));
console.log(cricket.splice(0,2,'rahul'));
console.log(games.slice(0,2));
console.log(games); 
console.log(cricket);
console.log(cricket.join('-'));
console.log(games.join('-'));
console.log(cricket.indexOf('rohit sharma',0))
console.log(games.indexOf('chess'));
var game = games.map(function(v){
    return v+" hi";
})
console.log(game);
var cric = cricket.filter(function(v){
    var vv= v.length>9;
        return vv
        11;
    
});
console.log(cric);
console.log('-------------------Strings---------------------');
var string = 'BHANU PRAKASH REDDY Y';
var lowercase = string.toLowerCase();
console.log(lowercase)
var uppercase = lowercase.toUpperCase();
console.log(uppercase);
console.log(uppercase.charAt(7));
console.log(lowercase.indexOf('r',3));
console.log(uppercase.concat(lowercase));
console.log(string.includes('NU'));
console.log(string.replace('NU','nu'));
console.log(uppercase.split('A',4));
console.log(uppercase.search('NU'));
console.log(lowercase.substr(4,5));
var string1 = 'ram bupal reddy y';
var lowercase = string.toLowerCase();
console.log(lowercase)
var uppercase = lowercase.toUpperCase();
console.log(uppercase);
console.log(uppercase.charAt(7));
console.log(lowercase.indexOf('r',3));
console.log(uppercase.concat(lowercase));
console.log(string.includes('NU'));
console.log(string.replace('NU','nu'));
console.log(uppercase.split('A',4));
console.log(uppercase.search('NU'));
console.log(lowercase.substr(4,5))