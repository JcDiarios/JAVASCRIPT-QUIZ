const dynastyReign = [
    {
        "San Dynasty": "MXLI"
    }, 
    {
        "Viloria Dynasty": "MCCCIIII"
    }, 
    {
        "Tan Dynasty": "MCCCXCVIII"
    },
    {
        "Bon Dynasty": "MCDXLV"
    }, 
    {
        "Maiko Dynasty": "MDCLXIV"
    },
    {
        "Paul Dynasty": "MCMXLIX"
    },
    {
        "Andre Dynasty": "MMMXICX"
    }
  ];
  
  function longestDynasty(dynastyReign) {
    if (dynastyReign.length === 0) {
      return "No Data"
      };
  
    let longestReign = 0;
    let longestDynastyKey = '';
  
    for (let i = 0; i < dynastyReign.length; i++) {
      const dynasty = Object.keys(dynastyReign[i])[0];
      const reignRomanNumeral = dynastyReign[i][dynasty];
      const numeralToYear = convertYear(reignRomanNumeral);
  
        const currentReign = numeralToYear;
  
        if (currentReign > longestReign) {
          longestReign = currentReign;
          longestDynastyKey = dynasty;
        }
    }
  
    return longestDynastyKey;
  }
  
  function convertYear(yearRoman) {
    const romanNumerals = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    let total = 0;
    let prevValue = 0;
  
    for (let i = 0; i < yearRoman.length; i++) {
      const currentValue = romanNumerals[yearRoman[i]];
      if (currentValue === undefined) {
        return "Invalid";
      }
  
      if (currentValue > prevValue) {
        total += currentValue - 2 * prevValue;
      } else {
        total += currentValue;
      }
      prevValue = currentValue;
    }
    total += 1000; 
    return total;
  }
  
  console.log(longestDynasty(dynastyReign));