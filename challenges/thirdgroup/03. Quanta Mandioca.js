/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */

const total = [300, 1500, 600, 1000, 150]
  .map(x => x * parseInt(gets()))
  .reduce((a, b) => a + b) + 225;
console.log(total);