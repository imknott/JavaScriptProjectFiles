function getSleepHours(day){
    day = day.toLowerCase();
  
  switch(day){
    case 'monday':
    return 8;
    break;
    case 'tuesday':
    return 8;
    break;
    case 'wednesday':
    return 5;
    break;
    case 'thursday':
    return 5;
    break;
    case 'friday':
    return 8;
    break;
    case 'saturday':
    return 6;
    break;
    case 'sunday':
    return 4;
    break;
    default:
    return 'enter a day of the week such as friday';
    break;
  
  }
  
  }
  
  function getActualSleepHours(){
    
    let monday = getSleepHours('monday');
   let tuesday = getSleepHours('tuesday');
   let wednesday = getSleepHours('wednesday');
    let thursday = getSleepHours('thursday');
  let friday = getSleepHours('friday');
   let saturday = getSleepHours('saturday'); 
    let sunday = getSleepHours('sunday'); 
  
  return monday + tuesday + wednesday + thursday + friday + saturday + sunday;
  
  
  
  }
  
  function getIdealSleepHours(){
  
  const idealHours = 8;
  
  return idealHours * 7;
  
  }
  
  
  function calculateSleepDebt(){
  
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  let totalHours = Math.abs(idealSleepHours - actualSleepHours);
  
  if(actualSleepHours === idealSleepHours){
    return 'You got the perfect amount of sleep :)';
  }else if(actualSleepHours > idealSleepHours){
    return `You got too much sleep! Total hours over ideal time ${totalHours}`;
  }else if(actualSleepHours < idealSleepHours){
    return `You need to get more rest! Total hours under your ideal amount is ${totalHours}.`;
  }
  
  
  
  }
  
  
  console.log(calculateSleepDebt());
  
  
  
  
  