class Sentence{
    constructor(data){
      this.data = data;
    }
    wordCount(){
      return this.data.split(' ').length;
    }
    hasLetter(letter){
      return this.data.indexOf(letter) !== -1;
    }
    letterCount(letter){
      let count = 0;
      for(let i = 0; i < this.data.length; i++){
        if(this.datat[i] === letter){
          count++;
        }
      }
      return count;
    }
    stats(){
      const obj = {};
      const wordArray = this.data.split(' ');
      wordArray.array.forEach( word => {
        if(obj[word] === undefined){
          obj[word]= 0;
        }
        obj[word]++;
      });
      return object;
    }
  }
  const data = window.prompt('enter a sentence', "This is a sentence");
  const s1 = new Sentence(userdata);
  console.log(s1.wordCount());
  console.log(s1.hasLetter('X');
  console.log(s1.hasLetter('q');
  console.log(s1.letterCount('e');
  console.log(s1.letterCount(' ');
  console.log(s1.stats());


  


