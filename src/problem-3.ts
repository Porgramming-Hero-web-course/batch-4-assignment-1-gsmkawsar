{

    // problem 3
    function countWordOccurrences(words: string, searchItem: string): void {
      const wordArray: string[] = words.split(" ");
  
      let count = 0;
      for (const word of wordArray) {
        if (word === searchItem) {
          count++;
        }
      }
      console.log(count);
    }
  
    countWordOccurrences("I love typescript", "typescript");
  }